const button = document.getElementById("openButton");

const surprise = document.getElementById("surprise");

button.addEventListener("click", function() {

  surprise.style.display = "block";

  surprise.scrollIntoView({
    behavior: "smooth"
  });

  button.innerText = "Surprise Opened 💜";

});
const letterButton = document.getElementById("letterButton");

const letterContent = document.getElementById("letterContent");

letterButton.addEventListener("click", function() {

  letterContent.style.display = "block";

  letterButton.innerText = "Letter Opened 💗";

  letterContent.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});
const heartContainer = document.getElementById("floatingHearts");

function createHeart() {

  const heart = document.createElement("span");

  heart.className = "heart";

  heart.innerHTML = "♡";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.animationDuration =
    (4 + Math.random() * 3) + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);

}

setInterval(createHeart, 900);


const magicButton = document.getElementById("magicButton");

const magicMessage = document.getElementById("magicMessage");

magicButton.addEventListener("click", function() {

  magicMessage.innerText =
    "Priya, may all your dreams come true! Happy Birthday, My Girl! 💜✨";

  magicButton.innerText = "Wish Made! ♡";

});
const audio = document.getElementById("birthdayAudio");

const playButton = document.getElementById("playButton");

const pauseButton = document.getElementById("pauseButton");

const musicStatus = document.getElementById("musicStatus");

playButton.addEventListener("click", async function() {

  try {
    await audio.play();

    musicStatus.innerText = "Now playing for you ♡";

  } catch (error) {

    musicStatus.innerText =
      "Please add a valid music link first 💜";

  }

});

pauseButton.addEventListener("click", function() {

  audio.pause();

  musicStatus.innerText = "Music paused ♡";

});

audio.addEventListener("ended", function() {

  musicStatus.innerText = "Hope you enjoyed the music 💜";

});
