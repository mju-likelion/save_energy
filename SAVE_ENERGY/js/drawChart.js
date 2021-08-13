

// 차트 그리기
var ctx = document.getElementById('myChart'); 
var myChart = new Chart(ctx, { 
  type: 'bar', 
  data: { 
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], 
    datasets: [{ 
      label: '# 월별 사용량', 
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 
        'rgba(54, 162, 235, 0.2)', 
        'rgba(255, 206, 86, 0.2)', 
        'rgba(75, 192, 192, 0.2)', 
        'rgba(153, 102, 255, 0.2)', 
        'rgba(255, 159, 64, 0.2)' ,
        'rgba(255, 99, 132, 0.2)', 
        'rgba(54, 162, 235, 0.2)', 
        'rgba(255, 206, 86, 0.2)', 
        'rgba(75, 192, 192, 0.2)', 
        'rgba(153, 102, 255, 0.2)', 
        'rgba(255, 159, 64, 0.2)' ,
      ], 
      borderColor: [ 
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 159, 64, 1)',
      ], 
      borderWidth: 1 
    }]
  }, 
  options: { 
    scales: { 
      yAxes: [{ 
        ticks: { 
          beginAtZero: true
        } 
      }] 
    } 
  } 
});
function cha(){
  var jan = document.getElementById('inputJan').value;
  var feb = document.getElementById('inputFeb').value;
  var mar = document.getElementById('inputMar').value;
  var apr = document.getElementById('inputApr').value;
  var may = document.getElementById('inputMay').value;
  var jun = document.getElementById('inputJun').value;
  var Jul = document.getElementById('inputJul').value;
  var aug = document.getElementById('inputAug').value;
  var Sep = document.getElementById('inputSep').value;
  var Oct = document.getElementById('inputOct').value;
  var Nov = document.getElementById('inputNov').value;
  var Dec = document.getElementById('inputDec').value;
  myChart.data.datasets[0].data[0] = jan;
  myChart.data.datasets[0].data[1] = feb;
  myChart.data.datasets[0].data[2] = mar;
  myChart.data.datasets[0].data[3] = apr;
  myChart.data.datasets[0].data[4] = may;
  myChart.data.datasets[0].data[5] = jun;
  myChart.data.datasets[0].data[6] = Jul;
  myChart.data.datasets[0].data[7] = aug;
  myChart.data.datasets[0].data[8] = Sep;
  myChart.data.datasets[0].data[9] = Oct;
  myChart.data.datasets[0].data[10] = Nov;
  myChart.data.datasets[0].data[11] = Dec;
  myChart.update();
  console.log(myChart.data.datasets[0].data[1]);
}