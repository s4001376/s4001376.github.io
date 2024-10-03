const audio = document.querySelector("#custom-audio-player");
console.log(audio);
const audioName = document.querySelector("#audio-name");
console.log(audioName);

const audioList = [
  { name: "Ambient Wave - Digital Ocean Spaces", link: "music.mp3" },
  { name: "Zen Meditation - Darren Lucas", link: "zen.mp3" },
  { name: "528hz Frequency Ambiance - Ribhav Agrawal", link: "frequency.mp3"}
];

let loop = true;

// As this is an audio media player, it would make sense that there would be more than one track to listen to, so I sourced the last two sounds from Pixabay, a provider of royalty free music tracks. I chose these tracks because they fit the theme of 'space ambiance' I wanted to portray based off the first track provided in Canvas. I have linked the tracks below: 
// https://pixabay.com/music/meditationspiritual-zen-meditation-180194/
// https://pixabay.com/music/meditationspiritual-528hz-frequency-ambient-music-meditationcalmingzenspiritual-music-237586/

// PLAY PAUSE SCRIPING ----

// The play/pause buttons were illustrated by me, I tried to recreate the ipod shuffle designs of the icons

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

// The volume buttons were illustrated by me as well. This function is important for an audio media player as users might think the track itself is too loud for them to consentrate on study, to relax or even just to listen. 

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

// PREVIOUS/NEXT SCRIPTING ----

// The previous/next buttons were again illustrated by me! These functions were also on the ipod shuffle which allowed users to skip or replay tracks, which I have implemented and coded down below. This is if the user wants to skip the current track or listen to a specific track (though there is no screen or list of tracks, not being able to see the list of music was the same as using an ipod shuffle)

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

// Furthermore, skipping to the next song or going back to the previous song will also change the 'Now Playing:' text to inform users of the song change and what it is currently playing - a function many audio media players/lists have (e.g lofi youtube streams and playlists).

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

// const audioTime = document.querySelector("#audio-time");
// console.log(audioTime);
// 
// function updateProgressBar() {
  // audioTime.textContent = audio.currentTime.toFixed(2);
  // const value = (audio.currentTime / audio.duration) * 100;
  // progressBar.style.width = value + "%";
// }

// As can seen above, I was going to add audio playtime, however it looked a bit out of place and awkward, plus users don't need to know how long they have left for the song if they're going to be studying or doing other things to relax

// STAR POSITION RANDOMISER ----

// This random number script was used to generate the star pixels position and size randomly which not only saves me time from writing each star indiviually, but the randomly generated positions really support the setting of space and stars have no set patterns (except for constellations). I found this script while looking through CSS Tricks and changed it so it would match the star settings (Which I originally got from watching 'Parallax Pixel Background Animation | HTML & CSS' by WebDevSHORTS on Youtube)

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

// I decided to also add a current time display for this webpage as an extra useful functions for users. As many users have only one display and want to avoid looking at other electronic devices, having the current time displayed on the webpage along with the media player would allow users to keep track and be aware of the time while studying and/or relaxing. 

const displayTime = document.querySelector(".display-time");

function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();