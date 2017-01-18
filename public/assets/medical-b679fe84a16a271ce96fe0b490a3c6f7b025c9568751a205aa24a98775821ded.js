/*
 *
 *   DIETITIAN.HELP
 *   ALL RIGHTS RESERVED
 *
*/


function diet() {

  $("#cdietspan")[0].innerText = document.getElementById('dietin').value;
  $(function(){
    $("#cdietspan").typed({
      strings: [document.getElementById('dietin').value],
      typeSpeed: 4
    });
  });


};
  
function intake() {
  if($('#intakefromin')[0].value == 1){
    $("#intaketoin")[0].parentElement.className = 'cs-select cs-skin-border cs-skin-borderdisabled';
    $("#intakefromspan")[0].innerHTML = 'Refuse';
    $("#intaketospan")[0].innerHTML = '';
  }
  else {
    $("#intaketoin")[0].parentElement.className = 'cs-select cs-skin-border cs-active';
  $("#intakefromspan")[0].innerHTML = document.getElementById('intakefromin').value;
  $("#intaketospan")[0].innerHTML = '- ' + document.getElementById('intaketoin').value;
        }
};

var genderval = 'male'
var ibwval;

function gender() {

      if(document.getElementById('switch5').checked) {
          genderval = 'female';
          $('#gendermspan').fadeOut(200, function(){
            $('#genderfspan').fadeIn(200);
          })};
      if(document.getElementById('switch5').checked == false) {
        genderval = 'male';
        $('#genderfspan').fadeOut(200, function(){
            $('#gendermspan').fadeIn(200);
          });}
};
function ibw() { 

    document.getElementById("ibwmale").className = "blue"
    document.getElementById("ibwfemale").className = "red"
    var x = document.getElementById("ht").value;
    var y = x - 60 
    var z = y * 6 + 106
    document.getElementById("ibwmalespan").style.display = "none"
    document.getElementById("ibwfemalespan").style.display = "none"
    document.getElementById("loaderg").style.display = "block"
    document.getElementById("loaderg2").style.display = "block"

    var a = document.getElementById("ht").value;
    var b = x - 60
    var c = y * 5 + 105
   

    if(document.getElementById("ht").value.length == '') {
      widgetUsed("ibwmale", 0);
      widgetUsed("ibwfemale", 0);
      document.getElementById("ibwmalespan").style.display = "none"
      document.getElementById("ibwfemalespan").style.display = "none"
      document.getElementById("loaderg").style.display = "block"
      document.getElementById("loaderg2").style.display = "block"
      document.getElementById("ibwmale").className = "emptygray"
      document.getElementById("ibwfemale").className = "emptygray"
    }
    if(z > 0 && c > 0 ) {
      document.getElementById("ibwmalespan").style.display = "block"
      document.getElementById("ibwfemalespan").style.display = "inline"
      document.getElementById("loaderg").style.display = "none"
      document.getElementById("loaderg2").style.display = "none"
      document.getElementById("ibwmale").className = "blue"
      document.getElementById("ibwfemale").className = "red"
          }

      if(document.getElementById('switch4').checked) {
      widgetUsed(("ibwmale"), Math.floor(z /2.2));
      widgetUsed(("ibwfemale"), Math.round(c /2.2));
      document.getElementById("inkg").style.display = "block"
      document.getElementById("inlbs").style.display = "none"

}
      if(document.getElementById('switch4').checked == false) {
      widgetUsed(("ibwmale"), Math.floor(z));
      widgetUsed(("ibwfemale"), Math.round(c));
      document.getElementById("inkg").style.display = "none"
      document.getElementById("inlbs").style.display = "block"
}
    if(z < 0 && c < 0 ) {
      widgetUsed("ibwmale", 0);
      widgetUsed("ibwfemale", 0);
      document.getElementById("ibwmalespan").style.display = "none"
      document.getElementById("ibwfemalespan").style.display = "none"
      document.getElementById("loaderg").style.display = "block"
      document.getElementById("loaderg2").style.display = "block"
      document.getElementById("ibwmale").className = "emptygray"
      document.getElementById("ibwfemale").className = "emptygray"
    }
    if(document.getElementById('switch4').unchecked) {
      widgetUsed(("ibwmale"), Math.floor(z));
      widgetUsed(("ibwfemale"), Math.round(c /2.2));
}
    
    if(genderval == 'male'){
      ibwval = z;
    }
    if (genderval == 'female'){
      ibwval = c;
    }
    $("#percentibw")[0].innerHTML = Math.round(document.getElementById("wt").value/ibwval * 100);
  };

