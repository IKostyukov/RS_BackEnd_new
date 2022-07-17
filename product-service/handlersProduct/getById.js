'use strict';

const { mock } = require("./mock.js");

module.exports.getProductsById = async (event) => {
  try{
    if(event.pathParameters) {
      
      mock.find(product => {
        if(Number(event.pathParameters.productId) === product.productId) {
          console.log('yes')
          
          return {
          statusCode: 200,
          body: JSON.stringify(mock)
          };
        }
      })
      return {
        statusCode: 404,
        error: new Error("Product not found")
      }
    }
  }catch(err){
    console.log('----->>>>>', err.message); 
    throw new Error(err)
  }
};





