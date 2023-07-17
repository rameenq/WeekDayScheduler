$(function () {
  // Display the current date in the header
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  // Display the current time with seconds in the header
  function updateTime() {
    var currentTime = dayjs().format("h:mm:ss A");
    $("#currentTime").text(currentTime);
  }

  setInterval(updateTime, 1000);

  // Generate time blocks for standard business hours (9am to 12am)
  for (var hour = 9; hour <= 24; hour++) {
    var hourOfDay = dayjs().hour(hour);
    var timeBlockEl = $("<div>").attr("id", "hour-" + hour).addClass("row time-block");

    var hourColEl = $("<div>")
      .addClass("col-2 col-md-1 hour text-center py-3")
      .text(hourOfDay.format("hA"));

    var descriptionColEl = $("<textarea>")
      .addClass("col-8 col-md-10 description")
      .attr("rows", "3")
      .val(localStorage.getItem("hour-" + hour));

    var saveBtnEl = $("<button>")
      .addClass("btn saveBtn col-2 col-md-1")
      .attr("aria-label", "save")
      .html('<i class="fas fa-save" aria-hidden="true"></i>');

    timeBlockEl.append(hourColEl, descriptionColEl, saveBtnEl);
    $(".container-fluid").append(timeBlockEl);
  }

  // Save inputted items in local storage on save button click
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hour, description);
  });

  // Apply past, present, or future class to time blocks
  function applyTimeBlockClasses() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("-")[1]);

      if (hour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  applyTimeBlockClasses();
});
