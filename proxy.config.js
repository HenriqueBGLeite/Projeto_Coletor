const proxy = [
    {
      context: '/api',
      target: 'http://192.168.0.118:81', //'https://localhost:44383',
      secure: false,
      logLevel: 'debug'
    }
  ];
  module.exports = proxy;