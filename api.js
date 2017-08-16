/**
 * Created by Administrator on 2017/6/1 0001.
 */
import axios from "axios";
let url = "//api-smarthos-ty.hztywl.cn/app";
let spid = "1001";
let random = "";
for (let i = 0; i < 4; i++) {
  random += "1234567890".substr(Math.floor(Math.random() * 10), 1);
}



let base = {
  "channel": "23",
  "format": "JSON",
  "oper": "127.0.0.1",
  "random": "1234",
  "sign": "3f52f63fad63c5dd209d28420977fb5d",
  "spid": "1001"
};


export default function (service, options) {

  // if (typeof options.showloading == "undefined") {
  //   options.showloading = true;
  // }
  // if (options.showloading) {
  //   bus.$emit("loading", {status: 'start'});
  // }
  let obj = {...base,service,...options};
  // let sign = hex_md5(hex_md5("aAr9MVS9j1") + JSON.stringify(obj));
  let config = {
    headers: {
      "Content-Type": "application/json",
      "test":true
    },
  }

  return axios.post(url, obj, config)
    .then((res) => {
      // bus.$emit("loading", {status: 'stop'});
      if (res.status == 200) {
        return res.data;

      } else {
        return res;
          
      }
    });
}


