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
      error: new Error("Product not found")
    }
  }catch(err){
    throw new Error(err.message)
  }
};


