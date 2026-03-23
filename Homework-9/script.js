var memorySelector = "#memory";
var allMemories = new Array();
var textMemories = new Array();

class MemoryInfo {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    getSelector() {
        return this.selector;
    }

    getImagePath() {
        return this.imagePath;
    }

    tostring() {
        return this.selector + ":" + this.imagePath;
    }

}


function initializeArray() {

    var memory1 = new MemoryInfo("#memory", "images/americanLake.jpg");
    var memory2 = new MemoryInfo("#memory", "images/pugetSound.jpg");
    var memory3 = new MemoryInfo("#memory", "images/railroad.JPG");
    var memory4 = new MemoryInfo("#memory", "images/tacomasPark.jpg");

    allMemories.push(memory1);
    allMemories.push(memory2);
    allMemories.push(memory3);
    allMemories.push(memory4);

}


function initializeTextMemories() {
    var textMemory1 = "You can still remember the scent of this place, there is nothing else like it...";
    var textMemory2 = "Salty, woody, and tar from the railway.";
    var textMemory3 = "You expected to feel some attachment to it, but when you last visted it was only nolstalgia.";
    var textMemory4 = "It still exists, just not as it was...";
    var textMemory5 = "You miss it.";

    textMemories.push(textMemory1);
    textMemories.push(textMemory2);
    textMemories.push(textMemory3);
    textMemories.push(textMemory4);
    textMemories.push(textMemory5);
}

function showNextText() {
    var randomText = textMemories[Math.floor(Math.random() * textMemories.length)];

    $("#text").text(randomText).slideDown(400).delay(3000).slideUp(400, function () {
        showNextText();
    });
}


$(document).ready(function () {
    initializeArray();
    initializeTextMemories();
    console.log(allMemories.length);
    console.log(allMemories[0].tostring());
    console.log(allMemories[1].tostring());
    console.log(allMemories[2].tostring());
    console.log(allMemories[3].tostring());

    console.log(allMemories[0].getSelector());
    
    console.log(allMemories[0].getImagePath());

    $(allMemories[0].getSelector()).attr("src", allMemories[0].getImagePath());

    showNextText();

    function cycleCircleColor() {
    var colors = ["rgb(192, 243, 239)", "rgb(81, 174, 236)"];

    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    $("#circle").css("background-color", randomColor);
}

    // change color every 1.5 seconds
    setInterval(cycleCircleColor, 1500);


    $("button").click(function () {

        setInterval(moveCircle, 900);

        var randomNumber = Math.floor(Math.random() * allMemories.length);

        // pick a random X position for the image
        var randomX = Math.floor(Math.random() * 750); 
        $("#memory").css("left", randomX + "px");

        $("#memory").fadeOut(400, function () {
            $(this).attr("src", allMemories[randomNumber].getImagePath());
            $(this).fadeIn(400);
        });

    });

});

function moveCircle()
{
    $("#circle").animate({left:500}).animate({top:400}).animate({left:20}).animate({top:200});
}

