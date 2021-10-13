const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 开发环境配置
  dev: {
    // 接口代理地址
    proxy: [{
      changeOrigin: true,
      hostRewrite: 'localhost:8080',
      context: [
        '/bootstrap',
        '/mainProject',
        '/cas',
        '/mainweb'
      ],
      target: 'http://192.168.10.126'
    }],
    // 端口
    port: 8080,
    // 主机号，局域网内可访问时，可修改为0.0.0.0
    host: 'localhost',
    // 开发别名路径
    alias: {
      '@': resolve('src'),
      vue$: 'vue/dist/vue.esm.js'
    },
    // 自动解析拓展
    extensions: ['.js', '.vue', '.scss']
  },
  build: {
    // 输出目标目录
    assetsRoot: resolve('./dist'),
    // 输出静态资源目录
    assetsSubDir: 'static',
    // sourcemap配置
    sourcemap: true,
    // 开启bundleAnalyzerReport
    bundleAnalyzerReport: false
  }
}
