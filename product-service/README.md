task3

1. https://d5eqd96txe.execute-api.eu-west-1.amazonaws.com/dev/products

2. https://d5eqd96txe.execute-api.eu-west-1.amazonaws.com/dev/products/4

3. try/catch implemented

4. Error handling implemented

5. Web Pack

6. Lambda functions are at separated files in the folder handlersProduct

7. Testing by Jest: npm run test

8. import/export ES6

task4

1. Fixtures in the folder mock_DB

Reviewers should verify the lambda functions by invoking them through provided URLs.

1 - Task 4.1 is implemented

Done

3 - Task 4.2 is implemented lambda links are provided and returns data

Done
https://lee9wtso5l.execute-api.eu-west-1.amazonaws.com/dev/products OK
https://lee9wtso5l.execute-api.eu-west-1.amazonaws.com/dev/products/7504168c-80d9-4eec-9a0a-6155b96993a8 OK

4 - Task 4.3 is implemented lambda links are provided and products is stored in DB (call Task 4.2 to see the product)

not implemented

5 - Your own Frontend application is integrated with Product Service (/products API) and products from Product Service are represented on Frontend. Link to a working Frontend application is provided for cross-check reviewer.

Done
https://d3efy1zpus6bte.cloudfront.net
https://d3efy1zpus6bte.cloudfront.net/admin/products

Additional (optional) tasks
+1 (All languages) - POST /products lambda functions returns error 400 status code if product data is invalid

not implemented

+1 (All languages) - All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)

Done  
https://lee9wtso5l.execute-api.eu-west-1.amazonaws.com/dev/products/898 500 Error

+1 (All languages) - All lambdas do console.log for each incoming requests and their arguments

Done

+1 (All languages) - Transaction based creation of product (in case stock creation is failed then related to this stock product is not created and not ready to be used by the end user and vice versa)

not implemented

https://d3efy1zpus6bte.cloudfront.net
https://d3efy1zpus6bte.cloudfront.net/admin/products
https://lee9wtso5l.execute-api.eu-west-1.amazonaws.com/dev/products
https://lee9wtso5l.execute-api.eu-west-1.amazonaws.com/dev/products/7504168c-80d9-4eec-9a0a-6155b96993a8
