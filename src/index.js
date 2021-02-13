// index.js
// This is the main entry point of our application
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
require('dotenv').config();

const db = require('./db');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

let notes = [
    { id: '1', content: 'This is a note', author: 'Adam Scott' },
    { id: '2', content: 'This is another note', author: 'Yeha' },
    { id: '3', content: 'Oh hey look, another note', author: 'Lily' },
];


const app = express();

db.connect(DB_HOST);

app.get('/', (req, res) => res.send('Hello Worldssss!!!!!!!'));

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => {
        return { models };
    }
});

server.applyMiddleware({ app, path: '/api'});

app.listen(port, () => console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`));