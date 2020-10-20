//add date and time to the top of the page
setInterval(function () {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(time);

    //console.log(time)
}, 1000);

// var hour9El = $("#hour9")
// console.log(hour9El)
// var elementHour = hour9El.data("hour")
// console.log(elementHour)

//on click save to local storage

$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    console.log(task)

    var time = $(this).parent().attr("id");

    // saving to local storage
    localStorage.setItem(time, task);
    
});

//pull content from local storage 
//I can't test this because code above is broken

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#hour11").val(localStorage.getItem("hour11"));
$("#hou12").val(localStorage.getItem("hour12"));
$("#hour1").val(localStorage.getItem("hour1"));
$("#hour2").val(localStorage.getItem("hour2"));
$("#hour3").val(localStorage.getItem("hour3"));
$("#hour4").val(localStorage.getItem("hour4"));
$("#hour5").val(localStorage.getItem("hour5"));
$("#hour6").val(localStorage.getItem("hour6"));
$("#hour7").val(localStorage.getItem("hour7"));

//3 if else statemenmts for past present and future and change the color
// I don't know where to begin with this

//if the value of the div is equal to h it should be a white

//how do i check if the value of something is less than or greater than in refrence to time?
//AM and PM throws a wrench in the whole thing



//hourUpdater function
function hourUpdater(){
// get current number of hourse
var currentHour = moment().format('H');

    // loop over the time blocks .each
$(".time-block").each(function(){
var blockHour = parseInt($(this).attr("id"));

if (blockHour < currentHour){
    $(this).addClass("past")
} else if (blockHour === currentHour){
    $(this).removeClass("past")
    $(this).addClass("present")
} else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
}
});

hourUpdater();


    // set variable for time block to pasteInt

    // check to see if we have moved past the current time

    // else if at current time

    // else if not this time
}
    