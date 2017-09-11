///////
//SHOWS HIDDEN FORM TO UPDATE CLIENT INFO
//////
$(document).ready(function() {

  function getHistory() {
    $.ajax({
      url: "/clients/" + clientId + "/medical_history",
      type: 'GET',
      success: function(data) {
        top.document.getElementById('clientload').contentDocument.getElementById('clientloadright').innerHTML = data;
      }
    })
  }


  $(function() {
    $.ajaxSetup({ // always pass csrf tokens on ajax calls
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      }
    });
  });

  // SUBMIT COMPLY NOTES 
  $("#done-btn").on("click", function(e) {
    e.preventDefault()

    $("#new_progressnote").submit()
    $("#new_monitoringnote").submit()
    submitNNote()

    showDoneNotification()
  })

  // MOVE TO COMPLY TAB AFTER SUCCESS FROM ASSESSMENT SUBMIT
  $('#comply-btn').on('click', function moveToComply() {

    const type              = $('#assessmentType').find(":selected").text().split(" - ")[0]
    const date              = $('#assessmentType').find(":selected").text().split(" - ")[1]
    const diagnosis         = $('#note-editor-4').text()
    const assessment        = $('#note-editor-2').text()
    const intervention      = $('#note-editor-5').text()
    const monitoringEval    = $('#note-editor-6').text()
    const authenticityToken = top.$('meta[name="csrf-token"]').attr('content')

    const fullassessmentRequestData = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        fullassessment: {
          assessment_type: type,
          date: date,
          assessment: assessment,
          diagnosis: assessment,
          intervention: intervention,
          monitoring_evaluation: monitoringEval
        }
      })
    }

    fetch("/clients/" + client.id + "/fullassessments", fullassessmentRequestData)
  })

  $('#new_progressnote').ajaxForm()
  $('#new_monitoringnote').ajaxForm()
  $('#new_nextevaluationnote').ajaxForm()
  $('[data-toggle="tooltip"]').tooltip()

  $('#updateClient').ajaxForm({
    success: function() {
      window.$('#assessmentTopTab').trigger('click')
      $("#modal-alert").iziModal('open')
    }
  })
  $('#updateClientFassess').ajaxForm({
    success: function() {
      window.$('#complyTopTab').trigger('click')
      $("#modal-alert2").iziModal('open');
    }
  })

  // RESET ASSESSMENT BUTTON
  $('#runBtn').on('click', function() {
    resetAssess()
    diet()
    intake()
    dx()
    getAge()
    adime()
    setTimeout(assessment, 2000)
    rchart0()
  })

  const csSelects = (function() {
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
      new SelectFx(el);
    });
  })();

  $('.summernote3').summernote({
    airMode: true,
  })
  $('.summernote4').summernote({
    airMode: true,
  })
  $('#assval').summernote({
    airMode: true,
    textareaAutoSync: false,
  })
  $('#dxadime').summernote({
    airMode: true,
    textareaAutoSync: false,
  })
  $('#intadime').summernote({
    airMode: true,
    textareaAutoSync: false,
  })
  $('#monevadime').summernote({
    airMode: true,
    textareaAutoSync: false,
  })

  top.$currentClient = client
  top.$('#isClientLoaded').removeClass('badge-danger').addClass('badge-success').text('<%=@client.firstname[0].to_s +  @client.lastname[0].to_s %> Loaded');
  top.$('#displayClientOnHeader').text('<%=@client.name %>');


  if (top.$('#historyFromMenu').length == 0) {
    top.$('.gn-submenu').append("<li id='historyFromMenu' onclick='getHistory()'><a type='button' aria-expanded='false'>History</a></li>");
  }

  $('#new_lab').ajaxForm({
    success: function(data) {
      console.log(data)
      $("#modal-alert").iziModal('open');
    }
  })

  //MASKS DATE INPUT TO TAKE WITH HUMAN DATE FORMAT ADDING PLACE HOLDER + MASK
  const allDateInputs = $('.date')

  allDateInputs.mask("99/99/9999", {
    placeholder: "mm/dd/yyyy"
  })

  //CALENDAR POPDOWN FROM DATE INPUTS
  allDateInputs.pikaday()

  top.$('#searchAddModal').iziModal('close')

  $("#modal-alert").iziModal({
    title: 'Nutrition Parameters Updated',
    subtitle: client.firstname + " " + client.lastname,
    icon: 'icon-check',
    iconColor: '#00af66',
    headerColor: '#374B89',
    attached: 'top', // bottom, top
    width: 400,
    timeout: 2300,
    timeoutProgressbar: true,
    pauseOnHover: true,
    timeoutProgressbarColor: '#CABC42',
    overlay: false,
  })
  $("#modal-alert2").iziModal({
    title: 'ADIME Assessment Saved',
    subtitle: '<%= @client.name %>',
    icon: 'icon-check',
    iconColor: '#00af66',
    headerColor: '#374B89',
    attached: 'top', // bottom, top
    width: 400,
    timeout: 2300,
    timeoutProgressbar: true,
    pauseOnHover: true,
    timeoutProgressbarColor: '#CABC42',
    overlay: false,
  })
  $("#modal-alert3").iziModal({
    title: 'ADIME Note Identical to previous',
    subtitle: 'Save anyways?',
    icon: 'icon-check',
    iconColor: '#00af66',
    headerColor: '#374B89',
    attached: 'top', // bottom, top
    width: 400,
    timeout: 2300,
    timeoutProgressbar: true,
    pauseOnHover: true,
    timeoutProgressbarColor: '#CABC42',
    overlay: false,
  })

  $("#modal-alert4").iziModal({
    title: 'Notes Saved Succesfully',
    icon: 'icon-check',
    iconColor: '#00af66',
    headerColor: '#374B89',
    attached: 'top', // bottom, top
    width: 400,
    timeout: 2300,
    timeoutProgressbar: true,
    pauseOnHover: true,
    timeoutProgressbarColor: '#CABC42',
    overlay: false,
  })

  top.$('#clientload').fadeIn();
  $("#labsform").iziModal({
    closeButton: true,
    navigateCaption: true,
    navigateArrows: true,
    group: "labs"
  })

  $("#labsform-2").iziModal({
    closeButton: true,
    navigateCaption: true,
    navigateArrows: true,
    group: "labs"
  })

  $('#client-edit-btn').click(function(e) {
    toggleClientEditForm()
  })
  $('#client-cancel-edit-btn').click(function(e) {
    toggleClientEditForm()
  })
  $('#client-edit-form').on('submit', function(e) {
    e.preventDefault()
    $(e.target).ajaxSubmit(options = {
      success: function(response) {
        updateClientDataOnViews(response)
        toggleClientEditForm()
        $('#client-edit-form [type="submit"]').removeAttr('disabled')
      }
    })
  })

  $('#add_todo').submit(event => {
    event.preventDefault()
    const goalName         = $('#goal-input').val()
    const revisionDate = new Date($('#goal-revision-date')[0].value).toISOString().slice(0, 10).replace(/-/g, "/")

    if (goalName.length > 3) {
      const goalsRequestData = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          goal: {
            name: goalName,
            revision_date: revisionDate,
          }
        })
      }

      fetch("/clients/" + client.id + "/goals", goalsRequestData)
      .then(res => res.json())
      .then(goal => { 
        $('.todo ul').append(
          `<li id="' + 'item-' + data["id"] + '" class="list-group-item  ' + randomClass + ' list-item" data-toggle="tooltip" data-placement="top" title="' + revision_date + '" ">
            <div class="checkbox"' + ' onclick="updateGoal(' + "'/clients/" + data["client_id"] + "/goals/" + data["id"] + "'" + ', ' + data["id"] + ", 'complete'" + ')' + '">
              <input type="checkbox" id="' + data["id"] + '" />
              <label for="' + data["id"] + '">' + toDo_name + '</label>
            </div>
            <div class="pull-right action-btns">
              <a class="archive">
                <span class="fa fa-archive fa-inverse" onclick="fupdateGoal(' + "'/clients/" + data["client_id"] + "/goals/" + data["id"] + "'" + ', ' + data["id"] + ", 'archived'" + ')" style="cursor: pointer"></span>
              </a>
              <a id="trash-' + data["id"] + '"class="trash">
                <span class="fa fa-close fa-inverse" onclick="deleteGoal(' + "'/clients/" + data["client_id"] + "/goals/" + data["id"] + "'," + data["id"] + ');" style="cursor: pointer"></span>
              </a>
            </div>
          </li>`
          )
      })
    }
  })

      // $('#add_todo')[0].reset()
      // var $toDo = $('#goalsInput')
      // toDo_name = $toDo.val()
      // revision_date = new Date($('#goalsDate')[0].value).toISOString().slice(0, 10).replace(/-/g, "/")
      // border = ['list-success', 'list-primary', 'list-warning', 'list-danger', 'list-info']
      // randomClass = border[Math.floor(Math.random() * border.length)]

      // if (toDo_name.length >= 3) {
      //   var newid = data["id"]
      //     // Create Event Entry
      //   $(".todo ul").append(
      //     '<li id="' + 'item-' + data["id"] + '" class="list-group-item  ' + randomClass + ' list-item" data-toggle="tooltip" data-placement="top" title="' + revision_date + '" "><div class="checkbox"' + ' onclick="updateGoal(' + "'/clients/" + data["client_id"] + "/goals/" + data["id"] + "'" + ', ' + data["id"] + ", 'complete'" + ')' + '"><input type="checkbox" id="' + data["id"] + '" /><label for="' + data["id"] + '">' + toDo_name + '</label></div><div class="pull-right action-btns"><a class="archive"><span class="fa fa-archive fa-inverse" onclick="fupdateGoal(' + "'/clients/" + data["client_id"] + "/goals/" + data["id"] + "'" + ', ' + data["id"] + ", 'archived'" + ')" style="cursor: pointer"></span></a><a id="trash-' + data["id"] + '"class="trash"><span class="fa fa-close fa-inverse" onclick="deleteGoal(' + "'/clients/" + data["client_id"] + "/goals/" + data["id"] + "'," + data["id"] + ');" style="cursor: pointer"></span></a></div></li>'
      //   );

      //   var eventObject = {
      //     title: $.trim($("#item-" + newid).text()),
      //     className: $("#item-" + newid).attr("data-bg"), // use the element's text as the event title
      //     stick: true
      //   };

      //   // store the Event Object in the DOM element so we can get to it later
      //   $("#item-" + data["id"]).data('eventObject', eventObject);

      //   // Reset input
      //   $toDo.val('').focus();
      // } else {
      //   $toDo.focus();
      // }



  $("#goalDate").mask("99/99/9999", {
    placeholder: "mm/dd/yyyy"
  });

  $("#client-dob-input").mask("99/99/9999", {
    placeholder: "mm/dd/yyyy"
  });

})
// END DOCUMENT READY


