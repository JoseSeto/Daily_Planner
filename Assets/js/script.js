var saveButtonEl = $(".saveBtn")
var currentHour = parseInt(dayjs().format('H'))

$(function () {

  //Click save button sets local storage
  saveButtonEl.click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //Checks against current time and applies correct class to text boxes.
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    // makes class present if current hour is equal to the assigned box hour
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } 
    //Makes anything greater than current hour future class
    else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } 
    //makes anything less than current hour past class
    else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
  //Allocates local storage to hold the given information under each specific hour
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
  $("#hour-18 .time-block").val(localStorage.getItem("18"));
  $("#hour-19 .time-block").val(localStorage.getItem("19"));
  $("#hour-20 .time-block").val(localStorage.getItem("20"));
  $("#hour-21 .time-block").val(localStorage.getItem("21"));
});

// Clock to show current time in header.
var interval = setInterval(function(){
  $('#currentDay').text(dayjs().format('MMM D, YYYY, HH:mm:ss'))
}, 100)