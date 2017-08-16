// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 // import 'weui'
import weui from './common/wejs';
Vue.use(weui)


Vue.config.productionTip = false
 var px2remLoader = {
    loader: 'px2rem2-loader?options=75'
  }
   function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader,px2remLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
var pxUnit = 75;     // 在px2rem中预设rem的值 即 1rem = ? px
var designWid = 750;  // 设计稿宽度
var winWid = window.innerWidth;
var bl = winWid / designWid;
document.querySelector('html').style.fontSize = (bl * pxUnit) + 'px';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
