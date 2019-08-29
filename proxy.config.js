const proxy = [
    {
      context: '/api',
      target: 'https://localhost:44383',
      secure: false,
      changeOrigin: true,
      logLevel: "debug"
    }
  ];
  module.exports = proxy;