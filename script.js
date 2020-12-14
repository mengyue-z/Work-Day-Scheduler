// current Day
$("#currentDay").text(dayjs().format('dddd, MMMM D'));
var d = new Date();
var currentHour = d.getHours();
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
        hourP.text((9+i)+"AM")
    } else if((9+i===12)){
        hourP.text("12PM")
    } else {
        hourP.text((9+i-12) +"PM")
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



// var taskList = [];


// $(".saveBtn").on("click", function () {
//     var taskInputs = $("#taskInput").val();
//     taskList.push(taskInputs);
//     console.log(taskList);
// });

