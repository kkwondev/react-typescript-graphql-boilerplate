import React from 'react';
import {client} from "./apollo/client"
import { ApolloProvider } from '@apollo/client';
import { Redirect, Route, Switch } from 'react-router-dom';
import MyPage from './components/pages/MyPage';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/" component={MyPage} exact={true}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Redirect path="*" to="/" />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
