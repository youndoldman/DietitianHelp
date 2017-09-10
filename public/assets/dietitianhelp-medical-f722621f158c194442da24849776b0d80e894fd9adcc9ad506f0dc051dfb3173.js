// BEGIN MEDICAL JS -----> 
// CONTAINS ALL CALCULATIONS FOR BMI, IBW, REQUIREMENTS, ETC...
/*
 *
 *   DIETITIAN.HELP
 *   ALL RIGHTS RESERVED
 *
 */


$(document).ready(function(){
  window.client = (client => $('#client').data())()

  window.heightInput = $('#client-height-input')
  window.genderInput = $('#client-gender-input')
  window.cbwInput    = $("#client-cbw-input")

  getBmi()
  getIbw()
  cal()
  pro()
  fl()
  wtHistoryChart()
})


function getAge() {
  const dob = client.dob
  const dateToday = new Date();
  const diff = dateToday.getTime() - parseDate(dob).getTime();
  const age  = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  $(function() {
    $("#agespan").typed({
      strings: [age.toString()],
      typeSpeed: 50
    });
  });
};

function wtHistoryChart(labels, data) {

  if (!labels || !data) {
    labels = $('.history-date').map((idx, element) => element.value).toArray().reverse()
    data   = $('.history-weight').map((idx, element) => element.value).toArray().reverse()
  }

  const ctx = document.getElementById("chart-line").getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{ 
        data: data,
        label: "Weight",
        borderColor: "#61ab8b",
        backgroundColor: "#8fb3a3",
        fill: true
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
  });
}


function rchart0() {

top.NProgress.start();


  let significantLossOneMonth    = false;
  let significantLossThreeMonths = false;
  let significantLossSixMonths   = false;
  let significantGainOneMonth    = false;
  let significantGainThreeMonths = false;
  let signficantGainSixMonths    = false;

  const significantWeightLoss = (loss => significantLossOneMonth || significantLossThreeMonths || significantLossSixMonths)
  const significantWeightGain = (gain => significantGainOneMonth || significantGainThreeMonths || signficantGainSixMonths)

  const cbw     = $('#client-cbw-input').val()
  const cbwDate = $("#client-date0-input").val()

  const oneMonthAgoDate   = $("#client-date1-input").val()
  const threeMonthAgoDate = $("#client-date2-input").val()
  const sixMonthAgoDate   = $("#client-date3-input").val()

  const weightOneMonthAgo    = $('#client-weight-oneMonth-ago-input').val()
  const weightThreeMonthsAgo = $('#client-weight-threeMonths-ago-input').val()
  const weightSixMonthsAgo   = $('#client-weight-sixMonths-ago-input').val()

  const data   = [cbw, weightOneMonthAgo, weightThreeMonthsAgo, weightSixMonthsAgo]
  const labels = [cbwDate, oneMonthAgoDate, threeMonthAgoDate, sixMonthAgoDate]

  wtHistoryChart(labels, data)

  top.NProgress.inc();

  function checkForSignificantDifferenceInWeight() {
    // 1 MO. SIGNIFICANT CHANGE
    if (Math.floor(cbw / weightOneMonthAgo * 100) <= 95) {
      significantLossOneMonth = true;
    }
    if (Math.ceil(cbw / weightOneMonthAgo * 100) >= 105) {
      significantGainOneMonth = true;
    }

    // 3 MO. SIGNIFICANT CHANGE
    if (Math.floor(cbw / weightThreeMonthsAgo * 100) <= 92.5) {
      significantLossThreeMonths = true;
    }
    if (Math.ceil(cbw / weightThreeMonthsAgo * 1000) >= 1075) {
      significantGainThreeMonths = true;
    }

    // 6 MO. SIGNIFICANT CHANGE
    if (Math.floor(cbw / weightSixMonthsAgo * 100) <= 90) {
      significantLossSixMonths = true;
    }
    if (Math.ceil(cbw / weightSixMonthsAgo * 100) >= 110) {
      signficantGainSixMonths = true;
    }
  }

  checkForSignificantDifferenceInWeight()

  top.NProgress.inc()

  const weightDifferenceMessageContainer = $('#weight-difference-message')
  let weightDifferenceMessage            = ''


  let lossesInDays = []
  if ( significantWeightLoss() ) {
    weightDifferenceMessage += 'Significant Weight Loss for the past '
    if (significantLossOneMonth) {
      lossesInDays.push("30")
    }
    if (significantLossThreeMonths) {
      lossesInDays.push('90')
    }
    if (significantLossSixMonths) {
      lossesInDays.push('180')
    }
    
    weightDifferenceMessage += lossesInDays.join("/") + " days"
    
    significantWeightGain() ? weightDifferenceMessage += ' and ' : null
  }
  top.NProgress.inc();

  let gains = []
  if ( significantWeightGain() ) {
    weightDifferenceMessage += 'Significant Weight Gain for the past ';
    if (significantGainOneMonth) {
      gains.push("30")
    }
    if (significantGainThreeMonths) {
      gains.push("90")
    }
    if (signficantGainSixMonths) {
      gains.push("180")
    }
    weightDifferenceMessage += gains.join("/") + "days"
  }

  weightDifferenceMessageContainer.typed({
      strings: [weightDifferenceMessage],
      typeSpeed: 1
    });
  // IF ANY SIGNIFICANT WEIGHT LOSS PUSH NOTIFICATION
  if (significantWeightLoss() || significantWeightGain() ) {
    iziToast.warning({
      title: 'Significant',
      message: 'Weight Change',
      position: 'topRight',
    });
  }
  //setTimeout(noti, 1000);
  top.NProgress.done();
}


