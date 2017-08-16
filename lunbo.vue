<template>
    <div>
      <div id="wapper">
        <ul id="list">
          <li v-for="item of imgList">
            <a href="javascript:viod(0)">
              <img :src="item.adUrl" />
            </a>
          </li>
        </ul>

        <nav id="nav" style="display: none">
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </nav>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import cssTransform from '../lib/transform'
//console.log(css)
    export default{
      props:['imgList'],
        components: {

        },
        data(){
            return {

            }
        },
      watch:{
        imgList:function () {
          this.getData()
        }
      },
        mounted(){


        },
      methods:{
        getData(){
          setTimeout(()=>{
//            document.addEventListener(
//              "touchstart",
//              function(ev){
//               ev.preventDefault();
//              }
//            );
            var wrap = document.querySelector("#wapper");
            var list = document.querySelector("#list");
            if(list.innerHTML){
              list.innerHTML += list.innerHTML;
            }
            var lis = document.querySelectorAll("#list li");
            var nav = document.querySelectorAll("#nav span");
         wrap.style.height = lis[0].offsetHeight+'px';
            list.style.width = lis.length+'00%';
            for(var i=0;i<lis.length;i++){
              lis[i].style.width = 1/lis.length*100+'%';
//              console.log(lis[i].style.width)
            }
//          var style = "#wapper{height:"+ lis[0].offsetHeight+"px}";
//          style+="#list{width:"+lis.length+"00%}";
//          style+="#list li{width:"+(1/lis.length*100)+"%}"
//          css.innerHTML+= style;
            var clearTime=0;
            var now =0;
            var startPoint = 0;
            var startX = 0;
            var	dis =0;
            cssTransform(list,"translateX",0);
            auto();

            wrap.addEventListener(
              "touchstart",
              function(e) {
//                e.preventDefault();
                list.style.transition = "none";

                var translateX = cssTransform(list,"translateX");
                now = Math.round(-translateX / wrap.offsetWidth);
                //注意nav中span的个数必须是总li的一半
                if(now == 0) {
                  now = nav.length;
                }
                if(now == lis.length-1) {
                  now = nav.length-1;
                }

                startPoint = e.changedTouches[0].clientX;

                cssTransform(list,"translateX",-now * wrap.offsetWidth);
                startX = cssTransform(list,"translateX");

                clearInterval(clearTime);
              }
            );
            wrap.addEventListener(
              "touchmove",
              function(e) {
                var nowPoint = e.changedTouches[0].clientX;
                dis = nowPoint - startPoint;
                cssTransform(list,"translateX",startX + dis)
              }
            );
            wrap.addEventListener(
              "touchend",
              function(e) {
                var translateX = cssTransform(list,"translateX");

                now = Math.round(-translateX / wrap.offsetWidth);
                //限制触屏范围
                if(now<0){
                  now=0;
                }
                if(now > lis.length-1) {
                  now = lis.length-1;
                }
                //新增过渡效果
                autoMove();
                auto();
              }
            );

            function auto() {
              clearTime=setInterval(
                function() {
                  if(now == lis.length-1){
                    now =nav.length-1;
                  }
                  list.style.transition = "none";
                  cssTransform(list,"translateX",-now * wrap.offsetWidth);
                  setTimeout(function(){
                    now++;
                    autoMove();
                  },30)
                },3000);
            }

            function autoMove(){
              list.style.transition = "1s";
              cssTransform(list,"translateX",-now * wrap.offsetWidth);
              for(var i = 0 ; i < nav.length; i++) {
                nav[i].className = "";
              }
              nav[now%nav.length].className = "active";
            }
          },30)
        }
      }

    }
</script>
<style scoped lang='scss'>
    @import '../common/public.scss';
    #wapper {
      /*position: relative;!*供nav绝对定位使用*!*/
    }
    #list{
      position: absolute;/*子元素浮动,父元素为绝对定位,则父元素不用清除浮动*/
      left: 0;
      top: 88rem/$rem;
      /*overflow: hidden;清浮动*/
      list-style: none;
    }
    #list li{
      float: left;
    }
    #list li img { /*js写完之后再加*/
      width: 100%;
      height: 210rem/$rem;
      display: block;/*解决img撑a标签空隙3px*/
    }

    #nav {
      position: absolute;
      left: 0;
      bottom: 3px;
      width: 100%;/*使小原点居中*/
      line-height: 10px;
      text-align: center;
    }
    #nav span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #C00;
      border-radius: 5px;
    }
    #nav .active {
      background: #0F0;
    }
</style>
