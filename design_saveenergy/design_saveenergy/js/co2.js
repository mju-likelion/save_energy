
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