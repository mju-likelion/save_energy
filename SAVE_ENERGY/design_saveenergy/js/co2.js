
// co2 발생량 계산
function occurr() {
  const usage = document.getElementById('month_usage').value;
  const occurr = (usage * 424)/1000;
  document.getElementById('co2occurr').innerText = occurr + 'kg';
  document.getElementById('tree').innerText = parseInt(occurr/6.6) + "그루의 나무가 1년동안 흡수합니다.";

  // co2_calculation(occurr);
}