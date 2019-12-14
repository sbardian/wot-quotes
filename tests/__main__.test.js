/* eslint-disable-next-line */
// const GraphQLClient = require('graphql-request').GraphQLClient;
const wotQuotes = require('../functions/__main__');

jest.mock('graphql-request');

describe('Temp test', () => {
  it('should pass', async () => {
    const response = await wotQuotes();
    expect(response).toEqual({
      quotes: [
        {
          quote: 'In wars, boy, fools kill other fools for foolish causes. ',
          id: 1,
          credit: 'Thom Merrilin',
        },
        {
          quote: 'Teach him how you will, a pig will never play the flute. ',
          id: 13,
          credit: 'Thom Merrilin',
        },
      ],
    });
  });
});
