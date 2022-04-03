// Current day and time
{
    var currentDay = moment().format("MMMM DD YYYY");
    $("#currentDay").append(currentDay);
    var currentTime = moment().format("HH")

}

//Time slots of the day
$(".time-slot").each(function () {
    var time = $(this).attr("id").split("-")[1];
    
    if (currentTime == time) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentTime < time) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else  {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});


for (var i = 8; i < 20; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}

