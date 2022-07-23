'use strict';

const { mock } = require("./mock.js");
const  { Client } = require("pg");

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
    ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 5000
};

module.exports.getProductsList = async (event) => {
  console.log({
    path: event.path,
    httpMethod: event.httpMethod,
    query: event.queryStringParameters
})
  console.log(dbOptions)
  const db = new Client(dbOptions);
  await db.connect();
  
  const defaultHeaders = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
};

  try{
    const listProduct = await db.query(`SELECT id, s.stock as count, price, title, description
    FROM products p 
    LEFT JOIN stocks s ON s.product_id = p.id LIMIT 10;`)

    if (listProduct.rowCount === 0 ) {
      return {
        statusCode: 404,
         headers: {
            ...defaultHeaders
        },
        body: JSON.stringify({"Error:": "Product not found"})
        };
    } else {
      
       const result = {
        statusCode: 200,
         headers: {
            ...defaultHeaders
        },
        body: JSON.stringify(listProduct.rows)   
        };
      console.log('Fetched to FrontEnd', result)
      return result
    }
  }catch(err){
    throw new Error( { message: err.message || '500 ' })
  }finally{
    db.end()
  }
};
