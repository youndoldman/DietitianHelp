window.onload = function() {

  // START CRUD GOALS

  function submitGoal(url) {
  $.ajax({
    type: "POST",
    url: url,
    data: {
    goal:
    {
    goals: $('#goalsInput')[0].value,
    revision_date: new Date($('#goalsDate')[0].value).toISOString().slice(0,10).replace(/-/g,"/"),
    client_id: £ erb valirble with client id,


    },
    commit: "Create Goal"
    },
    success: function(response) {
              toDo_name = response.goals,
              revision_date = response.revision_date;
              randomClass = border[Math.floor(Math.random() * border.length)];
              var newid = response.id;


      $(".todo ul").append(
                '<li id="' + 'item-' + newid + '" class="list-group-item  ' + randomClass + ' list-item" data-toggle="tooltip" data-placement="top" title="' + revision_date + '" "><div class="checkbox"><input type="checkbox" id="' + newid + '" /><label for="' + newid + '">' + toDo_name + '</label></div><div class="pull-right action-btns"><a class="archive" style="cursor: pointer"><span class="fa fa-archive"></span></a><a class="trash" onclick="deleteGoal(' + newid + ');"><span class="fa fa-close" style="cursor: pointer"></span></a></div></li>'
              );

    }
  });

  }


  function updateGoal(url, goalID, stat) {	
  $.ajax({
    type: "PUT",
    url: '/clients/£ erb valirble with client id,/goals/' + goalID,
    beforeSend: function() { $('#item-' + goalID.toString()).css('background-color', 'white') },

    data: {
    goal:
    {
    status: stat.toString(),
    },
    commit: "Update Goal"
    },
    success: function(response) {
      $('#item-' + goalID.toString()).css('background-color', '#EAEBED')
      if(stat == 'archived') {
        $('#item-' + goalID.toString()).closest(".list-group-item").removeClass("checked-todo list-item").addClass("archive-item").hide();
      }
    }
  });

  }

  function deleteGoal(goalID) {

  $.ajax({
    type: "DELETE",
    url: '/clients/£ erb valirble with client id,/goals/' + goalID,
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    success: function() {
    },
  });

  }
  var element;
  function archiveGoals(){

    $('.checked-todo').each(function(key, value) {
    updateGoal(parseInt($(value).find("[type='checkbox']").attr('id')), 'archived')
  })
  };
  // END CRUD GOALS


}