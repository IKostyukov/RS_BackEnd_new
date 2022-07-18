const { getProductsList } = require('../handlersProduct/getList.js');
// const { mock } = 


test('retrieve existing productId 4', async() => {
  let event = {};
  event.pathParameters = {productId: 4};
  const responce = await getProductsList(event)
  
  const product = {"productId": 4,"price": 5}
  const result  = {
    statusCode: 200,
    body: product
    }
  expect(responce.toString()).toMatch(result.toString());
});


test('retrieve not existing productId 6', async() => {
    let event = {};
    event.pathParameters = {productId: 6};
    const responce = await getProductsList(event)
    
    const product = {"Error:": "Product not found"};
     
    const result  = {
      statusCode: 404,
      body: product
      }
    expect(responce.toString()).toMatch(result.toString());
  });


  

  