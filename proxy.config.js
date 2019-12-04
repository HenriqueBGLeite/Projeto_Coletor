const proxy = [
    {
      context: '/api',
      target: 'https://localhost:44383',
      secure: false,
      logLevel: 'debug'
    }
  ];
  module.exports = proxy;