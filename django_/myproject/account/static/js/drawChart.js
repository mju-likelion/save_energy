

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
  const a = [];
  a.push(document.getElementById(Jan).Value);
  document.getElementById(i).Value;;
  var count = 0;
  var month_array = ['inputJan','inputFeb','inputMar','inputApr','inputMay','inputJun','inputJul','inputAug','inputAug','inputSep','inputOct','inputNov','inputDec'];
  for (const i of month_array){
    myChart.data.datasets[0].data[count] = document.getElementById(i).Value;
  }
}