function cal() { 
    document.getElementById("calrequirement").className = "ultra-widget red"
    var x = document.getElementById("wt").value;
    var y = x/2.2
    var z = y * 30
    var goalselect = document.getElementById('goals');
    var goalselected = goalselect.options[goalselect.selectedIndex].innerHTML;
    $("#cbw")[0].innerHTML = document.getElementById("wt").value;
    

    if(goalselected == 'Gain Weight') {
     widgetUsed("calrequirement", parseInt(z - z + 1 * y * 35));
        }

    if(goalselected == 'Maintain Weight') {
     widgetUsed("calrequirement", parseInt(z));
        }

    if(goalselected == 'Lose Weight') {
     widgetUsed("calrequirement", parseInt(z - z + 1 * y * 25));
        }
    }

function dx() {
$("#dx")[0].innerHTML = document.getElementById("dxinput").value;
  $(function(){
    $("#dx").typed({
      strings: [document.getElementById('dxinput').value],
      typeSpeed: 4
    });
  });

}
function bmi() { 
    var x = document.getElementById("wt").value;
    var y = document.getElementById("ht").value;
    var z = x / y
    var a = z / y
    var b = a * 703


   if(document.getElementById("wt").value.length < 1 || b > 50 ) {
      bmiused("bmispan", 0);


    }

    if(b < 50 && b > 10) {
      $("#bmispan").innerHTML = b;
      $("#bmispanhead")[0].innerHTML = b.toFixed(1);
      bmiused("bmispanhead", b.toFixed(1));
    }

    $(function(){
    $("#bmispan").typed({
      strings: [b.toFixed(1).toString()],
      typeSpeed: 4
    });
  });
          }

function pro() { 
    document.getElementById("prorequirement").className = "green"
    var x = document.getElementById("wt").value;
    var y = x/2.2
    var z = y * 1
    widgetUsed("prorequirement", Math.round(z));
} 
function fl() { 
    document.getElementById("flrequirement").className = "ultra-widget yellow"
    var x = document.getElementById("wt").value;
    var y = x/2.2
    var z = y * 30
    widgetUsed("flrequirement", Math.round(z));
        }

function convert() {

  var a = document.getElementById("ibwmale").value / 2.2
  var b = document.getElementById("ibwfemale").value / 2.2
  widgetUsed(("ibwmale"), Math.floor(a));
  widgetUsed(("ibwfemale"), Math.round(b));

}



function rchart0 () {
 NProgress.start();
  //resets all parameters in assess

  var loss1;
  var loss2;
  var loss3;
  var gain1;
  var gain2;
  var gain3;

$("#loss1days")[0].innerHTML = ''
$("#loss2days")[0].innerHTML = ''
$("#loss3days")[0].innerHTML = ''
$("#gain1days")[0].innerHTML = ''
$("#gain2days")[0].innerHTML = ''
$("#gain3days")[0].innerHTML = ''

  myLine.datasets[1].points[3].value = document.getElementById("wt").value;
  myLine.scale.xLabels[3] = document.getElementById("date0").value;
  myLine.datasets[1].points[2].value = document.getElementById("30daysinput").value;
  myLine.scale.xLabels[2] = document.getElementById("date1").value;
  myLine.datasets[1].points[1].value = document.getElementById("90daysinput").value;
  myLine.scale.xLabels[1] = document.getElementById("date2").value;
  myLine.datasets[1].points[0].value = document.getElementById("180daysinput").value;
  myLine.scale.xLabels[0] = document.getElementById("date3").value;
  myLine.update();

  NProgress.inc();

  if(Math.floor(myLine.datasets[1].points[3].value / myLine.datasets[1].points[2].value * 100) <= 95) {
    loss1 = true

  }
  if(Math.ceil(myLine.datasets[1].points[3].value / myLine.datasets[1].points[2].value * 100) >= 105) {
    gain1 = true
  }
  
  if(Math.floor(myLine.datasets[1].points[3].value / myLine.datasets[1].points[1].value * 100) <= 92.5) {
    loss2 = true
  }
  if(Math.ceil(myLine.datasets[1].points[3].value / myLine.datasets[1].points[1].value * 1000) >= 1075) {
    gain2 = true

  }
  if(Math.floor(myLine.datasets[1].points[3].value / myLine.datasets[1].points[0].value * 100) <= 90) {
    loss3 = true

  }
  if(Math.ceil(myLine.datasets[1].points[3].value / myLine.datasets[1].points[0].value * 100) >= 110) {
    gain3 = true

  }

  NProgress.inc();

  if($('#wthistory').smkValidate({lang:'es'})){}

  if(loss1 == true || loss2 == true || loss3 == true){
    $("#losshist")[0].innerHTML = 'Significant Weight Loss for the past ';
    if(loss1 == true){
      $("#loss1days")[0].innerHTML = ' 30';
      $.smkAlert({ text: 'Significant Weight Loss for the past 30 days', type: 'danger', permanent: true });
      if(loss2 == true || loss3 == true){
        $("#loss1days")[0].innerHTML = ' 30/'
      }
    }
    if(loss2 == true){
      $("#loss2days")[0].innerHTML = '90';
      $.smkAlert({ text: 'Significant Weight Loss for the past 90 days', type: 'danger', permanent: true });
        if(loss3 == true){
        $("#loss2days")[0].innerHTML = '90/'
      }
    }
    if(loss3 == true){
      $("#loss3days")[0].innerHTML = '180';
      $.smkAlert({ text: 'Significant Weight Loss for the past 180 days', type: 'danger', permanent: true });
    }
  }
  NProgress.inc();
  if(loss1 == true || loss2 == true || loss3 == true){
    $("#lossdays")[0].innerHTML = ' days'
    }
 if(gain1 == true || gain2 == true || gain3 == true){
    $("#gainhist")[0].innerHTML = 'Significant Weight Gain for the past ';
    if(gain1 == true){
      $("#gain1days")[0].innerHTML = ' 30';
      $.smkAlert({ text: 'Significant Weight Gain for the past 30 days', type: 'danger', permanent: true });
      if(gain2 == true || gain3 == true){
        $("#gain1days")[0].innerHTML = ' 30/'
      }
    }
    if(gain2 == true){
      $("#gain2days")[0].innerHTML = '90';
      $.smkAlert({ text: 'Significant Weight Gain for the past 90 days', type: 'danger', permanent: true });
        if(gain3 == true){
        $("#gain2days")[0].innerHTML = '90/'
      }
    }
    if(gain3 == true){
      $("#gain3days")[0].innerHTML = '180';
      $.smkAlert({ text: 'Significant Weight Gain for the past 180 days', type: 'danger', permanent: true });
    }
  }
  if(gain1 == true || gain2 == true || gain3 == true){
    $("#gaindays")[0].innerHTML = ' days'
    }
  if((loss1 == true || loss2 == true || loss3 == true) && (gain1 == true || gain2 == true || gain3 == true)){
    $("#and")[0].innerHTML = ' and '
    }
NProgress.done();
//setTimeout(noti, 1000);
};

