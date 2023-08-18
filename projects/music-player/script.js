let currentMusic = 0;

const music = document.querySelector('#audio');
const thumbnails = document.querySelectorAll('.thumbnail');

const trackRange = document.querySelector('.track-range');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const currentTimes = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-button');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

playBtn.addEventListener('click', () => {
   !playIcon.classList.contains('hidden') ? music.play() : music.pause();
   playIcon.classList.toggle('hidden');
   pauseIcon.classList.toggle('hidden');
});

const setMusic = (i) => {
   trackRange.value = 0;
   let song = songs[i];
   currentMusic = i;
   music.src = song.path;

   songName.textContent = song.name;
   artistName.textContent = song.artist;
   
   const [thumbnailBody, thumbnail] = thumbnails;
   thumbnailBody.src = song.cover;
   thumbnail.src = song.cover;

   currentTimes.textContent = '00:00';
   setTimeout(() => {
      trackRange.max = music.duration;
      musicDuration.textContent = formatTime(music.duration);
   }, 300);
}

setMusic(0);

const formatTime = (time) => {
   let min = Math.floor(time / 60);
   if (min < 10) min = `0${min}`;
   let sec = Math.floor(time % 60);
   if (sec < 10) sec = `0${sec}`;
   return `${min}:${sec}`;
}

setInterval(() => {
   trackRange.value = music.currentTime;
   currentTimes.textContent = formatTime(music.currentTime);
}, 500);

trackRange.addEventListener('change', () => {
   music.currentTime = trackRange.value;
});

const playMusic = () => {
   music.play();
   playIcon.classList.toggle('hidden');
   pauseIcon.classList.toggle('hidden');
}

nextBtn.addEventListener('click', () => {
   currentMusic >= songs.length - 1 ? currentMusic = 0 : currentMusic++;
   setMusic(currentMusic);
   playMusic();
});

prevBtn.addEventListener('click', () => {
   currentMusic <= 0 ? currentMusic = songs.length - 1 : currentMusic--;
   setMusic(currentMusic);
   playMusic();
});