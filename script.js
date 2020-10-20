//add date and time to the top of the page
setInterval(function () {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(date);
}, 1000);

//on click save to local storage

$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // saving to local storage
    localStorage.setItem(time, task);
});

//pull content from local storage 
//I can't test this because code above is broken

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));

//hourUpdater function
function hourUpdater() {
    // get current hour
    var currentHour = moment().format('H');
    console.log(currentHour)

    // loop over the time blocks .each
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));

        if (blockHour < currentHour) {
            $(this).addClass("past")
        } else if (blockHour == currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    });

}
hourUpdater();