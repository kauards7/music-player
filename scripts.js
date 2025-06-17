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