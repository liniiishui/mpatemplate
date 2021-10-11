import Vue from 'vue'
import App from './index.vue'
import store from '@/store'

// 引入sgui组件库
import '@/assets/icon/iconfont.js'
import '@/assets/icon/iconfont.css'

import {
  SgDatePicker,
  SgInputNumber,
  SgTable,
  SgSpin,
  SgContainer,
  SgHeader,
  SgAside,
  SgMain,
  SgPage,
  SgButton,
  SgDropdown,
  SgIcon,
  SgDropdownItem,
  SgInput,
  SgMsg,
  SgModal,
  SgButtonGroup,
  SgTab,
  SgTabPane,
  SgTree,
  SgCheckbox,
  SgPageStatus,
  SgScroll,
  SgLoading
} from 'southgisui'

Vue.use(SgLoading)
Vue.use(SgDatePicker)
Vue.use(SgInputNumber)
Vue.use(SgTable)
Vue.use(SgSpin)
Vue.use(SgContainer)
Vue.use(SgHeader)
Vue.use(SgHeader)
Vue.use(SgAside)
Vue.use(SgMain)
Vue.use(SgPage)
Vue.use(SgButton)
Vue.use(SgDropdown)
Vue.use(SgIcon)
Vue.use(SgDropdownItem)
Vue.use(SgInput)
Vue.use(SgMsg)
Vue.use(SgModal)
Vue.use(SgButtonGroup)
Vue.use(SgTab)
Vue.use(SgTabPane)
Vue.use(SgTree)
Vue.use(SgCheckbox)
Vue.use(SgPageStatus)
Vue.use(SgScroll)

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#index')
