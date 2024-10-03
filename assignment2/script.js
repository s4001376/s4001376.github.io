const audio = document.querySelector("#custom-audio-player");
console.log(audio);
const audioName = document.querySelector("#audio-name");
console.log(audioName);

const audioList = [
  { name: "Ambient Wave - Digital Ocean Spaces", link: "music.mp3" },
  { name: "Zen Meditation - Darren Lucas from Pixabay", link: "zen.mp3" },
];

let loop = true;

// PLAY PAUSE SCRIPING ----

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseBtn.addEventListener("click", togglePlayPause);

audio.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "pause_btn.png";
  } else {
    audio.pause();
    playPauseImg.src = "play_btn.png";
  }
}

// VOLUME SCRIPTING ----

const volumeUpBtn = document.querySelector("#volume-up-btn");
console.log(volumeUpBtn);

const volumeDownBtn = document.querySelector("#volume-down-btn");
console.log(volumeDownBtn);

function updateVolume() {
  const volume = audio.volume;
  console.log("Volume changed:", volume);
}

audio.addEventListener("volumechange", updateVolume);

volumeUpBtn.addEventListener("click", increaseVolume);

volumeDownBtn.addEventListener("click", decreaseVolume);

function increaseVolume() {
  if (audio.volume < 0.9) {
    audio.volume += 0.1;
  }
}

function decreaseVolume() {
  if (audio.volume > 0.11) {
    audio.volume -= 0.1;
  }
}

// BACKWARD/FORWARD SCRIPTING ----

const prevBtn = document.querySelector("#prev-btn");
console.log(prevBtn);
prevBtn.addEventListener("click", prevTrack);

let currentIndex = 0;

function prevTrack() {
  console.log("previous track loading");
  currentIndex = (currentIndex - 1 + audioList.length) % audioList.length;
  console.log(currentIndex);
  playAudioAtIndex(currentIndex);
}

const nextBtn = document.querySelector("#next-btn");
console.log(nextBtn);
nextBtn.addEventListener("click", nextTrack);

function nextTrack() {
  console.log("next track loading");
  currentIndex = (currentIndex + 1) % audioList.length;
  console.log(currentIndex);
  playAudioAtIndex(currentIndex);
}

// Function to play video at a specific index
function playAudioAtIndex(index) {
  audio.pause();
  console.log(audioList[index].link);
  audio.src = audioList[index].link;
  audio.load(); // Load the new source
  audio.play(); // Play the video]

  audioName.textContent = audioList[index].name;
}

// PROGRESS BAR SCRIPTING ----

const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}

// STAR POSITION RANDOMISER ----

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 300
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
  result += `${randomNumber(-100, 100)}vw ${randomNumber(-100, 100)}vh ${randomNumber(1, 2)}px ${randomNumber(1, 2)}px #fff,`
}
console.log(result.substring(0, result.length - 1))

const stars = document.querySelector(".stars");
console.log(stars);

// TIME DISPLAY SCRIPTING ----

const displayTime = document.querySelector(".display-time");

function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();