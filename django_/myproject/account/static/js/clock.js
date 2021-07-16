setInterval(function () {
  var time = new Date().getHours() >= 12 ? "PM " : "AM "
  time += new Date().getHours() >= 13 ? new Date().getHours() - 12 : new Date().getHours();
  time += " : " + new Date().getMinutes();
  // time += new Date().getHours() + ":" + new Date().getMinutes(); // 13~24시 표현
  document.getElementById("clock").innerHTML = time;
}, 1000);
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var hour = new Date().getHours();
var minute = new Date().getMinutes();
if (month == 4 && day == 22) {
  var ele = document.getElementsByClassName("backimage")[0];
  ele.style.backgroundImage = "url(images/background_home_dark.jpg)"
}
else{
}
if (hour == 16 && minute == 22) {
  document.getElementById("event_text").innerHTML = "현재 시간은 4시 22분입니다.<br> 4월 22일은 지구의 날입니다!"
}
// import dayjs, { locale } from 'dayjs';
// import 'dayjs/locale/es'

// dayjsjs/locale('es')
// const today = moment();
// console.log(
//   "Today's date is: " + 
//   today.format('YYYY-MM-DD')
// );

// import dayjs from 'dayjs'

// const date = dayjs('2019-03-01T18:00:00+09:00')
// console.log(date.year()) // 2019 (연도)
// console.log(date.month()) // 2 (월)
// console.log(date.date()) // 1 (일)
// console.log(date.hour()) // 18 (시)
// console.log(date.minute()) // 0 (분)
// console.log(date.second()) // 0 (초)
// console.log(date.format('YYYY년 MM월 DD일 HH시 mm분')) // '2019년 03일 01일 18시 00분'

// console.log(dayjs())
// import dayjs from 'dayjs'

// const dayjs = require('dayjs')

// const date = new Date()

// const day = dayjs(date).format('YYYY-MM-DD HH:mm:ss');

// console.log(day)
// // day 결과 2021-02-24 14:40:48