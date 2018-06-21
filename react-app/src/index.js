import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log('result', result))

ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
      <App />
      </Router>
    </ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
