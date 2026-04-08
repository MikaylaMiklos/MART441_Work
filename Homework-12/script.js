class Square{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setColor(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//square variables
var square1, square2, square3, square4, square5;


//player square variables
var x = 50;
var y = 50;
//rose square variables
var x2 = 130;
var y2 = 220;
//daisy square variables
var x3 = 330;
var y3 = 400;
//daffodil square variables
var x4 = 580;
var y4 = 250;
//Hydrangea square variables
var x5 = 420;
var y5 = 150;

var flowerSpeed = 1;

// directions: 1 = moving down, -1 = moving up
var dir2 = 1;
var dir3 = 1;
var dir4 = 1;
var dir5 = 1;


drawSquare();
setInterval(update, 1000/40);

function update() {
    flowerAnimation();
    drawSquare();

    if (collide(square1, square2)) {
        alert("you have found a rose!");
        shrinkFlower(square2);
        flashBackground();
    }

    if (collide(square1, square3)) {
        alert("you have found a daisy!");
        shrinkFlower(square3);
        flashBackground();
    }

    if (collide(square1, square4)) {
        alert("you have found a daffodil, it's your favorite!");
        shrinkFlower(square4);
        flashBackground();
    }

    if (collide(square1, square5)) {
        alert("you have found a hydrangea!");
        shrinkFlower(square5);
        flashBackground();
    }
}


function drawSquare()
{ 
    ctx.clearRect(0,0,800,600);

    // player square
    square1 = new Square(x,y,20,20,"rgb(32, 107, 78)");
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

    // rose square
    square2 = new Square(x2,y2,40,40,"rgb(212, 8, 42)");
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

    // daisy square
    square3 = new Square(x3,y3,30,30,"rgb(252, 248, 238)");
    ctx.fillStyle = square3.theColor;
    ctx.fillRect(square3.theX, square3.theY, square3.theWidth, square3.theHeight);

    // daffodil square
    square4 = new Square(x4,y4,35,40,"rgb(226, 158, 10)");
    ctx.fillStyle = square4.theColor;
    ctx.fillRect(square4.theX, square4.theY, square4.theWidth, square4.theHeight);

    // hydrangea square
    square5 = new Square(x5,y5,40,45,"rgb(73, 98, 238)");
    ctx.fillStyle = square5.theColor;
    ctx.fillRect(square5.theX, square5.theY, square5.theWidth, square5.theHeight);
}


$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
if(actualLetter == "w")
    {
        moveUp();
    }
 else if(actualLetter == "s")
    {
        moveDown();
    }
 else if(actualLetter == "d")
    {
        moveRight();
    }
 else if(actualLetter == "a")
    {
        moveLeft();
    }
}

    function flowerAnimation() {
    // rose
    if (y2 > 230) dir2 = -1;
    if (y2 < 210) dir2 = 1;
    y2 += dir2 * flowerSpeed;

    // daisy
    if (y3 > 410) dir3 = -1;
    if (y3 < 390) dir3 = 1;
    y3 += dir3 * flowerSpeed;

    // daffodil
    if (y4 > 260) dir4 = -1;
    if (y4 < 240) dir4 = 1;
    y4 += dir4 * flowerSpeed;

    // hydrangea
    if (y5 > 160) dir5 = -1;
    if (y5 < 140) dir5 = 1;
    y5 += dir5 * flowerSpeed;
}


function moveUp() {
    y -= 10;
    if (y < 0) y = 0;
}

function moveDown() {
    y += 10;
    if (y > canvas.height - 20) y = canvas.height - 20;
}

function moveLeft() {
    x -= 10;
    if (x < 0) x = 0;
}

function moveRight() {
    x += 10;
    if (x > canvas.width - 20) x = canvas.width - 20;
}

// AI generated code for collision detection and response because my original code was not working and I could not figure out why in a reasonable amount of time.
function collide(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

function hasCollided() {
    if (collide(square1, square2)) return square2;
    if (collide(square1, square3)) return square3;
    if (collide(square1, square4)) return square4;
    if (collide(square1, square5)) return square5;
    return null;
}

function shrinkFlower(flower) {
    flower.width *= 0.7;
    flower.height *= 0.7;
}

function flashBackground() {
    canvas.style.backgroundColor = "rgb(169, 241, 127)";

    setTimeout(() => {
        canvas.style.backgroundColor = "rgb(106, 240, 124)";
    }, 150); // flash for 150ms
}



