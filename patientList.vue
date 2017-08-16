<template>
    <div class="page">
        <top>
            <div class="middle big">患者管理</div>
        </top>
        <div ref="wrapper" class="wrap">
            <div class="newApply">
                <div ref="applyPat">
                    <div class="weui-cells">
                        <a @click="applyDetail" class="weui-cell weui-cell_access" href="javascript:;">
                            <div class="weui-cell__hd"><img src="../../../static/img/chat.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                            <div class="weui-cell__bd">
                                <p class="bf">新的签约申请</p>
                            </div>
                            <div class="weui-cell__ft"> <span class="weui-badge" style="margin-left: 5px;">8</span>
                            </div>
                        </a>
                    </div>
                    <div class="newPatient">
                        签约患者
                    </div>
                    <div class="weui-cells" >
                        <a  @click="patDetail" class="weui-cell weui-cell_access" href="javascript:;" v-for="item of 3">
                            <div class="weui-cell__hd"><img src="../../../static/img/chat.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                            <div class="weui-cell__bd">
                                <p>
                                    <span class="bf">李冰</span>
                                    <span class="mfc">男 27</span>
                                </p>
                            </div>
                        </a>

                    </div>
                </div>

                <div v-for="item of list">
                    <div class="newPatient">
                       {{item.name}}
                    </div>
                    <div class="weui-cells" >
                        <a ref="patDetails"  v-for="name of item.cities" class="weui-cell weui-cell_access" href="javascript:;">
                            <div class="weui-cell__hd"><img src="../../../static/img/chat.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                            <div class="weui-cell__bd">
                                <p>
                                    <span class="bf">{{name.name}}</span>
                                    <span class="mfc">男 27</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
        <div class="bars" ref="bar">
            <li v-for="item of barList" style="padding: 0;margin: 0;font-size: 14px">{{item}}</li>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import pinyin from 'tiny-pinyin'
    import BScroll from 'better-scroll'
    export default{
        components: {
            top
        },
        data(){
            return {
                anchorMap:{},
                nameList:[],
                barList:[],
                list:[
                    {
                        name: "A",
                        cities: [
                            {
                                name: "鞍山市",
                                tags: "ANSHAN,鞍山市",
                                cityid: 64
                            },
                            {
                                name: "安庆市",
                                tags: "ANQING,安庆市",
                                cityid: 149
                            },
                            {
                                name: "安阳市",
                                tags: "ANYANG,安阳市",
                                cityid: 174
                            }
                        ]
                    },
                    {
                        name: "B",
                        cities: [
                            {
                                name: "北京市",
                                tags: "BEIJING,北京市",
                                cityid: 1
                            },

                            {
                                name: "蚌埠市",
                                tags: "BANGBU,蚌埠市",
                                cityid: 100
                            },
                            {
                                name: "北海市",
                                tags: "BEIHAI,北海市",
                                cityid: 161
                            },
                            {
                                name: "滨州市",
                                tags: "BINZHOU,滨州市",
                                cityid: 166
                            },
                            {
                                name: "宝鸡市",
                                tags: "BAOJI,宝鸡市",
                                cityid: 170
                            },
                            {
                                name: "亳州市",
                                tags: "BOZHOU,亳州市",
                                cityid: 189
                            },
                            {
                                name: "巴彦淖尔市",
                                tags: "BAYANNAOER,巴彦淖尔市",
                                cityid: 199
                            }
                        ]
                    },
                    {
                        name: "C",
                        cities: [
                            {
                                name: "成都市",
                                tags: "CHENGDU,成都市",
                                cityid: 17
                            },
                            {
                                name: "重庆市",
                                tags: "CHONGQING,重庆市",
                                cityid: 18
                            }
                        ]
                    },
                    {
                        name: "D",
                        cities: [
                            {
                                name: "大连市",
                                tags: "DALIAN,大连市",
                                cityid: 14
                            },
                            {
                                name: "东莞市",
                                tags: "DONGWAN,东莞市",
                                cityid: 21
                            },
                            {
                                name: "大庆市",
                                tags: "DAQING,大庆市",
                                cityid: 48
                            },
                            {
                                name: "东营市",
                                tags: "DONGYING,东营市",
                                cityid: 73
                            },
                            {
                                name: "德州市",
                                tags: "DEZHOU,德州市",
                                cityid: 120
                            },
                            {
                                name: "大同市",
                                tags: "DATONG,大同市",
                                cityid: 125
                            },
                            {
                                name: "大理州",
                                tags: "DALIZHOU,大理州",
                                cityid: 136
                            },
                            {
                                name: "丹东市",
                                tags: "DANDONG,丹东市",
                                cityid: 163
                            }
                        ]
                    },
                    {
                        name: "E",
                        cities: [
                            {
                                name: "鄂尔多斯市",
                                tags: "EERDUOSI,鄂尔多斯市",
                                cityid: 43
                            },
                            {
                                name: "鄂州市",
                                tags: "EZHOU,鄂州市",
                                cityid: 230
                            },
                            {
                                name: "恩施州",
                                tags: "ENSHIZHOU,恩施州",
                                cityid: 235
                            }
                        ]
                    },
                    {
                        name: "F",
                        cities: [
                            {
                                name: "福州市",
                                tags: "FUZHOU,福州市",
                                cityid: 34
                            },
                            {
                                name: "佛山市",
                                tags: "FOSHAN,佛山市",
                                cityid: 36
                            }
                        ]
                    },
                    {
                        name: "G",
                        cities: [
                            {
                                name: "广州市",
                                tags: "GUANGZHOU,广州市",
                                cityid: 3
                            },
                            {
                                name: "贵阳市",
                                tags: "GUIYANG,贵阳市",
                                cityid: 82
                            }
                        ]
                    },
                    {
                        name: "H",
                        cities: [
                            {
                                name: "杭州市",
                                tags: "HANGZHOU,杭州市",
                                cityid: 5
                            },
                            {
                                name: "湖州市",
                                tags: "HUZHOU,湖州市",
                                cityid: 90
                            },
                            {
                                name: "淮安市",
                                tags: "HUAIAN,淮安市",
                                cityid: 97
                            },
                            {
                                name: "衡阳市",
                                tags: "HENGYANG,衡阳市",
                                cityid: 105
                            },
                            {
                                name: "汉中市",
                                tags: "HANZHONG,汉中市",
                                cityid: 115
                            },
                            {
                                name: "菏泽市",
                                tags: "HEZE,菏泽市",
                                cityid: 124
                            },
                            {
                                name: "惠州市",
                                tags: "HUIZHOU,惠州市",
                                cityid: 133
                            },
                            {
                                name: "黄山市",
                                tags: "HUANGSHAN,黄山市",
                                cityid: 141
                            },
                            {
                                name: "淮南市",
                                tags: "HUAINAN,淮南市",
                                cityid: 150
                            },
                            {
                                name: "淮北市",
                                tags: "HUAIBEI,淮北市",
                                cityid: 183
                            },
                            {
                                name: "呼伦贝尔市",
                                tags: "HULUNBEIER,呼伦贝尔市",
                                cityid: 198
                            },
                            {
                                name: "鹤岗市",
                                tags: "HEGANG,鹤岗市",
                                cityid: 212
                            },
                            {
                                name: "黑河市",
                                tags: "HEIHE,黑河市",
                                cityid: 217
                            },
                            {
                                name: "黄石市",
                                tags: "HUANGSHI,黄石市",
                                cityid: 227
                            },
                            {
                                name: "黄冈市",
                                tags: "HUANGGANG,黄冈市",
                                cityid: 232
                            },
                            {
                                name: "怀化市",
                                tags: "HUAIHUA,怀化市",
                                cityid: 244
                            },
                            {
                                name: "鹤壁市",
                                tags: "HEBI,鹤壁市",
                                cityid: 247
                            }
                        ]
                    },
                    {
                        name: "J",
                        cities: [
                            {
                                name: "济南市",
                                tags: "JINAN,济南市",
                                cityid: 12
                            },
                            {
                                name: "锦州市",
                                tags: "JINZHOU,锦州市",
                                cityid: 68
                            }
                        ]
                    },
                    {
                        name: "K",
                        cities: [
                            {
                                name: "昆明市",
                                tags: "KUNMING,昆明市",
                                cityid: 19
                            },
                            {
                                name: "开封市",
                                tags: "KAIFENG,开封市",
                                cityid: 110
                            }
                        ]
                    },
                    {
                        name: "L",
                        cities: [
                            {
                                name: "洛阳市",
                                tags: "LUOYANG,洛阳市",
                                cityid: 27
                            },
                            {
                                name: "辽阳市",
                                tags: "LIAOYANG,辽阳市",
                                cityid: 75
                            },
                            {
                                name: "连云港市",
                                tags: "LIANYUNGANG,连云港市",
                                cityid: 96
                            },
                            {
                                name: "泸州市",
                                tags: "LUZHOU,泸州市",
                                cityid: 117
                            },
                            {
                                name: "莱芜市",
                                tags: "LAIWU,莱芜市",
                                cityid: 122
                            },
                            {
                                name: "聊城市",
                                tags: "LIAOCHENG,聊城市",
                                cityid: 123
                            },
                            {
                                name: "柳州市",
                                tags: "LIUZHOU,柳州市",
                                cityid: 134
                            },
                            {
                                name: "丽江市",
                                tags: "LIJIANG,丽江市",
                                cityid: 137
                            },
                            {
                                name: "丽水市",
                                tags: "LISHUI,丽水市",
                                cityid: 139
                            },
                            {
                                name: "拉萨市",
                                tags: "LASA,拉萨市",
                                cityid: 178
                            }
                        ]
                    },
                    {
                        name: "M",
                        cities: [
                            {
                                name: "绵阳市",
                                tags: "MIANYANG,绵阳市",
                                cityid: 50
                            },
                            {
                                name: "马鞍山市",
                                tags: "MAANSHAN,马鞍山市",
                                cityid: 99
                            }
                        ]
                    },
                    {
                        name: "N",
                        cities: [
                            {
                                name: "南京市",
                                tags: "NANJING,南京市",
                                cityid: 11
                            },
                            {
                                name: "宁波市",
                                tags: "NINGBO,宁波市",
                                cityid: 20
                            }
                        ]
                    },
                    {
                        name: "P",
                        cities: [
                            {
                                name: "平顶山市",
                                tags: "PINGDINGSHAN,平顶山市",
                                cityid: 103
                            }
                        ]
                    },
                    {
                        name: "Q",
                        cities: [
                            {
                                name: "青岛市",
                                tags: "QINGDAO,青岛市",
                                cityid: 13
                            }
                        ]
                    },
                    {
                        name: "R",
                        cities: [
                            {
                                name: "日照市",
                                tags: "RIZHAO,日照市",
                                cityid: 167
                            },
                            {
                                name: "日喀则地区",
                                tags: "RIKAZEDIQU,日喀则地区",
                                cityid: 315
                            }
                        ]
                    },
                    {
                        name: "S",
                        cities: [
                            {
                                name: "深圳市",
                                tags: "SHENZHEN,深圳市",
                                cityid: 2
                            },
                            {
                                name: "三亚市",
                                tags: "SANYA,三亚市",
                                cityid: 37
                            },
                            {
                                name: "绍兴市",
                                tags: "SHAOXING,绍兴市",
                                cityid: 89
                            },
                            {
                                name: "绥化市",
                                tags: "SUIHUA,绥化市",
                                cityid: 128
                            },
                            {
                                name: "四平市",
                                tags: "SIPING,四平市",
                                cityid: 130
                            },
                            {
                                name: "宿迁市",
                                tags: "SUQIAN,宿迁市",
                                cityid: 147
                            }
                        ]
                    },
                    {
                        name: "T",
                        cities: [
                            {
                                name: "天津市",
                                tags: "TIANJIN,天津市",
                                cityid: 7
                            },
                            {
                                name: "太原市",
                                tags: "TAIYUAN,太原市",
                                cityid: 26
                            },
                            {
                                name: "唐山市",
                                tags: "TANGSHAN,唐山市",
                                cityid: 40
                            },
                            {
                                name: "铁岭市",
                                tags: "TIELING,铁岭市",
                                cityid: 69
                            },
                            {
                                name: "台州市",
                                tags: "TAIZHOU,台州市",
                                cityid: 87
                            }
                        ]
                    },
                    {
                        name: "W",
                        cities: [
                            {
                                name: "武汉市",
                                tags: "WUHAN,武汉市",
                                cityid: 6
                            },
                            {
                                name: "威海市",
                                tags: "WEIHAI,威海市",
                                cityid: 42
                            }
                        ]
                    },
                    {
                        name: "X",
                        cities: [
                            {
                                name: "西安市",
                                tags: "XIAN,西安市",
                                cityid: 10
                            },
                            {
                                name: "西宁市",
                                tags: "XINING,西宁市",
                                cityid: 28
                            },
                        ]
                    },
                    {
                        name: "Y",
                        cities: [
                            {
                                name: "烟台市",
                                tags: "YANTAI,烟台市",
                                cityid: 29
                            },
                            {
                                name: "银川市",
                                tags: "YINCHUAN,银川市",
                                cityid: 49
                            },
                            {
                                name: "宜昌市",
                                tags: "YICHANG,宜昌市",
                                cityid: 51
                            },
                        ]
                    },
                    {
                        name: "Z",
                        cities: [
                            {
                                name: "郑州市",
                                tags: "ZHENGZHOU,郑州市",
                                cityid: 9
                            },
                            {
                                name: "湛江市",
                                tags: "ZHANJIANG,湛江市",
                                cityid: 159
                            },
                            {
                                name: "肇庆市",
                                tags: "ZHAOQING,肇庆市",
                                cityid: 160
                            },
                            {
                                name: "枣庄市",
                                tags: "ZAOZHUANG,枣庄市",
                                cityid: 168
                            },
                            {
                                name: "张家界市",
                                tags: "ZHANGJIAJIE,张家界市",
                                cityid: 241
                            },
                            {
                                name: "驻马店市",
                                tags: "ZHUMADIAN,驻马店市",
                                cityid: 251
                            },
                            {
                                name: "自贡市",
                                tags: "ZIGONG,自贡市",
                                cityid: 279
                            },
                            {
                                name: "中卫市",
                                tags: "ZHONGWEI,中卫市",
                                cityid: 337
                            }
                        ]
                    }
                ]
            }
        },
        mounted(){
//            let arr=[],py=[];
//            this.data.forEach((city)=>{
//                let f=pinyin.convertToPinyin(city.name.substr(0,1))
//                let p=f.substr(0,1);
////                city.pinyin=p;
//                if(py.indexOf(p)<0){
//                    py.push(p)
//                    arr.push({
//                        pinyin:p,
//                        data:[city]
//                    })
//                }else{
//                    arr[py.indexOf(p)].data.push(city)
//                }
//            })
//            arr.sort((a,b)=>{
//                return a.pinyin<b.pinyin?-1:1
//            })
//            console.log(arr)

        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType: 3,
            click:true
        })
