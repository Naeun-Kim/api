const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar DateTime
    type Note {
        id: ID!
        content: String!
        author: User!
        createdAt: DateTime!
        updatedAt: DateTime!
    }
    type Query {
        hello: String!
        notes: [Note!]!
        note(id: ID!): Note!
    }
    type Mutation {
        newNote(content: String!): Note!
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
    }
    type User {
        id: ID!
        username: String!
        email: String!
        avatar: String
        notes: [Note!]!
    }
`