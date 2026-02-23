// ARRAY 1: Blank images (what user sees first)
var blankImages = [];

// ARRAY 2: Actual images (hidden matches)
var actualImages = [];

// Blank image path
var blankPath = "imgs/blank.png";

// 6 images (each must appear twice = 12 total)
var imageOptions = [
    "imgs/apple.png",
    "imgs/banana.png",
    "imgs/cherry.png",
    "imgs/grape.png",
    "imgs/orange.png",
    "imgs/pear.png"
];

// Start the game
function startGame() {

    createBlankArray();
    createActualArray();
    displayBoard();
}

// Create blank array (size 12)
function createBlankArray() {
    for (var i = 0; i < 12; i++) {
        blankImages.push(blankPath);
    }
}

// Create randomized actual image array (size 12)
function createActualArray() {

    // Create pairs
    var tempArray = [];

    for (var i = 0; i < imageOptions.length; i++) {
        tempArray.push(imageOptions[i]);
        tempArray.push(imageOptions[i]); // add twice for pair
    }

    // Randomize using Fisher-Yates shuffle
    for (var i = tempArray.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));

        var temp = tempArray[i];
        tempArray[i] = tempArray[randomIndex];
        tempArray[randomIndex] = temp;
    }

    actualImages = tempArray;
}

// Display blank images in 3x4 grid
function displayBoard() {

    var board = document.getElementById("gameBoard");

    for (var i = 0; i < blankImages.length; i++) {

        var img = document.createElement("img");

        img.src = blankImages[i];
        img.className = "card";
        img.id = "card" + i;

        img.setAttribute("onclick", "flipCard(" + i + ")");

        board.appendChild(img);
    }
}

// Reveal matching image when clicked
function flipCard(index) {
    document.getElementById("card" + index).src = actualImages[index];
}