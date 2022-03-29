const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        products: [Product!],
        type: String
    },
    type Product {
        id: Int
        name: String
        price: Int
        author: String
        type: String
        img: String
        inCart: Boolean
        category: String
    }
`);
module.exports = schema;
