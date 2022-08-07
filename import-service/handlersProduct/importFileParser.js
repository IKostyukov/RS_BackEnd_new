'use strict';

const csv = require("csv-parser");
const AWS = require('aws-sdk');

module.exports.importFileParse = async (event, _context) => {
    
    const s3 = new AWS.S3({region: 'eu-west-1'});
    const sqs = new AWS.SQS()

    for (const record of event.Records) {
        const bucketName = record.s3.bucket.name;
        // const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));
        const key = record.s3.object.key;
  
        const params = {
          Bucket: bucketName,
          Key: key,
        };
  
        try {
          console.log(`Getting object ${key} from bucket ${bucketName}.`);
          const s3Stream = s3.getObject(params).createReadStream();
       
  
          await new Promise((resolve, reject) =>
            s3Stream
              .pipe(csv())
              .on("error", (err) => {
                reject(err);
              })
              .on("data", (data) => {
                sqs.sendMessage({
                    QueueUrl: process.env.QueueUrl,
                    MessageBody: data                    
                }, ()=> {
                    console.log("CSV data::::::", data)
                });                
              })
              .on("end", resolve)
          );
  
          await s3
            .copyObject({
              Bucket: bucketName,
              CopySource: `${bucketName}/${key}`,
              Key: key.replace("uploaded", "parsed"),
            })
            .promise();
  
          console.log(params);
  
          await s3.deleteObject(params).promise();
          console.log(`Object ${key} from bucket ${bucketName} parced and relocated.`);
        } catch (err) {
          console.log(err);
          const message = `Error getting object ${key} from bucket ${bucketName}.`;
          throw new Error(message);
        }
      }
    };

























// // const AWS = require('aws-sdk');
// const BUCKET = 'arn:aws:s3:::import-service-epam';
// const defaultHeaders = {
//     'Access-Control-Allow-Methods': '*',
//     'Access-Control-Allow-Headers': '*',
//     'Access-Control-Allow-Origin': '*'
// };

// module.exports.importFileParser = async (event) => {
//         const fileName = Number(event.pathParameters.fileName);
//         const s3 = new AWS.S3({ region: 'eu-west-1' });
//         let status = 200;
//         let products = [];
//         const params = {
//             Buscket: BUCKET,
//             prefix: 'upload/'
//         };

//         // try {
//         //     const s3Response = await s3.listObjectsV2(params).promise();
//         //     products = s3Response.Contents;
//         // } catch (error) {
//         //     console.error(error);             
//         //     status = 500;
//         // }

//         const response = {
//             statusCode: status,
//             headers: {
//                 ...defaultHeaders
//             },
//             body: JSON.stringify(products
//                 .filter(product => product.Size))
//                 .map(product => `https://${BUCKET}.s3.eu-west-1.amazonaws.com/uploaded/${product.Key}`)       
//         };
//     }