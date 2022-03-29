const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        users: [User!]
    },
    type User {
        id: Int
        name: String,
        lastName: String,
        age: String,
        email: String
    },
`);


module.exports = schema;
