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
          '/mapviewmgr',
          '/mainweb',
          '/cas',
          '/flowengine',
          '/formengine',
          '/bootstrap',
          '/formdesigner-web',
          '/flowdesigner',
          '/mainProject',
          '/imobile-home-customizer-web',
          '/imobile-main-web',
          '/suppmgr',
          '/exprengine',
          '/boengine',
          '/filemgr'
        ],
        target: 'http://192.168.10.126'
      }
    ],
    // host
    host: 'localhost',
    // 端口
    port: 8089,
    // 开发路径别名
    alias: {
      '@': resolve('src'),
      vue$: 'vue/dist/vue.esm.js',
    },
    // 自动解析拓展
    extensions: ['.js', '.vue', '.scss']
  },
  build: {
    // 输出目标目录
    assetsRoot: resolve('./businesslist'),
    // 输出静态资源目录
    assetsSubDir: 'static',
    // sourcemap配置
    sourcemap: true,
    // 开启bundleAnalyzerReport
    bundleAnalyzerReport: false
  }
}
