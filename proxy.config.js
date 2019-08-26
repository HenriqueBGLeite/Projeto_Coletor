const proxy = [
    {
      context: '/api',
      target: 'http://192.168.0.118:81',
      secure: false,
      changeOrigin: true,
      logLevel: "debug"
    }
  ];
  module.exports = proxy;