const image = document.querySelector("img");
const titulo = document.getElementById("titulo");
const Artista = document.getElementById("Artista");

const progressContainer = document.getElementById("progressBar");
const progress = document.getElementById("progress");

const tiempoActual = document.getElementById("tiempoActual");
const duracion = document.getElementById("tiempoDuracion");

const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

/* Playlist */

const songs = [
    {
        name: 'song1',
        displayName: 'Island Dream',
        artista: 'Taylor Swift',
    }

    {
        name: 'song2',
        displayName: 'Scrapbook',
        artista: 'The Weeknd',
    }

    {
        name: 'song1',
        displayName: 'Tropic Fuse',
        artista: 'Laufey',
    },
 ];

 // Para verificar si esta reproduciendo musica
 let isPlaying = false;

// Funcion play
 function playSong() {
     isPlaying = true;
     playBtn.setAttribute('name','pause');
     playBtn.setAttribute('titulo','pause');
     music.play();
}

// Funcion pause
function pauseSong() {
    isPlaying = false;
    playBtn.setAttribute('name','play');
    playBtn.setAttribute('titulo','play');
    music.pause();
}

// Al hacer click en el boton play activa play o pause. dependiendo si esta reproduciendo o no
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));



