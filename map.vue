<template>
    <div>
        <div id="allmap" v-show="isShow">
        </div>
        <div class="btn" v-show="isShow" @click="getMsg">
            {{msg}}
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../components/app-header.vue'
    export default{
        components: {
            top
        },
        props:['showMap'],
        computed:{
          isShow(){
              console.log(2121)
              this.getLocation()
              return this.showMap;
          }
        },
        data(){
            return {
                msg:''
            }
        },
        mounted(){

        },
        methods:{
            getLocation(){
                console.log(898989)
                if (navigator.geolocation)
                {
                    navigator.geolocation.getCurrentPosition(this.showPosition);
                }
                else{
                    console.log('Geolocation is not supported by this browser')
                }
            },
            showPosition(position){
                var self = this;
                var map = new BMap.Map("allmap");    // 创建Map实例
                map.centerAndZoom(new BMap.Point(position.coords.longitude,position.coords.latitude), 11);  // 初始化地图,设置中心点坐标和地图级别
                map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                map.setCurrentCity("杭州");// 设置地图显示的城市 此项是必须设置的
                var new_point = new BMap.Point(position.coords.longitude,position.coords.latitude);
                var marker = new BMap.Marker(new_point);                              // 创建标注
                map.addOverlay(marker);                                               // 将标注添加到地图中
                map.panTo(new_point);
                map.enableScrollWheelZoom(true);
                var gc = new BMap.Geocoder();
                var point = new BMap.Point(position.coords.longitude,position.coords.latitude);
                gc.getLocation(point, function (rs) {
                    var addComp = rs.addressComponents;
                    self.msg = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber
                    console.log(self.msg,121212121212)
                });
            },
            getMsg(){
                this.$emit('getMsg',this.msg)
            }
        }
    }
</script>
<style scoped lang='scss'>
    #allmap{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom:0;
        z-index: 997;
    }
    .btn{
        width: 100%;
        height: 88px;
        line-height: 88px;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 998;
        background: white;
        text-align: center;
    }
</style>
