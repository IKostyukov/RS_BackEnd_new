'use strict';

// const AWS = require('aws-sdk');
const BUCKET = 'arn:aws:s3:::import-service-epam';
const defaultHeaders = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
};

module.exports.importFileParser = async (event) => {
        const fileName = Number(event.pathParameters.fileName);
        const s3 = new AWS.S3({ region: 'eu-west-1' });
        let status = 200;
        let products = [];
        const params = {
            Buscket: BUCKET,
            prefix: 'upload/'
        };

        // try {
        //     const s3Response = await s3.listObjectsV2(params).promise();
        //     products = s3Response.Contents;
        // } catch (error) {
        //     console.error(error);             
        //     status = 500;
        // }

        const response = {
            statusCode: status,
            headers: {
                ...defaultHeaders
            },
            body: JSON.stringify(products
                .filter(product => product.Size))
                .map(product => `https://${BUCKET}.s3.eu-west-1.amazonaws.com/uploaded/${product.Key}`)       
        };
    }