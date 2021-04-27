const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
    books: [Book]
    }
`;

const books = [
    {
        title: 'lorem',
        author: 'ipsum'
    },
    {
        title: 'ipsum',
        author: 'lorem'
    }
]