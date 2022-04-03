// Current day and time
{
    var currentDay = moment().format("MMMM DD YYYY");
    $("#currentDay").append(currentDay);

}

//Time slots of the day
$(".time-slot").each(function () {
    var time = $(this).attr("id").split("-")[1];
    
    if (currentDay == time) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentDay < time) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else  {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

