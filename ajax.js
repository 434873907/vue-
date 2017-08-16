/**
 * Created by 李康飞 on 2017/6/23.
 */
/**
 * Created by Administrator on 2017/6/1 0001.
 */

let url = "//api-z2eye.hztywl.cn:6060/app";
let base = {
  "channel": "23",
  "format": "JSON",
  "oper": "127.0.0.1",
  "random": "1234",
  "sign": "3f52f63fad63c5dd209d28420977fb5d",
  "spid": "1001",
  'service':'smarthos.system.file.upload'
};


export default function (file,options,module,fileType) {
  // let sign = hex_md5(hex_md5("aAr9MVS9j1") + 1001 + random);
  var form  = new FormData();
  for(var item in base){
    form.append(item,base[item])
  }
  form.append('file',file);
  form.append('module',module);
  form.append('fileType',fileType);

  console.log(file,form)
  let promiseXHR = new Promise((resolve, reject)=>{
    let xhr = new XMLHttpRequest()

    xhr.open("POST",url)
    xhr.setRequestHeader( "test",true)
    xhr.upload.onprogress=options.progress;
    xhr.onload =function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400){
        resolve(JSON.parse(xhr.responseText))
      }else {
        reject(xhr.error)
      }
    }
    xhr.send(form)
  })
  return promiseXHR
}


