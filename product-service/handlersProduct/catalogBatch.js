"use strict";
const AWS = require('aws-sdk');

module.exports.catalogBatchProcess = async (event) => {
    const record = event.Records.map(({ body }) => body)
    const sns = new AWS.SNS({ region: "eu-west-1" });
    sns.publish({
        Subject: 'Product uploaded on the DataBase',
        Message: JSON.stringify(record),
        TopicArn: process.env.SNS_ARN
    }, ()=>{
        console.log('send email', JSON.stringify(record))
    })    
}