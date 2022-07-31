'use strict';

const AWS = require('aws-sdk');
const BUCKET = 'import-service-epam';
// s3://import-service-epam/uploaded/
// https://import-service-epam.s3.eu-west-1.amazonaws.com
const defaultHeaders = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
};
// importProductsFile
module.exports.importProductsFile = async (event) => {
    
    console.log({
        path: event.path,
        httpMethod: event.httpMethod,
        query: event.queryStringParameters
    })

    const fileName = event.queryStringParameters.name;
    const s3 = new AWS.S3({region: 'eu-west-1'});
    console.log('Fetched s3 ============>', s3)
    let status = 200;
    let products = [];
    const params = {
        Bucket: BUCKET,
        prefix: 'uploaded/'
    };

    try {
        const s3Response = await s3.listObjectsV2(params).promise();
        console.log('Fetched products', s3Response)
        products = s3Response.Contents;
    } catch (error) {
        console.error(error);             
        status = 500;
    }

    const response = {
        statusCode: status,
        headers: {
            ...defaultHeaders
        },
        body: JSON.stringify(products
            .filter(product => product.Size)
            .map(product => `https://${BUCKET}.s3.eu-west-1.amazonaws.com/uploaded/${product.Key}`))       
    };
    console.log('Fetched to FrontEnd', response)
    return response
}