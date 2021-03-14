import {ApolloClient, ApolloLink, concat, createHttpLink} from '@apollo/client';
import {cache} from './cache';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URI,
})

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext({
      headers: {
        Authorization: localStorage.getItem('Authorization') || null,
      }
    });
  
    return forward(operation);
  })
export const client = new ApolloClient({
    link: concat(authMiddleware,httpLink),
    cache :cache,
})
