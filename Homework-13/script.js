class Square{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
    // player square
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
var x = 50;
var y = 50;
var obstacles = [];
var ducklings = [];
//used ai to build out score and duck collection system.
var score = 0;


$.getJSON("game.json", function(data) {

    // Load obstacles
    for (var i = 0; i < data.obstacles.length; i++) {
        obstacles.push(new Square( data.obstacles[i].x, data.obstacles[i].y, data.obstacles[i].h, data.obstacles[i].w, data.obstacles[i].color
        ));
    }

    // Load ducklings (collectibles)
    for (var i = 0; i < data.ducklings.length; i++) {
        ducklings.push(new Square( data.ducklings[i].x, data.ducklings[i].y, data.ducklings[i].h, data.ducklings[i].w, data.ducklings[i].color
        ));
    }

    drawSquare(); 
});


function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);

    // Draw player
    var square1 = new Square(x, y, 40, 40, "#eeead4");
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

    // Draw obstacles
    for (var i = 0; i < obstacles.length; i++) {
        ctx.fillStyle = obstacles[i].theColor;
        ctx.fillRect(obstacles[i].theX, obstacles[i].theY, obstacles[i].theWidth, obstacles[i].theHeight);
    }

// Draw ducklings + check collection - I used ai to build the update score and collection system.
for (var i = ducklings.length - 1; i >= 0; i--) {
    ctx.fillStyle = ducklings[i].theColor;
    ctx.fillRect(ducklings[i].theX, ducklings[i].theY, ducklings[i].theWidth, ducklings[i].theHeight);

    // Check collision with player
    var player = new Square(x, y, 40, 40, "#eeead4");

    if (hasCollided(player, ducklings[i])) {
        ducklings.splice(i, 1); // remove duckling
        score++;
        document.getElementById("score").innerHTML = "score: " + score;
    }
}



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

    drawSquare();
    
}



function moveUp() {
    y -= 10;

    if (y < 0) y = 0;


    var player = new Square(x, y, 40, 40, "#eeead4");

    for (var i = 0; i < obstacles.length; i++) {
        if (hasCollided(player, obstacles[i])) {
            y += 10; // undo movement
        }
    }
}

function moveDown() {
    y += 10;

    if (y > canvas.height - 40) y = canvas.height - 40;

    var player = new Square(x, y, 40, 40, "#eeead4");

    for (var i = 0; i < obstacles.length; i++) {
        if (hasCollided(player, obstacles[i])) {
            y -= 10;
        }
    }


}

function moveLeft() {
    x -= 10;

    if (x < 0) x = 0;


    var player = new Square(x, y, 40, 40, "#eeead4");

    for (var i = 0; i < obstacles.length; i++) {
        if (hasCollided(player, obstacles[i])) {
            x += 10;
        }
    }
}

function moveRight() {
    x += 10;

    if (x > canvas.width - 40) x = canvas.width - 40;

    var player = new Square(x, y, 40, 40, "#eeead4");

    for (var i = 0; i < obstacles.length; i++) {
        if (hasCollided(player, obstacles[i])) {
            x -= 10;
        }
    }

}


function hasCollided(object1, object2) {
  return !(
    ((object1.y + object1.height) < object2.theY) ||
    (object1.y > (object2.theY + object2.theHeight)) ||
    ((object1.x + object1.width) < object2.theX) ||
    (object1.x > (object2.theX + object2.theWidth))
  );
}

