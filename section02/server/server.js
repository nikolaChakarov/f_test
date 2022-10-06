const { ApolloServer ,gql } = require('apollo-server');

// GraphQL schema
const typeDefs = gql`
    schema {
        query: Query
    }

    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello world...'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port: 9000})
    .then(props => 
            console.log(`Server running at ${props.url}`)
        )
    .catch(err => console.log(err));
