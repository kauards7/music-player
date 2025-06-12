const musicPlayer = document.getElementById("music-player")
const musicAlbum = document.getElementById("music-album")
const musicTitle = document.getElementById("music-title")
const banda = document.getElementById("banda")

const musickBack = document.getElementById("music-back")
const playButton = document.getElementById("play-button")
const musicPause = document.getElementById ("music-pause")
const musicNext = document.getElementById("music-next")

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

function getMusic(){
    musicPlayer.src = musicas[0].caminhoDaMusica
    musicAlbum.src = musicas[0].album
    musicTitle.innerText = musicas[0].tituloDaMusica
    banda.innerText = musicas[0].banda
}

getMusic() 

playButton.addEventListener("click", function () {
    musicPlayer.play()
    playButton.style.display = "none"
    musicPause.style.display = "inline-block"
    
})

musicPause.addEventListener("click", function () {
    musicPlayer.pause(); 
    musicPause.style.display = "none"
    playButton.style.display = "inline-block"
});

musicNext.addEventListener("click", function() {
    
})