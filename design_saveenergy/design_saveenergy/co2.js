// 시간
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

// co2 발생량 계산
function occurr() {
  const usage = document.getElementById('month_usage').value;
  const occurr = usage * 424;
  document.getElementById('co2occurr').innerText = occurr + 'g';

  // co2_calculation(occurr);
}

function co2_calculation(occurr) {
  document.getElementById('co2occurr').innerText = occurr + 'g';
}