// parse a date in yyyy-mm-dd format
function parseDate(dateStr) {
  var dateParts = dateStr.split("/");
  return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
}

  // function count() {
  //     var checked = $('.checked-todo').length,

  //         archive = $('.archive-item').length,
  //         all = $('.list-group-item').length - archive,
  //         active = all - checked;

  //     $('.complete-todo span').text(checked);
  //     $('.active-todo span').text(archive);
  //     $('.archive-todo span').text(archive);
  // }



  //Check archive items
  $(document).on('click', '.action-btns .archive', function(e) {
      // $(this).closest(".list-group-item").removeClass("checked-todo list-item").addClass("archive-item").hide();
      // count();
  });

  // count();


$(".list-group-item").addClass("list-item");

$('.list-group li').each(function() {
  if ($(this).hasClass("checked-todo")) {
    $(this).removeClass("list-item");
  };
});

//Show all items
$('.all-todo').click(function(e) {
  e.preventDefault();
  $('.archive-item').hide();
  $('.checked-todo, .list-item').show();
});

//Show only active items
$(document).on('click', '.active-todo', function(e) {
  e.preventDefault();
  $('.checked-todo').hide();
  $('.archive-item').hide();
  $('.list-item').show();
});

//Show only completed items
$('.complete-todo').click(function(e) {
  $('.list-item').hide();
  e.preventDefault();
  $('.archive-item').hide();
  $('.checked-todo').show();
});

