const playBtn = document.querySelector('.video__player-btn');
const playerPlayBtn = document.querySelector('.duration__img');
const video = document.getElementById('player');
const durationControl = document.getElementById('durationlevel');
const soundControl = document.getElementById('miclevel');
const soundBtn = document.getElementById('soundBtn');
const dynamicBtn = document.getElementById('dynamic');
const playButtons = document.querySelectorAll('.play');
let intervalId;
let soundLevel;

window.addEventListener('load', () => {
  video.addEventListener('click', playStop);

  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
  }

  durationControl.min = 0;
  durationControl.value = 0;
  durationControl.max = video.duration;
  durationControl.addEventListener('input', setVideoDuration);

  soundControl.min = 0;
  soundControl.max = 10;
  soundControl.value = soundControl.max;
  soundControl.addEventListener('input', changeSoundVolume);

  dynamicBtn.addEventListener('click', soundOff);

  video.addEventListener('ended', () => {
    playBtn.classList.toggle('video__player-btn--active');
    playerPlayBtn.classList.toggle('active');
    video.currentTime = 0;
  })
})


function playStop() {
  playBtn.classList.toggle('video__player-btn--active');
  playerPlayBtn.classList.toggle('active');
  if (video.paused) {
    video.play();
    intervalId = setInterval(updateDuration, 1000 / 60);
  } else {
    clearInterval(intervalId);
    video.pause();
  }
}

function setVideoDuration() {
  video.currentTime = durationControl.value;
  updateDuration();
}

function updateDuration() {
  durationControl.value = video.currentTime;
  const step = video.duration / 100; // 261 / 100 = 2.61
  const percent = video.currentTime / step;
  durationControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${percent}%, #626262 ${percent}%)`;
}

function changeSoundVolume() {
  video.volume = soundControl.value / 10;
  if (video.volume === 0) {
    soundBtn.classList.add('active');
  } else {
    soundBtn.classList.remove('active');
  }
}

function soundOff() {
  if (video.volume === 0) {
    video.volume = soundLevel;
    soundControl.value = soundLevel * 10;
    soundBtn.classList.remove('active');
  } else {
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
    soundBtn.classList.add('active');
  }
}