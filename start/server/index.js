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

const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({ typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`Server Ready at ${url}`);
})