//Show only archive items
$('.archive-todo').click(function(e) {
  $('.list-item').hide();
  e.preventDefault();
  $('.checked-todo').hide();
  $('.archive-item').show();
});

//Mark all as complete
$('#clear').change(function() {
  if ($(this).is(":checked")) {
    $(".list-group-item").addClass("checked-todo").removeClass("list-item");
    $("input:checkbox").prop('checked', $(this).prop("checked"));
  } else {
    $(".list-group-item").removeClass("checked-todo").addClass("list-item");
    $("input:checkbox").prop('checked', $(this).prop("checked"));
  }
});

//Remove all completed items
$('#clear-comp').click(function() {
  // var clearedComp = $('.checked-todo').remove();
});



function updateGoal(url, goalID, stat) {
  $.ajax({
    type: "PUT",
    url: url,
    beforeSend: function() {
      $('#item-' + goalID.toString()).addClass("animated tada loading")
    },

    data: {
      goal: {
        status: stat.toString(),
      },
      commit: "Update Goal"
    },
    success: function(response) {
      goalID = response["id"]
      if (stat == 'archived') {
        $(':checkbox#' + goalID.toString()).prop('checked', false)
        $($('#item-' + goalID).find('.checkbox')).attr("onclick", "'updateGoal(" + url + ", " + goalID + ", " + "'complete')'")
        $('#item-' + goalID.toString()).closest(".list-group-item").removeClass('animated tada loading checked-todo').addClass("archive-item")
        $($('#item-' + goalID).find('.fa')[0]).removeClass('fa-archive').addClass('fa-check').attr("onclick", "updateGoal(" + url + ", " + goalID + ", " + "'active')")
      }
      if (stat == 'active') {
        $(':checkbox#' + goalID.toString()).prop('checked', false)
        $($('#item-' + goalID).find('.checkbox')).attr("onclick", "'updateGoal(" + url + ", " + goalID + ", " + "'complete')'")
        $('#item-' + goalID.toString()).closest(".list-group-item").removeClass("archive-item checked-todo animated tada loading")
        $($('#item-' + goalID).find('.fa')[0]).removeClass('fa-check').addClass('fa-archive').attr("onclick", "updateGoal(" + url + ", " + goalID + ", " + "'archived')")
      }
      if (stat == 'complete') {
        $(':checkbox#' + goalID.toString()).prop('checked', 'checked')
        $($('#item-' + goalID).find('.checkbox')).attr("onclick", "'updateGoal(" + url + ", " + goalID + ", " + "'active')'")
        $('#item-' + goalID.toString()).closest(".list-group-item").removeClass('archive-item checked-todo animated tada loading').addClass("checked-todo")
        $($('#item-' + goalID).find('.fa')[0]).removeClass('fa-check fa-archive').addClass('fake-icon').attr("onclick", "'updateGoal(" + url + ", " + goalID + ", " + "'active')'")
      };
    },
    error: function(response) {

    }
  });

}