function noti() {
  swal("Assessment Completed", "Modify as necessary", "success");

}

function chart0 () {

  if(document.getElementById("date0").value.length == '') {
      return;

    }
    
  myLine.datasets[1].points[3].value = document.getElementById("wt").value;

  if (myLine.datasets[1].points[3].value > 0) {
      myLine.datasets[1].points[3].value = document.getElementById("wt").value;
      myLine.scale.xLabels[3] = document.getElementById("date0").value;


  }



  if(document.getElementById("date1").value.length == '') {
      return;

    }
    
  myLine.datasets[1].points[2].value = document.getElementById("30daysinput").value;

  if (myLine.datasets[1].points[2].value > 0) {
      myLine.datasets[1].points[2].value = document.getElementById("30daysinput").value;
      myLine.scale.xLabels[2] = document.getElementById("date1").value;


  }

      if(document.getElementById("date2").value.length == '') {
      return;

    }
  myLine.datasets[1].points[1].value = document.getElementById("90daysinput").value;

  if (myLine.datasets[1].points[1].value > 0) {
      myLine.datasets[1].points[1].value = document.getElementById("90daysinput").value;
      myLine.scale.xLabels[1] = document.getElementById("date2").value;


  }


     if(document.getElementById("date3").value.length == '') {
      return;

    }
  myLine.datasets[1].points[0].value = document.getElementById("180daysinput").value;

  if (myLine.datasets[1].points[0].value > 0) {
      myLine.datasets[1].points[0].value = document.getElementById("180daysinput").value;
      myLine.scale.xLabels[0] = document.getElementById("date3").value;


  }
  myLine.update();
};



      //UltraWidget
      function widgetUsed(id, number, string) {     
        $("#" + id).prop('Counter',0).animate({
              Counter: number
          }, {
              duration: 800,
              easing: 'swing',
              step: function (now) {
                  $("#" + id + " .w-amount").text(now.toFixed(0));
                  $("#" + id + " .w-used").css("width", +  Math.ceil(now));
              }
          });
      };
      
      $(".w-refresh").click(function(){
        var counter = $(this).closest(".ultra-widget").data("counter");
        var counter_id = $(this).closest(".ultra-widget").attr("id");
        widgetUsed(counter_id, counter);    
      });
            function bmiused(id, number, string) {     
        $($("#" + 'bmispanhead')[0].innerHTML).prop('Counter',0).animate({
              Counter: number
          }, {
              duration: 800,
              easing: 'swing',
              step: function (now) {
                  $("#" + id + " .w-amount").text(now.toFixed(1));
                  $("#" + id + " .w-used").css("width", +  Math.ceil(now));
              }
          });
      };
      
      $(".w-refresh").click(function(){
        var counter = $(this).closest(".ultra-widget").data("counter");
        var counter_id = $(this).closest(".ultra-widget").attr("id");
        widgetUsed(counter_id, counter);    
      });
