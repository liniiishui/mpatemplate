'use strict'
/**
 * @desicription:新建组件、页面模板
 * 命令：
 * 新建组件  make new component 组件名
 * 新建页面  make new page 页面名
 */

if (!process.argv[2]) {
  process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const name = process.argv[3]
const component = path.resolve(__dirname, '../src/component', name)
const page = path.resolve(__dirname, '../src/pages', name)

if (process.argv[2] === 'component') {
  const Files = [
    {
      filename: 'index.js',
      content: `import ${name} from './${name}.vue';

export default ${name};
`
    },
    {
      filename: `${name}.vue`,
      content: `<template>
    <div class="${name}"></div>
</template>
    
<script>
export default {
  name: '${name}'
};
</script>
<style lang='scss' scoped>
@import './index.scss';
</style>
`
    },
    {
      filename: path.join('./', `index.scss`),
      content: ``
    }
  ]
  // 创建组件
  Files.forEach(file => {
    fileSave(path.join(component, file.filename))
      .write(file.content, 'utf8')
      .end('\n')
  })
} else if (process.argv[2] === 'page') {
  const Files = [
    {
      filename: `${name}.js`,
      content: `import Vue from "vue"
import App from "./${name}.vue"
import store from "@/store"
// 引入sgui组件库
import "southgisui/lib/sgui-theme/index.css"
import sgui from "southgisui"
// 引入系统样式表
import "@/assets/scss/common"
import "./${name}.scss"

Vue.use(sgui)
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#${name}")
`
    },
    {
      filename: `${name}.html`,
      content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>${name}</title></head>
<body>
<div id="${name}"></div>
</body>
</html>
`
    },
    {
      filename: `${name}.vue`,
      content: `<template>
    <div class="${name}"></div>
</template>

<script>
export default {
  name: "${name}"
}
</script>

<style scoped lang="scss">

</style>
`
    },
    {
      filename: path.join('./', `${name}.scss`),
      content: ``
    }
  ]
  // 创建页面
  Files.forEach(file => {
    fileSave(path.join(page, file.filename))
      .write(file.content, 'utf8')
      .end('\n')
  })
}
