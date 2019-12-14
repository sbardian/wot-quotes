export class GraphQLClient {
  constructor() {
    /* eslint-disable-next-line */
    console.log('Mock GraphQLClient: constructor was called');
  }

  request() {
    return {
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
    };
  }
}