// TYPE DIET ON ASSESSMENT
function diet() {
  $("#cdietspan")[0].innerText = $('#current-diet-input').val();
  $(function() {
    $("#cdietspan").typed({
      strings: [client.cdiet],
      typeSpeed: 4
    });
  });
};

// TODO: INTAKE FUNCTION TO TYPE IN ASSESSMENT
function intake() {
  if ($('#client_intakefrom').val() === "1") {
    $("#intakefromspan").html('Refuse');
    $('#client_intaketo').attr('disabled', 'disabled');
    $("#intaketospan").html('');
  } else {
    $("#intakefromspan").html($('#client_intakefrom').val())
    $("#intakeftopan").html($('#client_intaketo').val())
  }
};


// IDEAL BODY WEIGHT ON CLIENT INFO
getIbw = function() {

  let ibw           = undefined

  const height = parseInt(heightInput.val())
  const gender = genderInput.val().toLowerCase()

  if (heightInput.isEmpty()) {
    animateCount("ibwspanin", 0);
    return
  }

  switch(gender) {
    case 'male':
        ibw = Math.round( ( (height - 60) * 6) + 106)
        animateCount("ibwspanin", ibw, 'easeInExpo')
        break;

    case 'female':
        ibw = Math.round( ( (height - 60) * 5) + 105)
        animateCount("ibwspanin", ibw, 'easeInExpo')
        break;  

    default:
        alert('Unable to obtain Ideal Body Weight because of invalid gender.')
}

  var percentibw = Math.round(cbwInput.val() / ibw * 100);
  animateCount("percentibw", Math.round(percentibw), 'easeInExpo');
  animateCount("percentibwfassess", Math.round(percentibw), 'easeInExpo');
  // top.clientload.$('#hiddenibw').val(ibw);

  //WILL RUN ASSESSMENT() FROM HERE TO NOT ADD ANOTHER ONCHANGE
  assessment();
}


// CALORIC REQUIREMENTS ON CLIENT INFO
function cal() {
  var x = cbwInput.val();
  var y = x / 2.2
  var z = y * 30
    //TOOK AWAY ABILITY TO ADD CALORIES FOR WT GAIN/LOSS -CALORIC NEEDS FOR WT MAINTENANCE FOR NOW
  var goalselect;
  var goalselected = 'Maintain Weight'
  $("#cbwspan").text(client.cbw)

  if (goalselected == 'Gain Weight') {
    animateCount("calrequirement", parseInt(z - z + 1 * y * 35));
    $('#hiddencalreq').val(parseInt(z - z + 1 * y * 35));
  }
  if (goalselected == 'Maintain Weight') {
    animateCount("calrequirement", parseInt(z));
    $('#hiddencalreq').val(parseInt(z));
  }
  if (goalselected == 'Lose Weight') {
    animateCount("calrequirement", parseInt(z - z + 1 * y * 25));
    $('#hiddencalreq').val(parseInt(z - z + 1 * y * 25));
  }
}


// TYPE DIAGNOSIS ON ASSESSMENT
function dx() {
  $("#dxspan")[0].innerHTML = document.getElementById("client-dx-input").value;
  $(function() {
    $("#dxspan").typed({
      strings: [document.getElementById('client-dx-input').value],
      typeSpeed: 4
    });
  });
}

// BMI ON CLIENT INFO
function getBmi() {
  const cbw    = cbwInput.val()
  const height = heightInput.val()
  const bmi    = (((cbw / height) / height) * 703)

  if (cbwInput.isEmpty() || bmi > 50) {
    animateBmiCount("bmispan", 0)
    animateBmiCount("bmispanin", 0)
  }
  else if (bmi < 50 && bmi > 10) {
    animateBmiCount("bmispan", bmi.toFixed(1))
    animateBmiCount("bmispanin", bmi.toFixed(1))
  }
}


// PROTEIN REQUIREMENTS ON CLIENT INFO
function pro() {
  var x = cbwInput.val();
  var y = x / 2.2
  var z = y * 1
  animateCount("prorequirement", Math.round(z));
  $('#hiddenproreq').val(Math.round(z));
}


// FLUID REQUIREMENTS ON CLIENT INFO
function fl() {
  var x = cbwInput.val()
  var y = x / 2.2
  var z = y * 30
  animateCount("flrequirement", Math.round(z));
  $('#hiddenflreq').val(Math.round(z));
}

function assessment() {
  $('#hiddenfassess').val(document.getElementById('assessment').innerText)
  top.NProgress.done();
}


//UltraWidget
function animateCount(id, number, animationName) {
  animationName = animationName || 'swing'
  $("#" + id).prop('Counter', parseInt($("#" + id).text())).animate({
    Counter: number
  }, {
    duration: 800,
    easing: animationName,
    step: function(now) {
      $("#" + id).text(now.toFixed(0));
    }
  });
};


function animateBmiCount(id, number, string) {
  $("#" + id).prop('Counter', 0).animate({
    Counter: number
  }, {
    duration: 800,
    easing: 'swing',
    step: function(now) {
      $("#" + id).text(now.toFixed(1));
    }
  });
};


function adime() {
  $('#fassessadime').html($('#assval').text())
  $('#note-editor-3').html($('#client-dx-input').val())
  $('#note-editor-4').html($('#current-diet-input').val())
  $('#monevadime').html()
}

function resetAssess() {
  $('#assZone').html(top.defaultAssessment);
  $('#tooltip144344').hide()
}
// END MEDICAL JS 
;
