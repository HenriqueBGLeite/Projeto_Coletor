const proxy = [
    {
      context: '/api',
      target: 'https://localhost:44383', //'http://192.168.0.118:81'
      secure: false,
      logLevel: 'debug'
    }
  ];
  module.exports = proxy;