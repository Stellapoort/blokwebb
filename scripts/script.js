// JavaScript Document
console.log("hi");


// hamburge menu //

var HamburgerButton = document.querySelector("button")
var Hamburgerul = document.querySelector("ul")
var hamburgerimg = document.querySelector("nav button img")


HamburgerButton.onclick = function () {
    Hamburgerul.classList.toggle ("open")


if( Hamburgerul.classList.contains("open")){
  hamburgerimg.src = "images/kruis.png" 
} 
else (hamburgerimg.src = "images/hamburger.png")
}




// geluidje //

var images = document.querySelectorAll('img');

images.forEach(function(image) {
  image.addEventListener('click', function() {
    var audio = new Audio("sound/buttonklik.mp3");
    audio.play();
  });
});


var buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var audio = new Audio("sound/buttonklik.mp3");
    audio.play();
  });
});


var spans = document.querySelectorAll('span');

spans.forEach(function(span) {
  span.addEventListener('click', function() {
    var audio = new Audio("sound/buttonklik.mp3");
    audio.play();
  });
});


// kruisje //




