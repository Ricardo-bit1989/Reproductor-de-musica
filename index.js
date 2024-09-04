

console.log("datoString")

axios.get('https://leonardoapi.onrender.com/songs')
  .then(function (response) {
    // handle success
    console.log(response.data.songs);

    response.data.songs.map((song) => {



        const container = document.
        getElementById("track-list")

        const div = document.createElement("div")
        div.setAttribute("class", "musica")

        div.innerHTML = `
            <img 
            src="${song.path.front}" 
            alt="">
            <h3 class="font-bold">>${song.title}</h3>
            <p class="opasity-60">${song.author}
                
                  
        `


        container.appendChild(div)
        
    })


})
  

// const image = document.querySelector("img");
// const titulo = document.getElementById("titulo");
// const Artista = document.getElementById("Artista");

// const progressContainer = document.getElementById("progressBar");
// const progress = document.getElementById("progress");

// const tiempoActual = document.getElementById("tiempoActual");
// const duracion = document.getElementById("tiempoDuracion");

// const music = document.querySelector("audio");
// const prevBtn = document.getElementById("prev");
// const playBtn = document.getElementById("play");
// const nextBtn = document.getElementById("next");

// /* Playlist */

// const songs = [
//     {
//         name: 'song1',
//         displayName: 'Coney Island',
//         artista: 'Taylor Swift & The national',
//     },
//     {
//         name: 'song2',
//         displayName: 'Blinding Lights',
//         artista: 'The Weeknd',
//     },
//     {
//         name: 'song3',
//         displayName: 'Dreamer',
//         artista: 'Laufey',
//     },
//  ];

//  // Para verificar si esta reproduciendo musica
//  let isPlaying = false;

// // Funcion play
//  function playSong() {
//      isPlaying = true;
//      playBtn.setAttribute('name','pause');
//      playBtn.setAttribute('titulo','pause');
//      music.play();
// }

// // Funcion pause
// function pauseSong() {
//     isPlaying = false;
//     playBtn.setAttribute('name','play');
//     playBtn.setAttribute('titulo','play');
//     music.pause();
// }

// // Al hacer click en el boton play activa play o pause. dependiendo si esta reproduciendo o no
// playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// //funcion leer canciones
// function loadSong(song) {
//     titulo.textContent = song.displayName;
//     artista.textContent = song.artista;
//     music.src = `musica/${song.name}.mp3`;
//     image.src = `imagenes/${song.name}.jpg`;
// }

// //cancion actual

// let songIndex = 0;

// //anterior cancion

// function prevSong() {
//     songIndex--;
//     if (songIndex < 0) {
//         songIndex = songs.legth - 1;        
//     }
    
//     loadSong(songs[songIndex]);
//     playSong();
// }

// //funcion sguiente cancion

// function nextSong() {
//     songIndex++;
//     if (songIndex > songs.legth - 1) {
//         songIndex = 0;      
//     }
    
//     loadSong(songs[songIndex]);
//     playSong();
// }

// //al cargar las canciones se leera la primera cancion
// loadSong(songs[songIndex]);
 
// //actualizar la barra de progreso y el tiempo de la cancion

// function updateProgressBar(e) {
//     if (isPlaying) {
//         const { duration, currentTime} = e.srcElement;
//         const progressPercent = (currenTime / duration) *100;
//         progress.style.width = `${progressPercent}%`; //esta linea camnia la propiedad css de progress
//         const durationMinutes = Math.floor(duration / 60); // calcula la duracion total en minutps
//         let durationSeconds = Math.floor(duration % 60);

//         if (durationSeconds < 10) {
//             durationSeconds = `0${durationSeconds}`
            
//         }

//         if (durationSeconds) {
//             duration.textContent = `${durationMinutes} : ${durationSeconds}`;
            
//         }

//         const currentMinutes = Math.floor(currentTime / 60); // Calcula la duracion total del recorrido de la cancion
//         let currentSeconds = Math.floor(currentTime % 60);

//         if (currentSeconds < 10) {
//             currentSeconds = `0${durationSeconds}`
            
//         };

//        if (currentSeconds) {
//            tiempoActual.textContent = `${currentMinutes} : ${durationSeconds}`;
//        };
//     }
    
// }

// //Mostrar la barra de progreso

// function setProgressBar(e) {
//     const width = this.ClientWidth;
//     const clickX = e.offsetX;
//     const { duration } = music;
//     music.currentTime = (clickX / width) * duration;
// }

// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);
// music.addEventListener('ended', nextSong);
// music.addEventListener('timeupdate', updateProgressBar);
// progressContainer.addEventListener('click', setProgressBar);


