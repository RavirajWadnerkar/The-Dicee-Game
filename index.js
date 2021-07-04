var randomNumber1 = Math.floor((Math.random()*6) + 1);
var dice1 = "dice" + randomNumber1;

document.querySelector(".img1").setAttribute("src", "images/" + dice1 + ".png");

var randomNumber2 = Math.floor((Math.random()*6) + 1);
var dice2 = "dice" + randomNumber2;

document.querySelector(".img2").setAttribute("src", "images/" + dice2 + ".png");

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "🚩 Player1 wins!";
}
if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent = "Player2 wins! 🚩";
}
if(randomNumber1 == randomNumber2)
{
    document.querySelector("h1").textContent = "🚩 Draw! 🚩";
}