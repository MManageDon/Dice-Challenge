// Setting Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + randomImage1;

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

// Setting Image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

// Setting the Heading
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins!";
} else {
    heading.innerHTML = "Draw!";
}