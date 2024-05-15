const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!  # Use the Nationality enum type here
    friends: [User]
    favoriteMovies:[Movie]
  }


  type Movie {
   id: ID!
   name: String!
   yearOfPublication: Int!
   isInTheaters: Boolean!

  }

  type Query {
    users: [User!]!
    user(id:ID!): User! 
    movies:[Movie!]!
    movie(name: String!):Movie!
  }

  input CreateUserInput{
    name: String!
    username: String!
    age: Int = 18 #default to 18 
    nationality: Nationality = BRAZIL  # Use the Nationality enum type here
  }

  # OR

  input UpdateUsernameInput{
    id:ID!
    name: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUserName(id: ID!, name: String! ): User
  }

  

  enum Nationality {
    BRAZIL
    CHILE
    INDIA
    GERMANY  # ENUM ARE CASE SENSITIVE SHOULD MATCH DATA 
  }
`;

module.exports = { typeDefs };
