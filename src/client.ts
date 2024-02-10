import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                tickets: {
                    merge: (_existing, incoming) => incoming,
                },
            },
        },
    },
});

export const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
});
