import {ApolloClient, createHttpLink} from '@apollo/client';
import {cache} from './cache';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URI,
})
export const client = new ApolloClient({
    link: httpLink,
    cache :cache,
})
