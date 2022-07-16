//For button sound by mouse

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimatiopn(buttonInnerHTML);
  });
}

//For Keyboard sound
document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimatiopn(event.key);
});

function makeSound(Key) {
  switch (Key) {
    case "w":
      var Tom1 = new Audio("/sounds/tom-1.mp3");
      Tom1.play();
      break;

    case "a":
      var Tom2 = new Audio("/sounds/tom-2.mp3");
      Tom2.play();
      break;

    case "s":
      var Tom3 = new Audio("/sounds/tom-3.mp3");
      Tom3.play();
      break;

    case "d":
      var Tom4 = new Audio("/sounds/tom-4.mp3");
      Tom4.play();
      break;

    case "j":
      var Snare = new Audio("/sounds/snare.mp3");
      Snare.play();
      break;

    case "k":
      var Crash = new Audio("/sounds/crash.mp3");
      Crash.play();
      break;

    case "l":
      var Kick = new Audio("/sounds/kick-bass.mp3");
      Kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimatiopn(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  } , 100);
}
