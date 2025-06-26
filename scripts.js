const musicPlayer = document.getElementById("music-player")
const musicAlbum = document.getElementById("music-album")
const musicTitle = document.getElementById("music-title")
const banda = document.getElementById("banda")

const musickBackButton = document.getElementById("music-back")
const musicplayButton = document.getElementById("play-button")
const musicPauseButton = document.getElementById("music-pause")
const musicNextButton = document.getElementById("music-next")

const progressBar = document.getElementById("progress-bar")
const timeStart = document.getElementById("time-start")
const timeEnd = document.getElementById("time-end")

const volumeBar = document.getElementById("volume-bar");

const musicas =  [
    {
        caminhoDaMusica: "./music/m1.mp3",
        tituloDaMusica: "smells Like Teen Spirit", 
        banda: "Nirvana",
        album: "./assets/music-img.png"
    } , 
    {
        caminhoDaMusica: "./music/m2.mp3",
        tituloDaMusica: "Black in Black", 
        banda: "ACDC",
        album: "./assets/music-img.png" 
    }, 

    {
        caminhoDaMusica: "./music/m3.mp3",
        tituloDaMusica: "Don´t Cry", 
        banda: "Guns",
        album: "./assets/music-img.png" 
    }
]

var musicAtual = 0

function getMusic(indexMusic){
    musicPlayer.src = musicas[indexMusic].caminhoDaMusica
    musicAlbum.src = musicas[indexMusic].album
    musicTitle.innerText = musicas[indexMusic].tituloDaMusica
    banda.innerText = musicas[indexMusic].banda

    musicAtual = indexMusic
}

getMusic(musicAtual) 

musicplayButton.addEventListener("click", function () {
    musicPlayer.play()
    musicPauseButton.style.display = "inline-block"
    musicplayButton.style.display = "none"
    progressBar.style.background = `linear-gradient(to right, #7c3aed 0%, #7c3aed 0%, var(--text-color-opacity) 0%, var(--text-color-opacity) 100%)`
    progressBar.value = 0;

    
})

musicPauseButton.addEventListener("click", function () {
    musicPlayer.pause(); 
    musicplayButton.style.display = "inline-block"
    musicPauseButton.style.display = "none"
});

function musicNext() {
    getMusic(musicAtual + 1)

    musicPlayer.play()

}

musicNextButton.addEventListener("click", function() {
  musicNext()
  
  
})

function musickBack() {
    getMusic(musicAtual - 1)

    musicPlayer.play()

}

musickBackButton.addEventListener("click", function() {
  musickBack()
  
})

musicPlayer.addEventListener("timeupdate", function () {
   
    const porcentagem = (musicPlayer.currentTime / musicPlayer.duration) * 100
    progressBar.value = porcentagem || 0

    
    timeStart.innerText = formatarTempo(musicPlayer.currentTime)
    timeEnd.innerText = formatarTempo(musicPlayer.duration)
})

function formatarTempo(segundos) {
    if (isNaN(segundos)) return "00:00"
    
    const minutos = Math.floor(segundos / 60)
    const segundosRestantes = Math.floor(segundos % 60)
    
    return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`
}

progressBar.addEventListener("input", function () {
    const novoTempo = (progressBar.value / 100) * musicPlayer.duration
    musicPlayer.currentTime = novoTempo
})

musicPlayer.addEventListener("timeupdate", function () {
    const porcentagem = (musicPlayer.currentTime / musicPlayer.duration) * 100 || 0;
    progressBar.value = porcentagem;

    timeStart.innerText = formatarTempo(musicPlayer.currentTime);
    timeEnd.innerText = formatarTempo(musicPlayer.duration);

    if (!isNaN(musicPlayer.duration)) {
        progressBar.style.background = `linear-gradient(to right, #7c3aed 0%, #7c3aed ${porcentagem}%, var(--text-color-opacity) ${porcentagem}%, var(--text-color-opacity) 100%)`;
    }
});


window.onload = () => {
    progressBar.value = 0;
    progressBar.style.background = `linear-gradient(to right, #7c3aed 0%, #7c3aed 0%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 100%)`;

    volumeBar.style.background = `linear-gradient(to right, #7c3aed 0%, #7c3aed ${volumeBar.value}%, #ddd ${volumeBar.value}%, #ddd 100%)`;
    musicPlayer.volume = volumeBar.value / 100;
}; 

  musicPlayer.volume = volumeBar.value / 100;

  volumeBar.addEventListener("input", () => {
    musicPlayer.volume = volumeBar.value / 100;
  });



