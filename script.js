
//variable(s)


//add date and time to the top of the page THIS CODE DOES NOT WORK
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);

//$("#currentDay").text.moment().format('MMMM Do YYYY, h:mm:ss a');


//on click save to local storage THIS CODE ALSO DOES NOT WORK
$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    var hour = $(this).parent(".time").attr("id");
    localStorage.setItem(task, hour);
    console.log(task)
});

//pull content from local storage I CAN'T TEST THIS BECAUSE EVRYTHING ELSE IS BROKEN

$("#hour9").val(localStorage.getItem("hour9"));
$("#hour10").val(localStorage.getItem("hour10"));
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
// I CAN'T EVEN BEGIN TO WRITE THIS BECAUSE EVERYTHING ELSE IS BROKEN

