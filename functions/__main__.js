/**
 * A basic Hello World function
 * @param {string} authHeader access token
 * @returns {string}
 */

const GraphQLClient = require('graphql-request').GraphQLClient;

module.exports = async (authHeader = '', context) => {
  const endpoint = 'https://sib28.herokuapp.com/v1/graphql';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'X-Hasura-Admin-Secret': authHeader,
    },
  });

  const query = `{
    quotes {
      quote
      id
      credit
    }
  }`;

  const data = await graphQLClient.request(query);

  return data;
};
