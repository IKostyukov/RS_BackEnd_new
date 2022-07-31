const getProductsList = require('../getList');
const mock = require("../mock");

test('retrieve product list', async() => {
  const expected = await getProductsList()
  const responce  = {
    statusCode: 200,
    body: mock
  }
  expect(expected.toString()).toMatch(responce.toString());
});