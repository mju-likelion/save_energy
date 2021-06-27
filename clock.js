window.onload = function () {
  var clock = document.getElementById('clock');
  setInterval(function () {
    var time = new Date().getHours() >= 12 ? "PM " : "AM "
    time += new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
    time += " : " + new Date().getMinutes();
    // time += new Date().getHours()- + ":" + new Date().getMinutes(); // 13~24시 표현
    document.getElementById("clock").innerHTML = time;
  }, 1000);
  var hh = new Date().getHours();
  var mm = new Date().getMinutes();
  if (hh == 16 && mm == 22) {
    document.body.style.backgroundImage = "url('/earth.jpg')";
    // document.body.style.backgroundColor="Red";

  }
  else {
    document.body.style.backgroundImage = "url('/background.jpg')";
  }
};