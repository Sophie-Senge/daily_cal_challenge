// let timeEl = $("#9am");

let calDisplayEl = document.querySelector("#projectGrid");
let taskInputEl = document.querySelectorAll(".taskInput");
let saveSubmitBtn = document.querySelectorAll(".saveBtn")
let hourArray = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00"
]


// function to cycle through timeArray and populate page with schedule
let time = 0;
function populatePage() {
  for (let i = 0; i < hourArray.length; i++) {
    time = hourArray[i]

    let newRows = `
        <div class="row time-block" data-time="${time}">
        <div class="col-md border hour" >${time}</div>
        <textarea class="col-10 border taskInput" data-time="${time}"></textarea>
        <button type="button" data-time="${time}" class="col-1 btn btn-primary btn-rounded btn-sm saveBtn" id="button"><i
            class="far fa-save"></i></button>
      </div>`

    calDisplayEl.innerHTML = calDisplayEl.innerHTML + newRows

  }
}
populatePage();

// * Display the current day at the top of the calender when a user opens the planner.

// let dateEl = $("#currentDay");
// dateEl.text(moment());
let now = moment();
setInterval(
  function () {
    $("#currentDay").text(now.format("[Today is] dddd Do, LT"));

  }, 1000)


// button listener to save input
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // console.log($(event.target).siblings("textarea").val());


  if (event.target.matches(".saveBtn")) {

    taskInputEl = ($(event.target).siblings("textarea").val());
    saveSubmitBtn = ($(event.target).attr("data-time"));
    console.log(saveSubmitBtn);
    console.log(taskInputEl);
    // localStorage.setItem(saveSubmitBtn, taskInputEl);
    // var newTask = localStorage.getItem("newTaskEntry");
    // console.log(newTask);
  }


})

// function displayTaskInput (){
//   // nineTextEl.val(localStorage.getItem("taskItems"));
//   $("textarea").each(function(){
//   let newTasks = textInputEl.val(localStorage.getItem("taskItems"))
//   })

// }

// call function to persit refresh - doesn't work
function displayLastInput() {
  let newTask = localStorage.getItem("newTaskEntry");

}

displayLastInput();

// * Present timeblocks for standard business hours when the user scrolls down.
function timeBlockColors() {



  $(".time-block").each(function () {
    let currentTime = 12;
    let calHour = parseInt($(this).attr("data-time"));
    //   console.log(parseInt($(this).attr("data-time")))
    //  console.log(currentTime)


    if (calHour < currentTime) {
      $(this).addClass("past");
    } else if (calHour === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

  });


}

timeBlockColors();
