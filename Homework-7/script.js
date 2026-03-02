//animals image names array
var animals = [
    "card0","card1","card2","card3","card4","card5","card6","card7","card8","card9","card10","card11"
];
//blank image path
    var blank = "imgs/blank.png";
//function to print images
    var animalImages = new Array();

//card flip variables
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;

var player = {"firstname":"", "lastname":"", "age":0, "score":0};

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
    if (number === firstNumber) return;

    if (firstNumber >=0) {
        secondNumber = number;
        document.getElementById(animals[number]).src = animalImages[secondNumber];
    }

    else if (firstNumber < 0) {
        firstNumber = number;
        document.getElementById(animals[firstNumber]).src = animalImages[firstNumber];
    }

    if(animalImages[secondNumber] != animalImages[firstNumber] && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000);
    }
    else if (animalImages[secondNumber] == animalImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
    score++;
    allFound++;
    
    firstNumber = -1;
    secondNumber = -1;

    if (allFound == animalImages.length/2)
    {
        player.score = score;
        localStorage.setItem("playerInfo", JSON.stringify(player));
        window.location = "results.html";
    }}}


function imagesDisappear()
{
    console.log(firstNumber);
    document.getElementById(animals[firstNumber]).src = blank;
    document.getElementById(animals[secondNumber]).src = blank;
    firstNumber = -1;
    secondNumber = -1;
}


//JSON from HWExample
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "memoryGame.html";
}

function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);

    var str = "First Name: " + player.firstname + "<br>" + "Last Name: " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" + "Score: " + player.score;

    if (document.getElementById("endResults") != null) {
        document.getElementById("endResults").innerHTML = str;
    }
}