//detecting button press
for (var i=0;i < document.querySelectorAll('.drum').length; i++) {

  document.querySelectorAll('.drum')[i].addEventListener("click", function () {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);


    });

}

   // detecting keyboard press
   document.addEventListener('keydown',function(event) {
     makeSound(event.key);

});



function makeSound(key) {

  switch (key) {
    case "a":
     var tom1 = new Audio('tom-1.mp3');
     tom1.play();
     break;

    case "l":
     var snare = new Audio('snare.mp3');
     snare.play();
     break;

    case "s":
     var tom2 = new Audio('tom-2.mp3');
     tom2.play();
     break;

    case "d":
     var tom3 = new Audio('tom-3.mp3');
     tom3.play();
     break;

    case "j":
     var tom4 = new Audio('tom-4.mp3');
     tom4.play();
     break;

    case "k":
     var kickbass = new Audio('kick-bass.mp3');
     kickbass.play();
     break;

    case "w":
     var crash = new Audio('crash.mp3');
     crash.play();
     break;



   default:

  };
};



//document.addEventListener('keydown',function (event) {
  //if (event.keyCode == 65) {tom1.play();}
//});





//var audio = new Audio('sounds/tom-1.mp3')
  //    audio.play();
