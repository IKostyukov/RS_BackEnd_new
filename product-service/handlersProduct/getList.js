'use strict';

const { mock } = require("./mock.js");

module.exports.getProductsList = async (event) => {
  try{
    if(mock) {
      return {
        statusCode: 200,
        body: JSON.stringify(mock)
      };
    }
    return {
      statusCode: 404,
      body: JSON.stringify({"Error:": "Product not found"})
      };
  }catch(err){
    throw new Error(err.message)
  }
};




// #########################################
// 'use strict';

// import  mock  from "./mock";
// import { Client } from "pg";

// const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;
// const dbOptions = {
//   host: PG_HOST,
//   port: PG_PORT,
//   database: PG_DATABASE,
//   user: PG_USERNAME,
//   password: PG_PASSWORD,
//   ssl: {
//     rejectUnauthorized: false
//   },
//   connectionTimeoutMillis: 5000
// };


// const getProductsList = async (event) => {
//   const db = new Client(dbOptions);
//   await db.connect();

//   try{
//     const listProduct = await db.query(`SELECT * FROM products LIMIT 10`)
//     if (listProduct.rowCount === 0 ) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({"Error:": "Product not found"})
//         };
//     } else {
//       return {
//         statusCode: 200,
//         body: JSON.stringify(listProduct.rows)
//       };
//     }
//   }catch(err){
//     throw new Error(err.message)
//   }finally{
//     db.end()
//   }
// };

// export default getProductsList


