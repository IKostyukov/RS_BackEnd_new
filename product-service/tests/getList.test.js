const { getProductsList } = require('../handlersProduct/getList.js');
const { mock } = require("../handlersProduct/mock.js");


test('retrieve product list', async() => {
  const expected = await getProductsList()
  const responce  = {
    statusCode: 200,
    body: mock
  }
  expect(expected.toString()).toMatch(responce.toString());
});