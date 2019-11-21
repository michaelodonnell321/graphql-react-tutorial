import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


//dependencies
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//create httpLink that connects ApolloClient instance with GraphQL API
//server will run on http://localhost:4000
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

//initiate ApolloClient
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

//render root component, app is wrapped in ApolloProvider and client is passed as prop
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
