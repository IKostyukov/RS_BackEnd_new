'use strict';

const { mock } = require("./mock.js");

module.exports.getProductsById = async (event) => {
  try{
    if(event.pathParameters) {
      
      const productId = Number(event.pathParameters.productId);
      const result = mock.find(product => product.productId == productId);
  
      if (!result) {
        return {
            statusCode: 404,
            body: JSON.stringify({"Error:": "Product not found"})
            };
      } else {
          return {
            statusCode: 200,
            body: JSON.stringify(result)
            };
      }
    }
  }catch(err){
    console.log('----->>>>>', err.message); 
    throw new Error(err)
  }
};

// ########################################################
// 'use strict';

// import  mock  from "./mock.js";

// async function getProductsById(event) {
//   try {
//     if (event.pathParameters) {

//       const productId = Number(event.pathParameters.productId);
//       const result = mock.find(product => product.productId == productId);

//       if (!result) {
//         return {
//           statusCode: 404,
//           body: JSON.stringify({ "Error:": "Product not found" })
//         };
//       } else {
//         return {
//           statusCode: 200,
//           body: JSON.stringify(result)
//         };
//       }
//     }
//   } catch (err) {
//     console.log('----->>>>>', err.message);
//     throw new Error(err);
//   }
// }

// export default getProductsById