// Add date under page header
var currentDayP = $("#currentDay");
currentDayP.text(moment().format("dddd, MMMM Do"));

// Timeblock logic

var currentTime = moment().format("k");

var possibleTimes = [
    { elementTextBlock : $("#textarea9AM"), militaryVal : 9 },
    { elementTextBlock : $("#textarea10AM"), militaryVal : 10 },
    { elementTextBlock : $("#textarea11AM"), militaryVal : 11 },
    { elementTextBlock : $("#textarea12PM"), militaryVal : 12 },
    { elementTextBlock : $("#textarea1PM"), militaryVal : 13 },
    { elementTextBlock : $("#textarea2PM"), militaryVal : 14 },
    { elementTextBlock : $("#textarea3PM"), militaryVal : 15 },
    { elementTextBlock : $("#textarea4PM"), militaryVal : 16 },
    { elementTextBlock : $("#textarea5PM"), militaryVal : 17 },
]

// Loop through array of objects of possible time and set the background color accordingly

for (var i = 0; i < possibleTimes.length; i++){

    if (currentTime == possibleTimes[i].militaryVal){
        possibleTimes[i].elementTextBlock.addClass("present");
    }
    else if (currentTime < possibleTimes[i].militaryVal){
        possibleTimes[i].elementTextBlock.addClass("past");
    }
    else{
        possibleTimes[i].elementTextBlock.addClass("future");
    }
}

// Event listener triggered when user cllicks on save button
$(".saveBtn").click(function (){
    console.log("test");
});
