const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
