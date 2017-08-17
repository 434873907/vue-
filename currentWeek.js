/**
 * Created by 李康飞 on 2017/8/17.
 */
formatDate(date){
  var year = date.getFullYear()+'-';
  var month = (date.getMonth()+1>9?date.getMonth()+1:'0'+(date.getMonth()+1))+'-';
  var day = (date.getDate()>9?date.getDate():'0'+(date.getDate()))
  var week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][date.getDay()];
  return {
    date:year+month+day,
    week:week
  }
}
setDate(date){
  var week = date.getDay()-1;
//                date = this.addDate(date,week*-1);
  this.currentFirstDate = new Date(date);
  var arr = [];
  for(var i = 0;i<7;i++){
    arr.push(this.formatDate(i==0 ? date : this.addDate(date,1)))
  };
  this.$set(this.$data,'dateList',arr)
}
addDate(date,n){
  date.setDate(date.getDate()+n);
  return date;
}
nextDate(){
  this.index++
  this.$set(this.$data,'disabled',false);
  this.setDate(this.addDate(this.currentFirstDate,7));
}
lastDate(){
  if(this.index==0){
    this.$set(this.$data,'disabled',true);
  }else {
    this.index--;
    this.setDate(this.addDate(this.currentFirstDate,-7));
  }

}