<template>
  <div class="container">
      <div class="list">
        <ul>
          <li v-for="item,index of list" >
                <span @click="goEditUser(item.id,item)">
                  <slot name="item"
                  :add="item.commpatName"
                  :age="item.age"
                  :identity="item.commpatIdcard"
                  :phone="item.commpatMobile"
                  :commpatGender="item.commpatGender"
                  ></slot>
                    <i @click.stop="del(item.id)"><img src="../../static/img/bdelete.png" alt=""></i>
                   <div class="arrow"><img src="../../static/img/arrow.png" alt=""></div>
                </span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
//  var token = localStorage.getItem('token');
//  console.log(localStorage.getItem('commpat'),999999)
//  if(localStorage.getItem('commpat')){
//    var myId =JSON.parse(localStorage.getItem('commpat')).id;
//  }

  import api from '../lib/api'
  export default{
      props:{
           list:{
              type:Array,
              default:[]
          }
      },
    data(){
      return{
        token:localStorage.getItem('token'),
        myId:JSON.parse(localStorage.getItem('commpat')).id
      }
    },
    watch:{
      list:function () {
        this.slide()
      }
    },
     mounted(){
//      console.log(myId,99999999)
     },
     methods:{
       del(id){
        if(id==this.myId){
          this.$weui.alert('不能删除自己');
          return false;
        }else {
          api("smarthos.user.commpat.delete",{
            "commpatId":id,
            "token": this.token
          }).then(res=>{
            console.log(res);
            if(res.succ){
              this.$weui.alert('删除成功')
              var container = document.querySelector('.swipeleft');           //将展开的DOM归位 除掉样式类
              container.className="";
              this.expansion=null;
              this.$emit('getData')
            }else {
              this.$weui.alert(res.msg)
            }

          })
        }


       },
       goEditUser(id,item){
         this.$router.push({
           name:'editUser',
           params:{
             id:id,
             item:item
           }
         })
       },
        slide(){
          setTimeout(()=>{
            var $this=this;														//将$this保存 区分以下触发事件的this
            console.log(11)
            var container = document.querySelectorAll('.list li span');
            for(var i = 0; i < container.length; i++){                          //为每个特定DOM元素绑定touchstart touchmove时间监听 判断滑动方向
              var x,  X;
              container[i].addEventListener('touchstart', function(event) {   //记录初始触控点横坐标\
                console.log(2222)
                x = event.changedTouches[0].pageX;
              });
              container[i].addEventListener('touchmove', function(event){
                X = event.changedTouches[0].pageX;                          //记录当前触控点横坐标
                if($this.expansion){                                       //判断是否展开，如果展开则收起
                  $this.expansion.className = "";
                }
                if(X - x > 10){                                             //右滑
                  this.className = "";                                    //右滑收起
                }
                if(x - X > 10){                                             //左滑
                  this.className = "swipeleft";                           //左滑展开
                  $this.expansion = this;
                }
              });
            }
          },1)
        }
     }
  }
</script>
<style scoped lang="scss">
  @import "../common/public.scss";
  .container{
    /*height: 400px;*/
  }
  i{font-style:normal;}
  ul{
    padding:0;
  }
  .list{

    overflow:hidden;
    margin-top:.2rem;
    padding-left:.3rem;
    border-top:1px solid #ddd;
    li{
      overflow:hidden;
      width:120%;
      border-bottom:1px solid #ddd;
      list-style:none;
      span{
        display:block;
        /*height:.88rem;*/
        /*line-height:.88rem;*/
        -webkit-transition:all 0.3s;
        transition:all 0.3s;
        color:#393939;
        text-decoration:none;
        overflow: hidden;
      }
      .arrow{
        float:right;
        width:15%;
        text-align:center;
        color:#fff;
        height: 190rem/$rem;
        line-height: 190rem/$rem;
          img{
            width: 17rem/$rem;
            height: 30rem/$rem;
          }
      }
      i{
        display: block;
        float:right;
        width:15%;
        text-align:center;
        background:#E2421B;
        color:#fff;
       height: 190rem/$rem;
        line-height: 190rem/$rem;
        img{
          width: 46rem/$rem;
          height: 46rem/$rem;
        }
      }
    }
  }
  .swipeleft{transform:translateX(-15%);-webkit-transform:translateX(-15%);}

</style>
