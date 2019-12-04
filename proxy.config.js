const proxy = [
    {
      context: '/api',
      target: 'http://localhost:44383',
      secure: false,
      //changeOrigin: true,
      logLevel: 'debug',
      //pathRewrite: { '^/api': ''}
    }
  ];
  module.exports = proxy;