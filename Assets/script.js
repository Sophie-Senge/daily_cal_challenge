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
  
  
// * Display the current day at the top of the calender when a user opens the planner.
// function to cycle through timeArray and populate page
let time = 0;
function populatePage(){
  for (let i = 0; i < hourArray.length; i++) {
    time = hourArray[i]
    
   let newRows = `
        <div class="row time-block">
        <div class="col-md border hour">${time}</div>
        <textarea class="col-10 border taskInput" data-time="${time}"></textarea>
        <button type="button" data-time="${time}" class="col-1 btn btn-primary btn-rounded btn-sm saveBtn" id="button"><i
            class="far fa-save"></i></button>
      </div>`
     
      calDisplayEl.innerHTML = calDisplayEl.innerHTML + newRows 
    
  }
}
populatePage();


// let dateEl = $("#currentDay");
// dateEl.text(moment());
let now = moment();
setInterval(
  function(){
    $("#currentDay").text(now.format("[Today is] dddd Do, LT"));

  },1000)


// button listener


$(".saveBtn").on("click", function(event){
event.preventDefault();
  // console.log($(event.target).siblings("textarea").val());
  
  
  if(event.target.matches(".saveBtn")){
    
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


function displayLastInput() {
  let newTask = localStorage.getItem("newTaskEntry");

}

displayLastInput();
 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page