function deleteGoal(url, goalID) {
  $.ajax({
    type: "DELETE",
    url: url,
    beforeSend: function() {
      $('#item-' + goalID.toString()).css('background-color', 'white')
    },
    success: function(data) {
      console.log(data)
      $('#item-' + data["id"]).remove()
    }
  });
}



$.fn.isEmpty = function() {
  if (this[0].nodeName != "INPUT") {
    console.error("Function only valid when called on input nodes.")
    return
  };
  return this[0].value.length <= 0
}

function toggleClientEditForm() {
  $('#client-info-container').toggleClass('away')
  $('#client-edit-form-container').toggleClass('away')
}


function updateClientDataOnViews(response) {
  $('#client').data(response) // <- updates single source of truth where variable 'client' feeds from
  const clientAttrOnView = $('.client-attribute')

  for (key in clientAttrOnView) {

    if (!!parseInt(key)) {

      const value = client[clientAttrOnView[key].id.split("-")[1]]
      const attribute = clientAttrOnView[key].id.split("-")[1]

      clientAttrOnView[key].innerHTML = value
    }

  }
}

function submitNNote() {
  // MANUALLY SEND NNOTE BECAUSE DATE SENDER SEEMS BUGGY
  if ($('#note-editor-1').val().length > 0) {
    $.ajax({
      type: "POST",
      url: '/nextevaluationnotes',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      },
      data: {
        nextevaluationnote: {
          nnote: $('#nextevaluationnote_nnote')[0].value,
          nnote_date: new Date($('#note-editor-1')[0].value).toISOString().slice(0, 10).replace(/-/g, "/"),
          client_id: client.id,
          user_id: current_user.id,
        },
        commit: "Create Nextevaluationnote"
      }
    })
  }
}


function showDoneNotification() {
  // DONE NOTIFICATION AFTER ALL COMPLY FORMS SUBMITTED
  top.iziToast.show({
    color: 'dark',
    icon: 'icon-person',
    title: 'MNT Completed',
    message: "What's Next?",
    position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    progressBarColor: 'rgb(0, 255, 184)',
    buttons: [
      ['<button>Dashboard</button>', function(instance, toast) {
        // instance.hide({ transitionOut: 'fadeOutUp' }, toast);
        top.$('#clientload').fadeOut();
        top.$('#clientload').attr('src', '/dashboard');
        instance.hide();
      }],
      ['<button>History</button>', function(instance, toast) {
        // instance.hide({ transitionOut: 'fadeOutUp' }, toast);
        $.ajax({
          url: '/clients/' + client.id + '/history/',
          type: 'GET',
          success: function(data) {
            top.document.getElementById('clientload').contentDocument.getElementById('clientloadright').innerHTML = data;
            instance.hide();
          }
        });
      }]
    ],
  });
}


function getAge(d1, d2) {
  var d1 = document.getElementById('client_dobspan').innerHTML;
  var d2 = new Date();
  var diff = d2.getTime() - parseDate($('#client_dobspan').text()).getTime();
  ager = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
  $("#agespan").typed({
    strings: [ager.toString()],
    typeSpeed: 50
  })
}