//        this.list.forEach((item)=>{
//            this.barList.push(item.name)
//        });
//            console.log(this.barList)

                this.initShortCut()
                this.bindEvent()


        },

        methods:{
            patDetail(){
                this.$router.push({
                    name:'patDetail'
                })
            },
            initShortCut() {
                    var y = 0;
                    var titleHeight = 37;
                    var itemHeight = this.$refs.patDetails[0].offsetHeight;
                    this.list.forEach((group)=> {
                        var name = group.name.substr(0, 1);
                        var len = group.cities.length;
                        this.barList.push(name);
                        this.anchorMap[name] = y;
                        y -= titleHeight + len * itemHeight;
                    });
                setTimeout(()=>{
                    this.$refs.bar.style.top = (this.$refs.wrapper.clientHeight - this.$refs.bar.clientHeight) / 2+44 + 'px';
                },50)


                },
            bindEvent() {
                    var touch = {};
                    var firstTouch;
                var self = this;
                    this.$refs.bar.addEventListener('touchstart', function (e) {
                        var anchor = e.target.innerText;
//                        firstTouch = e.touches[0];
//                        touch.y1 = firstTouch.pageY;

                        touch.anchor = anchor;
                        self.scrollTo(anchor);
                    });
                         },
            scrollTo(anchor) {
                var applyPatY = this.$refs.applyPat.scrollHeight;
                var maxScrollY = this.$refs.wrapper.clientHeight - this.$refs.bar.clientHeight;
                var y = Math.min(0, Math.min(maxScrollY, this.anchorMap[anchor]-applyPatY));
                console.log(y)
                if (typeof y !== 'undefined') {
                    this.scroll.scrollTo(0, y);
                }
            },
            applyDetail(){
                this.$router.push({
                    name:'signApply'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .page{
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
    }
    .wrap{
        position: fixed;
        left: 0;
        top: 88px;
        right: 0;
        bottom:0;
    }
    .bars{
        width: 40px;
        position: absolute;
        right: 0px;
        top: 0;
        /*height: 100%;*/
        /*background: yellowgreen;*/
    }
  .weui-cells{
      margin-top: 0;
  }
    .newPatient{
        font-size: 34px;
        color: blue;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
