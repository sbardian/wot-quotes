/**
 * A basic Hello World function
 * @param {string} authHeader access token
 * @returns {string}
 */

const GraphQLClient = require('graphql-request').GraphQLClient;
var jwt = require('jsonwebtoken');

module.exports = async (credit = null, limit = null, random = false) => {
  const endpoint = 'https://sib28.herokuapp.com/v1/graphql';
  const token = jwt.sign(
    {
      sub: 'sbardian@gmail.com',
      iat: parseInt(Date.now() / 1000, 10),
      exp: parseInt(Date.now() / 1000, 10) + 120,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['generic'],
        'x-hasura-default-role': 'generic',
        'x-hasura-user-id': 'sbardian@gmail.com',
      },
    },
    process.env.authHeader,
  );

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  let query;

  if (credit && limit) {
    query = `{
      quotes(where: {credit: {_like: "%${credit}%"}}, limit: ${limit}) {
        quote
        id
        credit
      }
    }`;
  } else if (credit) {
    query = `{
      quotes(where: {credit: {_like: "%${credit}%"}}) {
        quote
        id
        credit
      }
    }`;
  } else if (limit) {
    query = `{
      quotes(limit: ${limit}) {
        quote
        id
        credit
      }
    }`;
  } else {
    query = `{
      quotes {
        quote
        id
        credit
      }
    }`;
  }

  if (random) {
    const randomQuote = await graphQLClient.request(query);
    const index = Math.random() * randomQuote.quotes.length;
    return randomQuote.quotes[Math.ceil(index) - 1];
  }
  const data = await graphQLClient.request(query);
  return data;
};
