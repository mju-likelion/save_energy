
function average_time() { //평균 사용시간 계산
  const time = document.getElementById('time').value;
  const consum = document.getElementById('Power_Consumption').value;
  const month_time = (time*consum*30) / 1000 - ((time*consum*30) / 1000 % 1);
  document.getElementById("month_time").innerText = month_time + 'kWh';
  electricity_calculation(month_time);
}
function Power_Consumption() { //종류별 소비전력 자동지정
  const Power = document.getElementById('Kind').value;
  if(Power === "TV"){
    document.getElementById('Power_Consumption').value = '150';
  }
  if(Power === "에어컨"){
    document.getElementById('Power_Consumption').value = '1800';
  }
  if(Power === "냉장고"){
    document.getElementById('Power_Consumption').value = '100';
  }
  if(Power === "컴퓨터"){
    document.getElementById('Power_Consumption').value = '120';
  }
  if(Power === "세탁기"){
    document.getElementById('Power_Consumption').value = '500';
  }
  if(Power === "기타"){
    document.getElementById('Power_Consumption').value = '0';
  }
}
function electricity_calculation(month_time){
  // 910 + (month_time * 93.3) - (month_time * 5) + (month_time*5.3) - (month_time*3) - 4000; 
  // 200kWh이하 기본 계산식
  if(month_time<=200) var i = (month_time * 90.6) -3090 -(((month_time * 90.6) -3090) % 1);//전기요금계 200미만
  else if(month_time<=400) var i = 1600 + (month_time * 93.3)+((month_time-200)*187.9) - (month_time * 5) + (month_time*5.3) - (month_time*3); //전기요금계 400미만
  else var i = 7300 + (month_time * 93.3)+((month_time-400)*280.6)+((month_time-200)*187.9) - (month_time * 5) + (month_time*5.3) - (month_time*3); //전기요금계 400이상
  if(i<=1000) i=1000;
  var v = i*0.1; //부가가치세
  var e = parseInt(i*0.037-(i*0.037%10)); //전력산업기반기금
  document.getElementById('total').innerText = i+v+e + '원';
}

function Power_standby() { //종류별 대기전력 자동지정
  const Power = document.getElementById('Standby_Kind').value;
  if(Power === "TV"){
    document.getElementById('Power_Standby').value = '0.25';
  }
  if(Power === "에어컨"){
    document.getElementById('Power_Standby').value = '10.7';
  }
  if(Power === "냉장고"){
    document.getElementById('Power_Standby').value = '3.7';
  }
  if(Power === "컴퓨터"){
    document.getElementById('Power_Standby').value = '1.3';
  }
  if(Power === "세탁기"){
    document.getElementById('Power_Standby').value = '4';
  }
  if(Power === "기타"){
    document.getElementById('Power_Standby').value = '0';
  }
}
function average_time_standby() { //평균 사용시간 계산
  const time = document.getElementById('time_standby').value;
  const consum = document.getElementById('Power_Standby').value;
  const month_time = (time*consum*30);
  document.getElementById("month_time_standby").innerText = month_time + 'W';
}