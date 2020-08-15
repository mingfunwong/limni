module.exports = { 
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', //打包到生产环境使用./
};
