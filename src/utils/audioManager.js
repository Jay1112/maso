import Music from '../assets/music.mp3';
let audio = null;

export function playAudio(source) {
  if (audio) {
    audio.pause();
  }

  audio = new Audio(Music);
  audio.play();
}

export function pauseAudio() {
  if (audio) {
    audio.pause();
  }
}