import  getProductsList  from '../getList';
import  mock  from "../mock";

test('retrieve product list', async() => {
  const expected = await getProductsList()
  const responce  = {
    statusCode: 200,
    body: mock
  }
  expect(expected.toString()).toMatch(responce.toString());
});