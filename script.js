// Initialize the Vimeo player
var player = new Vimeo.Player("vimeoPlayer", {
  id: 822453988,
  autoplay: false,
  controls: false,
  loop: true,
});

var buttonplay = document.getElementById("play-video");
buttonplay.addEventListener("click", function () {
  player.play();
  buttonplay.style.display = "none";
});

// project 1 buttons
var project1Displayed = false;
var project1 = document.getElementById("project1");
project1.addEventListener("click", function () {
  player.play();
  project1.style.display = "none";
  continue1.style.display = "none";
});

var continue1 = document.getElementById("continue");
continue1.addEventListener("click", function () {
  player.play();
  continue1.style.display = "none";
  project1.style.display = "none";
  player.setCurrentTime(132.5);
});

// project 2 buttons
var project2Displayed = false;
var project2 = document.getElementById("project2");
project2.addEventListener("click", function () {
  player.play();
  project2.style.display = "none";
  continue2.style.display = "none";
});

var continue2 = document.getElementById("continue2");
continue2.addEventListener("click", function () {
  player.play();
  continue2.style.display = "none";
  project2.style.display = "none";
  player.setCurrentTime(202.0);
});

// project 3 buttons
var project3Displayed = false;
var project3 = document.getElementById("project3");
project3.addEventListener("click", function () {
  player.play();
  project3.style.display = "none";
  continue3.style.display = "none";
});

var continue3 = document.getElementById("continue3");
continue3.addEventListener("click", function () {
  player.play();
  continue3.style.display = "none";
  project3.style.display = "none";
  player.setCurrentTime(273.0);
});

// project 4 buttons
var project4Displayed = false;
var project4 = document.getElementById("project4");
project4.addEventListener("click", function () {
  player.play();
  project4.style.display = "none";
  continue4.style.display = "none";
});

var continue4 = document.getElementById("continue4");
continue4.addEventListener("click", function () {
  player.play();
  continue4.style.display = "none";
  project4.style.display = "none";
  player.setCurrentTime(348.0);
});

//exit or revisit buttons
var exitDisplayed = false;
var exit = document.getElementById("exit");
exit.addEventListener("click", function () {
  player.play();
  exit.style.display = "none";
  revisit.style.display = "none";
});

var revisit = document.getElementById("revisit");
revisit.addEventListener("click", function () {
  player.play();
  revisit.style.display = "none";
  exit.style.display = "none";
  player.setCurrentTime(64.0);

  //all variables false 
  buttonDisplayed = false;
  project1Displayed = false;
  project2Displayed = false;
  project3Displayed = false;
  project4Displayed = false;
  exitDisplayed = false;
});

player.on("play", function () {
  var currentTime = 0;

  setInterval(function () {
    player.getCurrentTime().then(function (seconds) {
      currentTime = seconds;

      if (currentTime >= 81.0 && currentTime <= 82 && !project1Displayed) {
        player.pause();
        project1.style.display = "block";
        continue1.style.display = "block";
        project1Displayed = true;
      }

      if (currentTime >= 155.0 && currentTime <= 156 && !project2Displayed) {
        player.pause();
        project2.style.display = "block";
        continue2.style.display = "block";
        project2Displayed = true;
      }

      if (currentTime >= 218.0 && currentTime <= 219 && !project3Displayed) {
        player.pause();
        project3.style.display = "block";
        continue3.style.display = "block";
        project3Displayed = true;
      }

      if (currentTime >= 285.0 && currentTime <= 286 && !project4Displayed) {
        player.pause();
        project4.style.display = "block";
        continue4.style.display = "block";
        project4Displayed = true;
      }

      if (currentTime >= 355.0 && currentTime <= 356.0 && !exitDisplayed) {
        player.pause();
        exit.style.display = "block";
        revisit.style.display = "block";
        exitDisplayed = true;
      }

    });
  }, 10);
});



window.onload = function() {
  document.getElementById("popup-container").classList.add("blur-background");
  document.getElementById("popup-container").style.opacity = 1;
  document.getElementById("popup-container").style.pointerEvents = "auto";
}

function closePopup() {
  document.getElementById("popup-container").classList.remove("blur-background");
  document.getElementById("popup-container").style.opacity = 0;
  document.getElementById("popup-container").style.pointerEvents = "none";
}