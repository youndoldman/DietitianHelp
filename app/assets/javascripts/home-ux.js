$(document).ready(function() {

  new gnMenu(document.getElementById('gn-menu'))

  $('#new-client-form').on('submit', e => $(e.target).ajaxSubmit() )
  $("#hiddendob").mask("99/99/9999", { placeholder: "mm/dd/yyyy" })
  $("#searchAddModal").iziModal({ transitionIn: '', transitionOut: '' })
  $("#searchAddModal").iziModal('open');

  var newClientName; // <- used inside selectize

  // AUTOCOMPLETE FROM CLIENTS DATABASE 
  $('.gn-search').selectize({
    theme: 'links',
    maxItems: 1,
    preload: 'focus',
    valueField: 'id',
    searchField: ['lastname', 'firstname'],
    options: [],
    create: true,
    allowEmptyOption: false,
    updatePlaceholder: true,
    openOnFocus: true,
    render: {
      option: function(data, escape) {
        if (data.firstname == undefined) {
          newClientName = data.text
          return '<div class="item">' + escape(data.text) + '</div>';
        } 
        else {
          return '<div class="item">' + escape(data.firstname) + ' ' + escape(data.lastname) + ' ' +
            '</div>';
        }
      },
      item: function(data, escape) {
        if (data.firstname == undefined) {
          newClientName = data.text
          var newClientNameArr = newClientName.split(" ")
          $('#new-firstname-input').val(newClientNameArr[0])
          $('#new-lastname-input').val(newClientNameArr[1])
          $("#new-client-form-container").show("fast");
          return '<div class="item">' + escape(data.text) + '</div>'
        } 
        else {
          return '<div class="item">' + escape(data.firstname) + ' ' + escape(data.lastname) + ' ' +
            '</div>'
        }
      }
    },
    load: function(query, callback) {
      if (!query.length) return callback();
      $.ajax({
        url: '/clients',
        type: 'GET',
        dataType: 'json',
        data: {
          q: query,
        },
        error: function() {
          callback();
        },
        success: function(res) {
          callback(res);
        },
      });
    },
    onChange: function() {
      if (isNaN(parseInt($('#select-beast-landsearch').val()))) {
        // IF ITEM IN SEARCH BAR IS INVALID (NaN) EXIT FUNCTION
        return false
      } 
      else {
        // ELSE loadClient(ValueOfItemInSearchBar aka Client ID)
        loadClient(parseInt($('#select-beast-landsearch').val()))
      }
    },
  })

  // toggle plus/search icon on search/add modal
  $('#select-beast-landsearch-selectized').keyup(function() {
    if ($('#landsearch-dropdown:first-child div').attr('class') == 'create') {
      $('#landsearchicon').attr('class', 'fa fa-search fa-stack-1x fa-inverse');
    }
    if ($('#landsearch-dropdown:first-child div').attr('class') == 'create active') {
      $('#landsearchicon').attr('class', 'fa fa-stack-1x fa-inverse fa-user-plus');
    }

  })

  $("#hiddendob").mask("99/99/9999", { placeholder: "mm/dd/yyyy" })

  $('#client_date0').pikaday()
})


var defaultAssessment = '<p id="assessment-value" class="w-amount" data-toggle="tooltip" data-placement="top" title="Click to edit..."><span id="agespan" class="w-amount">- -</span>y/o <span>Client</span>on <span id="cdietspan" class="w-amount">- - </span> Diet to manage Dx of <span id="dxspan" class="w-amount">- -</span>. Average intake: <span id="intakefromspan", class="w-amount">- -</span>  <span id="intaketospan", class="w-amount"></span>with <span>assistance needed.</span> CBW of <span id="cbwspan" class="w-amount">- -</span> lbs puts <span>Client</span> at BMI of <span id="bmispan" class="w-amount">- -</span> kg/m2 and at <span id="percentibwfassess" class="w-amount">- -</span>% of IBW. <span id="wthistshow"class="w-amount"> Weight history shows</span> <span id="weight-difference-message"></span>. Abnormal lab values noted, MD/NP aware. <span>Pressure ulcer</span>. <span>Client</span> under <span>MED</span>increasing significantly the risk for <span>N/V/D</span>. Will continue to monitor all nutritional values and make changes as PRN.</p>';

window.onload = function() {
  initialPromo()
  // REMOVE LINES BELOW TO DISPLAY INITIAL PROMO
  // top.$('#preloader').fadeOut()
  // top.progressBar.done()

}

// NOTIFICATION THAT SHOWS NAME OF CLIENT CREATED
function clientCreated(title) {
  iziToast.show({
    color: '#5F9EA0',
    icon: 'ico-check',
    titleColor: '#FFFFFF',
    iconColor: '#000000',
    title: title,
    position: 'topCenter',
    timeout: 2000,
    progressBar: false,
  });
}


function loadClient(clientId) {
  progressBar.start()

  const clientFrame = top.$('#clientload')

  // IF ALREADY LOADED
  if (clientId === $currentClient) {
    top.$('#landing').iziModal('fadeOut')
    clientFrame[0].contentWindow.location.reload(true) // reload existing user
    return
  }
  
  clientFrame.attr("src", "/clients/" + clientId)

  clientFrame.hide()
  progressBar.inc()

  $('#selectinput').attr('class', 'selectize-input items has-options not-full')

  // ADDS EVENT AFTER CLIENT LOAD TO MAKE LINK ON HEADER WORK WITH LOADED CLIENT
  $('#assessmentTool').off('click')
  .click(function() { clientFrame.attr("src", "/clients/" + clientId) })

  // clearOptions FORCES selectize TO RELOAD CLIENTS EVERYTIME FUNCTION IS CALLED
  top.$('.gn-search')[0].selectize.clearOptions()

  top.$currentCliet = clientId
}


  // INITIAL PROMO TO BE SHOWN WHEN LOG IN
  function initialPromo() {
    top.$('#preloader').fadeIn('slow');
    const preloader = top.$('#contente')
    const preloaderUL = top.$('#visiblee')

    preloader.show()

    top.progressBar.set(0.4)

    setTimeout(() => top.progressBar.set(0.6), 1000)
    setTimeout(() => top.progressBar.set(0.7), 2000)
    setTimeout(() => top.progressBar.set(0.99), 3000)

    // ON ANIMATION END FADEOUT INTIALPROMO
    preloaderUL.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      () => {
        setTimeout(() => {
          top.$('#preloader').fadeOut()
          top.progressBar.done()
        }, 580)
      })
  }

function getHistory() {
  $.ajax({
    url: "/clients/" + clientId + "/medical_history",
    type: 'GET',
    success: function(data) {
      top.document.getElementById('clientload').contentDocument.getElementById('clientloadright').innerHTML = data;
    }
  })
}