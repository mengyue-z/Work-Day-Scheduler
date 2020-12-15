// current Day
$("#currentDay").text(dayjs().format('dddd, MMMM D'));

    var d = new Date();
    var currentHour = d.getHours();

// generate timeblocks
for (i=0; i<9;i++ ) {
    var blockDiv = $("<div>").addClass("row")
    var taskInputBlock = $("<input>").addClass("description")
    var hourP = $("<p>").addClass("hour");
    hourP.val(9+i);
    if(currentHour < hourP.val()){
        taskInputBlock.addClass("future");
    } else if (currentHour == hourP.val()) {
        taskInputBlock.addClass("present");
    } else {
        taskInputBlock.addClass("past");
    }

    if((9+i)<12){
        hourP.text((9+i)+"AM");
        hourP.addClass(""+(9+i));
    } else if((9+i===12)){
        hourP.text("12PM");
        hourP.addClass(""+(9+i));
    } else {
        hourP.text((9+i-12) +"PM");
        hourP.addClass(""+(9+i));
    }
    
    var saveButton = $("<button>").addClass("saveBtn")
    $(".container").append(blockDiv);
    blockDiv.append(hourP);
    blockDiv.append(taskInputBlock);
    blockDiv.append(saveButton);
    var buttonIcon = $("<ion-icon>");
    buttonIcon.attr("name","save-outline");
    buttonIcon.attr("size","large");
    saveButton.append(buttonIcon);
}


// click save button to save task inputs into local storage
$(document).on("click", ".saveBtn", function () {
var taskInputs = $(this).siblings(".description").val();
var time = $(this).siblings(".hour").text();
localStorage.setItem(time,taskInputs);
});

// append task inputs to the time blocks so that when refresh, it will still show up on the page
function appendTasks() {
    var nine = localStorage.getItem("9AM");
    $(".9").siblings(".description").val(nine);

    var ten = localStorage.getItem("10AM");
    $(".10").siblings(".description").val(ten);

    var eleven = localStorage.getItem("11AM");
    $(".11").siblings(".description").val(eleven);

    var twelve = localStorage.getItem("12PM");
    $(".12").siblings(".description").val(twelve);

    var one = localStorage.getItem("1PM");
    $(".13").siblings(".description").val(one);

    var two = localStorage.getItem("2PM");
    $(".14").siblings(".description").val(two);

    var three = localStorage.getItem("3PM");
    $(".15").siblings(".description").val(three);

    var four = localStorage.getItem("4PM");
    $(".16").siblings(".description").val(four);

    var five = localStorage.getItem("5PM");
    $(".17").siblings(".description").val(five);
}

appendTasks();