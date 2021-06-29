window.onload = function () {
  var clock = document.getElementById('clock');
  setInterval(function () {
    var time = new Date().getHours() >= 12 ? "PM " : "AM "
    time += new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
    time += " : " + new Date().getMinutes();
    // time += new Date().getHours()- + ":" + new Date().getMinutes(); // 13~24시 표현
    document.getElementById("clock").innerHTML = time;
  }, 1000);
  var month = new Date().getMonth();
  var day = new Date().getDay();
  var hour = new Date().getHours();
  var minute = new Date().getMinutes();
  if (month == 04 && day == 22) {
    document.body.style.backgroundImage = "url('/earth.jpg')";
    // document.body.style.backgroundColor="black";
  }
  if(hour==16 && minute==22 ){
    document.getElementById("event_text").innerHTML  = "현재 시간은 4시 22분입니다.<br> 4월 22일은 지구의 날입니다!"
  }
};