import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((err) => {
      console.error(`GraphQL error: ${err.message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://graphql.anilist.co/'
  })
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
