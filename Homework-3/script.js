console.log("Hello, World! This is Homework 3 script.");

//added favorite websites to the webpage via javascript
console.log("My favorite websites are https://www.pinterest.com/ because it has great art resources. And https://www.canva.com/ because it's useful for graphic design and class projects. I also like https://www.netflix.com/browse because it has entertaining shows and movies to watch while I work on projects.");

//added favorite games to the webpage via javascript
const games = ["minesweeper", "splatoon", "stardew valley"];
 document.getElementById("GL").innerHTML = games;
 console.log("Added favorite games to the webpage via javascript using W3Schools tutorial, which are: Minesweeper, Splatoon, and Stardew Valley.");

//Three favorite artists 
console.log("My favorite artists are Qing Han/Qinniart, Hayao Miyazaki, and Claude Monet. Qinniart is a digital artist who created beautiful and inspirational artworks, she survived open heart surgery 4 times, tragically she died in 2020 from cancer. Hayao Miyazaki is an animator and filmmaker from Japan, He co-founded Studio Ghibli and made one of my favorite films: Ponyo. Claude Monet is a  French impressionist painter, I love his painting The Water Lily Pond");

//exists to ask the user for their hobby and log a message including that hobby
var hobby = prompt("What is your favorite hobby?");
console.log(hobby + " is an awesome hobby!");