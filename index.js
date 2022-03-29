let express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { products, users } = require("./graphQL");
const port = 5000;
const app = express();
app.use(
  "/products",
  graphqlHTTP({
    schema: products.schema,
    rootValue: products.data,
    graphiql: true,
  })
);
app.use(
  "/users",
  graphqlHTTP({
    schema: users.schema,
    rootValue: users.data,
    graphiql: true,
  })
);
app.listen(port, () =>
  console.log(`Express GraphQL Server Running port ${port}`)
);
