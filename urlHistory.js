/**
 * Created by Administrator on 2017/7/12 0012.
 */
export default class {
  constructor() {

  }
  get history() {
    let arr = sessionStorage.getItem("url_history");
    if (!arr || arr === "null") {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    return arr;
  }

  set history(value) {
    let arr = this.history;
    arr.push(value);
    sessionStorage.setItem("url_history", JSON.stringify(arr));
  }
  get back(){
    let arr = this.history;
    arr.pop();
    sessionStorage.setItem('url_history',JSON.stringify(arr));
    return arr;
  }
  get last() {
    let arr = this.history;
    return arr[arr.length - 1];
  }
}
