var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    
    var lineChartData = {
        labels : ['-180 Days', '-90 Days', '-30 Days', 'CBW'],
        datasets : [
            {
                label: "My First dataset",
                fillColor : "rgba(220,220,220,0.2)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : []
            },
            {
                label: "My Second dataset",
                fillColor : "rgba(66, 179, 130,0.2)",
                strokeColor : "rgba(66, 179, 130,1)",
                pointColor : "rgba(66, 179, 130,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(66, 179, 130,1)",
                data : [120, 130, 125, 120]
            }
        ]

    }   
    
    
  window.onload = function(){

      var ctx2 = document.getElementById("chart-line").getContext("2d");
      window.myLine = new Chart(ctx2).Line(lineChartData, {
          responsive: true 

      });
    
  };
