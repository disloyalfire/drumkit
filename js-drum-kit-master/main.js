// DRUM KIT (Modified Wes Bos JS30 Challenge)

//listen for key events on the page
document.addEventListener("keydown", playsound);

//event function
function playsound(event) {
  console.log(event.keyCode);

  if (event.keyCode == 65) {
    //"a"
    //play A-Clap
    let audio = document.getElementById("clap");
    audio.currentTime = 0;
    audio.play();
  } else if (event.keyCode == 83) {
    //"s"
    //play S-hihat
    let audio = document.getElementById("hihat");
    audio.currentTime = 0;
    audio.play();
  } else if (event.keyCode == 68) {
    //"D"
    //play D-kick
    let audio = document.getElementById("kick");
    audio.currentTime = 0;
    audio.play();
  } else if (event.keyCode == 70) {
    //"F"
    //play F-OpenHat
    let audio = document.getElementById("openhat");
    audio.currentTime = 0;
    audio.play();
  } else if (event.keyCode == 71) { //"G"
  //play G-Boom
  let audio = document.getElementById('boom');
  audio.currentTime = 0;
  audio.play();
} else if (event.keyCode == 72) { //"H"
//play H-Ride
let audio = document.getElementById('ride');
audio.currentTime = 0;
audio.play();
} else if (event.keyCode == 74) { //"J"
//play J-Boom
let audio = document.getElementById('snare');
audio.currentTime = 0;
audio.play();
} else if (event.keyCode == 75) { //"k"
//play K-tom
let audio = document.getElementById('tom');
audio.currentTime = 0;
audio.play();
} else if (event.keyCode == 76) { //"L"
//play L-tink
let audio = document.getElementById('tink');
audio.currentTime = 0;
audio.play();
}

}
