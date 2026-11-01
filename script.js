document.addEventListener("DOMContentLoaded", function () {

  const openButton = document.getElementById("openButton");
  const surprise = document.getElementById("surprise");

  const letterButton = document.getElementById("letterButton");
  const letterContent = document.getElementById("letterContent");
  const envelope = document.querySelector(".envelope");

  const magicButton = document.getElementById("magicButton");
  const magicMessage = document.getElementById("magicMessage");

  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const audio = document.getElementById("birthdayAudio");
  const musicStatus = document.getElementById("musicStatus");

  // Open birthday surprise
  openButton.addEventListener("click", function () {
    surprise.style.display = "block";
    surprise.scrollIntoView({ behavior: "smooth" });
  });

  // Open birthday letter
  letterButton.addEventListener("click", function () {
    letterContent.style.display = "block";
    envelope.style.display = "none";
    letterContent.scrollIntoView({ behavior: "smooth" });
  });

  // Make a wish
  magicButton.addEventListener("click", function () {
    magicMessage.textContent =
      "May all your wishes come true! Happy Birthday! 💜✨";
  });

  // Play music
  playButton.addEventListener("click", function () {
    audio.play()
      .then(function () {
        musicStatus.textContent = "Playing your special song 💜";
      })
      .catch(function () {
        musicStatus.textContent = "Music could not play. Please try again.";
      });
  });

  // Pause music
  pauseButton.addEventListener("click", function () {
    audio.pause();
    musicStatus.textContent = "Music paused 💜";
  });

});
