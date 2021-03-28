// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './sotre'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Le from 'leaflet'
// import 'leaflet/dist/leaflet'
import '@supermap/iclient-leaflet'//好像此导入包含了leaflet的导入 全局可用L.函数 不可import后重命名 ===全模块引入
import 'leaflet/dist/leaflet.css'

// import SuperMapCesium from 'vue-cesium-supermap'

// Vue.use(SuperMapCesium,{
//   cesiumPath:"../../Cesium-1.71/Build"
// })
// Vue.use(Le)
Vue.prototype.Global=new Object();//定义一个全局vue对象
Vue.config.productionTip = false
Vue.use(VueAxios,axios);//全局配置axios 组件中通过this.axios使用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
