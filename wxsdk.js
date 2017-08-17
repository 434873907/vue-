
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
//开启debug模式
Vue.config.debug = true;
const app_prex = 'survey_';
const app_api_settings = {
    "spid":"1001",
	"channel":"3",
	"sign":"3f52f63fad63c5dd209d28420977fb5d",
	"format":"JSON",
	"random":"1234",
	"oper":"127.0.0.1"
};
let URI = window.location.href;
window.sessionStorage.setItem(app_prex + 'URI', URI);
window.sessionStorage.setItem(app_prex + 'surveyId', getQstr('surveyId') || "5927f1f0cc0ff800057c9d2e");
let REDIRECT_URI = encodeURIComponent(URI);
const url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb416a4504b34bd1f&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=snsapi_userinfo&state=STATE&component_appid=wx83f4567ab2bf9177#wechat_redirect';
const app_user=window.localStorage.getItem(app_prex + 'user');
console.log('user',app_user);
if(app_user&&app_user!= 'undefined'&&app_user.length!=0&&app_user!=null){
    console.log('subscribe',JSON.parse(app_user).subscribe);
    if(JSON.parse(app_user).subscribe){
        init();
        console.log('init');
    }
    else login();
}else login();
function init(){
	const app = new Vue({
				    router,
				    render: h => h(App)
				}).$mount('#app')
}
function login(){
	if(window.navigator.userAgent.toLocaleLowerCase().indexOf('micromessenger')>= 0){
	    const code=getQstr('code');
	    if(code){
	        console.log('code',code);
	        checkCode();
	    }else{
	        location.href = url;
	        checkCode();
	    }
	}else {
		window.localStorage.setItem(app_prex + 'user',JSON.stringify({openid:'o31FMuDJwsIOS6Td2VqGbNGLO6rk',subscribe:1}));
        init();
	}
}
function doApi(data,callback) {
    const postData=JSON.stringify({...data,...app_api_settings});
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const data=JSON.parse(this.responseText);
            callback(data);
        }
    });
    xhr.open("POST", "http://plat.weixin.diandianwy.com/app");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(postData);
}
function checkCode(){
    let code=getQstr('code');
    if(code){
        console.log('code------',code);
        doApi({
            service:'teyang.m161201.user.wechat.mpjs.login',
            code:code
        },function (data) {
            console.log('userinfo111',data);
            if(data.code==0){
                if(data.obj){
                    let app_user=data.obj;
                    window.localStorage.setItem(app_prex + 'user',JSON.stringify(app_user));
                    init();
                }else {
                    URI=window.sessionStorage.getItem(app_prex + 'URI');
                    login();
                }
            }
        })
    }else{
        setTimeout(function(){checkCode()},500);
    }
}
function getQstr(name) {
    let reg=new RegExp(""+name+"=([^&]+?)(#|&|$)",'i');
    let url=window.location.href;
    let index=url.indexOf('?');
    let r=url.substr(index).match(reg);
    if (r != null) return unescape(r[1]);
    return null;
}
//Object.assign Polyfill
if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      "use strict";
      if (target === undefined || target === null)
        throw new TypeError("Cannot convert first argument to object");
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
      }
      return to;
    }
  });
}