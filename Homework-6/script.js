 //animals image names array
var animals = [
    "card0","card1","card2","card3","card4","card5","card6","card7","card8","card9","card10","card11"
];
//blank image path
    var blank = "imgs/blank.png";
//function to print images
    var animalImages = new Array();

//function to print blanks
function printBlanksArray() {

    printImagesArray();

    for (var i = 0; i < animals.length; i++) {
        document.getElementById(animals[i]).src = blank;
    }
}

function printImagesArray() {
    var animalImagesPath = ["imgs/dog.png", "imgs/cat.png", "imgs/horse.png", "imgs/rabbit.jpeg", "imgs/snake.png", "imgs/seal.png"];

    var count = [0, 0, 0, 0, 0, 0,];

    while (animalImages.length < 12) {
        var randomNumber = Math.floor(Math.random() * animalImagesPath.length);

        if (count[randomNumber] < 2) {
            animalImages.push(animalImagesPath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipCard(number)
{
    document.getElementById(animals[number]).src = animalImages[number];

    
}
