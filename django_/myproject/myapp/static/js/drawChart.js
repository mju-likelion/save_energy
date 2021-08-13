

const cheak = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const a = [];
const db_chart = [];
a.push(document.getElementById('chart').value);
for(const i of cheak){
  db_chart.push(a[0][a[0].indexOf(i) + 7]);
}
// 차트 그리기
var ctx = document.getElementById('myChart'); 
var myChart = new Chart(ctx, { 
  type: 'bar', 
  data: { 
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], 
    datasets: [{ 
      label: '# 월별 사용량', 
      data: [db_chart[0], db_chart[1], db_chart[2], db_chart[3], db_chart[4], db_chart[5], db_chart[6], db_chart[7], db_chart[8], db_chart[9], db_chart[10], db_chart[11]], 
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
  var count = 0;
  var month_array = ['inputJan','inputFeb','inputMar','inputApr','inputMay','inputJun','inputJul','inputAug','inputSep','inputOct','inputNov','inputDec'];
    for (const i of month_array){
      myChart.data.datasets[0].data[count] = db_chart[count];
      count++;
    }
  myChart.update();
  }
  // [{"model": "account.chart", "pk": 35, "fields": {"author": "qqq", "Jan": "0", "Feb": "0", "Mar": "0", "Apr": "0", "May": "0", "Jun": "0", "Jul": "0", "Aug": "0", "Sep": "0", "Oct": "0", "Nov": "0", "Dec": "0"}}]