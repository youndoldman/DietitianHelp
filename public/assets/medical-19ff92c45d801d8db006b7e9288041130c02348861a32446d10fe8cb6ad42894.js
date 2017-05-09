  // MEDICAL FAST EDITING
  /*
  *
  *   DIETITIAN.HELP
  *   ALL RIGHTS RESERVED
  *
  */

  /////////
  // INITIALIZE WEIGHT HISTORY CHART
  /////////

  /*c3.js*/ // NEEDED FOR THE CHART
  // show the notification
    function moveToComply() {
    $.ajax({
  type: "POST",
  url: '/fullassessments',
  beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
  data: {
    fullassessment: 
    {
      fassess: $('#assessmentType').find(":selected").text() + " -44044- " + $('#ADIMETodaysDate').text() + " -44044- " + $('#note-editor-2')[0].innerText + " -44044- " + $('#note-editor-3')[0].innerText + " -44044- " + $('#note-editor-4')[0].innerText + " -44044- " + $('#note-editor-5')[0].innerText,
      client_id: <%= @client.id %>
    },
    commit: "Create Fullassessment" 
  },
  success: function() {
          window.$('#complyTopTab').trigger('click')
          $("#modal-alert2").iziModal('open'); 
          },
})
  }
  var ctx2 = document.getElementById("chart-line").getContext("2d");
  var myLine = new Chart(ctx2).Line(lineChartData, {
  responsive: true
  });
  $(function () {
  //Tooltips for Flot Charts
  if ($(".flot-chart")[0]) {
  $(".flot-chart").bind("plothover", function (event, pos, item) {
  if (item) {
  var x = item.datapoint[0].toFixed(2),
  y = item.datapoint[1].toFixed(2);
  $(".flot-tooltip").html(x + " of " + y)
  .css({top: item.pageY+5, left: item.pageX+5})
  .fadeIn(200);
  } else {
  $(".flot-tooltip").hide();
  }
  });
  $("<div class='flot-tooltip'></div>").appendTo("body");
  }
  });

  function rchart0 () {
  top.NProgress.start();

  //resets all parameters in assess
  var loss1 = false;
  var loss2 = false;
  var loss3 = false;
  var gain1 = false;
  var gain2 = false;
  var gain3 = false;
  $("#loss1days").innerHTML = '';
  $("#loss2days").innerHTML = '';
  $("#loss3days").innerHTML = '';
  $("#gain1days").innerHTML = '';
  $("#gain2days").innerHTML = '';
  $("#gain3days").innerHTML = '';
  myLine.datasets[1].points[3].value = document.getElementById("client_cbw").value;
  myLine.scale.xLabels[3] = document.getElementById("client_date0").value;
  myLine.datasets[1].points[2].value = document.getElementById("client_thirtywt").value;
  myLine.scale.xLabels[2] = document.getElementById("client_date1").value;
  myLine.datasets[1].points[1].value = document.getElementById("client_ninetywt").value;
  myLine.scale.xLabels[1] = document.getElementById("client_date2").value;
  myLine.datasets[1].points[0].value = document.getElementById("client_oneeightywt").value;
  myLine.scale.xLabels[0] = document.getElementById("client_date3").value;
  myLine.update();
  top.NProgress.inc();
  if(Math.floor(myLine.datasets[1].points[3].value / myLine.datasets[1].points[2].value * 100) <= 95) {
  loss1 = true;
  }
  if(Math.ceil(myLine.datasets[1].points[3].value / myLine.datasets[1].points[2].value * 100) >= 105) {
  gain1 = true;
  }
  
  if(Math.floor(myLine.datasets[1].points[3].value / myLine.datasets[1].points[1].value * 100) <= 92.5) {
  loss2 = true;
  }
  if(Math.ceil(myLine.datasets[1].points[3].value / myLine.datasets[1].points[1].value * 1000) >= 1075) {
  gain2 = true;
  console.log(Math.ceil(myLine.datasets[1].points[3].value / myLine.datasets[1].points[1].value * 1000));
  }
  if(Math.floor(myLine.datasets[1].points[3].value / myLine.datasets[1].points[0].value * 100) <= 90) {
  loss3 = true;
  }
  if(Math.ceil(myLine.datasets[1].points[3].value / myLine.datasets[1].points[0].value * 100) >= 110) {
  gain3 = true;
  }
  top.NProgress.inc();
  if($('#wthistory').smkValidate({lang:'es'})){}
  if(loss1 === true || loss2 === true || loss3 === true){
  $("#losshist")[0].innerHTML = 'Significant Weight Loss for the past ';
  if(loss1 === true){
  $("#loss1days")[0].innerHTML = ' 30';
  if(loss2 === true || loss3 === true){
  $("#loss1days")[0].innerHTML = ' 30/';
  }
  }
  if(loss2 === true){
  $("#loss2days")[0].innerHTML = '90';
  if(loss3 === true){
  $("#loss2days")[0].innerHTML = '90/';
  }
  }
  if(loss3 === true){
  $("#loss3days")[0].innerHTML = '180';
  }
  }
  top.NProgress.inc();
  if(loss1 === true || loss2 === true || loss3 === true){
  $("#lossdays")[0].innerHTML = ' days';
  }
  if(gain1 === true || gain2 === true || gain3 === true){
  $("#gainhist")[0].innerHTML = 'Significant Weight Gain for the past ';
  if(gain1 === true){
  $("#gain1days")[0].innerHTML = ' 30';
  if(gain2 === true || gain3 === true){
  $("#gain1days")[0].innerHTML = ' 30/';
  }
  }
  if(gain2 === true){
  $("#gain2days")[0].innerHTML = '90';
  if(gain3 === true){
  $("#gain2days")[0].innerHTML = '90/';
  }
  }
  if(gain3 === true){
  $("#gain3days")[0].innerHTML = '180';
  }
  }
  if(gain1 === true || gain2 === true || gain3 === true){
  $("#gaindays")[0].innerHTML = ' days';
  }
  if((loss1 === true || loss2 === true || loss3 === true) && (gain1 === true || gain2 === true || gain3 === true)){
  $("#and")[0].innerHTML = ' and ';
  }
  if(loss1 === true || loss2 === true || loss3 === true || gain1 === true || gain2 === true || gain3 === true) {
  iziToast.warning({
    title: 'Significant',
    message: 'Weight Change',
    position: 'topRight',
});
  }
  //setTimeout(noti, 1000);
  top.NProgress.done();
  }
  function diet() {
  $("#cdietspan")[0].innerText = $('#client_cdiet').val();
  $(function(){
  $("#cdietspan").typed({
  strings: ["<%= @client.cdiet %>"],
  typeSpeed: 4
  });
  });
  };
  
  function intake() {
  if($('#client_intakefrom').val() === "1"){
  $("#intakefromspan").html('Refuse');
  $('#client_intaketo').attr('disabled', 'disabled');
  $("#intaketospan").html('');
  }
  else {
    $("#intakefromspan").html($('#client_intakefrom').val())
    $("#intakeftopan").html($('#client_intaketo').val())
  }
  };
  var genderval = "<%= @client.gender.downcase %>"
  /* GENDER SCRIPT!
  function gender() {
  if(document.getElementById('switch5').checked) {
  genderval = 'female';
  $('#gendermspan').fadeOut(20, function(){
  $('#genderfspan').fadeIn(50);
  })};
  if(document.getElementById('switch5').checked == false) {
  genderval = 'male';
  $('#genderfspan').fadeOut(20, function(){
  $('#gendermspan').fadeIn(50);
  });}
  };
  */
  function ibw() {
  var ibwval;
  
  if(document.getElementById("client_ht").value.length === '') {
  widgetUsed("ibwspanin", 0);
  }
  else if(genderval === 'male') {
      var x = document.getElementById("client_ht").value;
  var y = x - 60;
  var z = y * 6 + 106;
  ibwval = z;
  }
  else if(genderval === 'female'){
  var a = document.getElementById("client_ht").value;
  var b = a - 60;
  var c = b * 5 + 105;
  ibwval = c;
  }
  widgetUsed("ibwspanin", Math.round(ibwval));
  var percentibw = Math.round(document.getElementById("client_cbw").value/ibwval * 100);
  widgetUsed("percentibw", Math.round(percentibw));
  widgetUsed("percentibwfassess", Math.round(percentibw));
  $('#hiddenibw').val(ibwval);
  //WILL RUN ASSESSMENT() FROM HERE TO NOT ADD ANOTHER ONCHANGE
  assessment();
  }
  function cal() {
  var x = document.getElementById("client_cbw").value;
  var y = x/2.2
  var z = y * 30
  //TOOK AWAY ABILITY TO ADD CALORIES FOR WT GAIN/LOSS -CALORIC NEEDS FOR WT MAINTENANCE FOR NOW
  var goalselect;
  var goalselected = 'Maintain Weight'
  $("#cbwspan").text(<%=@client.cbw%>)
  
  if(goalselected == 'Gain Weight') {
  widgetUsed("calrequirement", parseInt(z - z + 1 * y * 35));
  $('#hiddencalreq').val(parseInt(z - z + 1 * y * 35));
  }
  if(goalselected == 'Maintain Weight') {
  widgetUsed("calrequirement", parseInt(z));
  $('#hiddencalreq').val(parseInt(z));
  }
  if(goalselected == 'Lose Weight') {
  widgetUsed("calrequirement", parseInt(z - z + 1 * y * 25));
  $('#hiddencalreq').val(parseInt(z - z + 1 * y * 25));
  }
  }
  function dx() {
  $("#dxspan")[0].innerHTML = document.getElementById("client_dx").value;
  $(function(){
  $("#dxspan").typed({
  strings: [document.getElementById('client_dx').value],
  typeSpeed: 4
  });
  });
  }
  function bmi() {
  var x = document.getElementById("client_cbw").value;
  var y = document.getElementById("client_ht").value;
  var z = x / y
  var a = z / y
  var b = a * 703
  if(document.getElementById("client_cbw").value.length < 1 || b > 50 ) {
  bmiused("bmispan", 0);
  bmiused("bmispanhead", 0);
  bmiused("bmispanin", 0);
  }
  if(b < 50 && b > 10) {
  $("#bmispan").innerHTML = b;
  bmiused("bmispan", b.toFixed(1));
  bmiused("bmispanin", b.toFixed(1));
  bmiused("bmispanhead", b.toFixed(1));
  }
  bmiused("bmispan", b.toFixed(1));
  $('#hiddenbmi').val(b.toFixed(1));
  };
  function pro() {
  var x = document.getElementById("client_cbw").value;
  var y = x/2.2
  var z = y * 1
  widgetUsed("prorequirement", Math.round(z));
  $('#hiddenproreq').val(Math.round(z));
  }
  function fl() {
  var x = document.getElementById("client_cbw").value;
  var y = x/2.2
  var z = y * 30
  widgetUsed("flrequirement", Math.round(z));
  $('#hiddenflreq').val(Math.round(z));
  }
  function assessment() {
  $('#hiddenfassess').val(document.getElementById('assessment').innerText)
  NProgress.done();
  }
  function chart0() {
  if(document.getElementById("client_date0").value.length == '') {
  return;
  }
  
  myLine.datasets[1].points[3].value = document.getElementById("client_cbw").value;
  if (myLine.datasets[1].points[3].value > 0) {
  myLine.datasets[1].points[3].value = document.getElementById("client_cbw").value;
  }
  if(document.getElementById("client_date1").value.length == '') {
  return;
  }
  
  myLine.datasets[1].points[2].value = document.getElementById("client_thirtywt").value;
  if (myLine.datasets[1].points[2].value > 0) {
  myLine.datasets[1].points[2].value = document.getElementById("client_thirtywt").value;
  }
  if(document.getElementById("client_date2").value.length == '') {
  return;
  }
  myLine.datasets[1].points[1].value = document.getElementById("client_ninetywt").value;
  if (myLine.datasets[1].points[1].value > 0) {
  myLine.datasets[1].points[1].value = document.getElementById("client_ninetywt").value;
  }
  if(document.getElementById("client_date3").value.length == '') {
  return;
  }
  myLine.datasets[1].points[0].value = document.getElementById("client_oneeightywt").value;
  if (myLine.datasets[1].points[0].value > 0) {
  myLine.datasets[1].points[0].value = document.getElementById("client_oneeightywt").value;
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
  $("#" + id).text(now.toFixed(0));
  }
  });
  };
  
  $(".w-refresh").click(function(){
  var counter = $(this).closest(".ultra-widget").data("counter");
  var counter_id = $(this).closest(".ultra-widget").attr("id");
  widgetUsed(counter_id, counter);
  });
  function bmiused(id, number, string) {
  $("#" + id ).prop('Counter',0).animate({
  Counter: number
  }, {
  duration: 800,
  easing: 'swing',
  step: function (now) {
  $("#" + id).text(now.toFixed(1));
  }
  });
  };
  
  $(".w-refresh").click(function(){
  var counter = $(this).closest(".ultra-widget").data("counter");
  var counter_id = $(this).closest(".ultra-widget").attr("id");
  widgetUsed(counter_id, counter);
  });
  function adime() {
  $('#fassessadime').html($('#assval').text())
  $('#note-editor-3').html($('#client_dx').val())
  $('#note-editor-4').html($('#client_cdiet').val())
  $('#monevadime').html()
  }
;
