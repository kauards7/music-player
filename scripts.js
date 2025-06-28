const musicPlayer = document.getElementById("music-player");
const musicAlbum = document.getElementById("music-album");
const musicTitle = document.getElementById("music-title");
const banda = document.getElementById("banda");

const musickBackButton = document.getElementById("music-back");
const musicplayButton = document.getElementById("play-button");
const musicPauseButton = document.getElementById("music-pause");
const musicNextButton = document.getElementById("music-next");

const progressBar = document.getElementById("progress-bar");
const timeStart = document.getElementById("time-start");
const timeEnd = document.getElementById("time-end");

const volumeBar = document.getElementById("volume-bar");

const playlists = {
  Nirvana: [
    {
      caminhoDaMusica: "./music/smells like teen spirit.mpeg",
      tituloDaMusica: "Smells Like Teen Spirit",
      banda: "Nirvana",
      album: "./assets/nirvana-album.jpg"
    },
    {
      caminhoDaMusica: "./music/come as you are.mpeg",
      tituloDaMusica: "Come As You Are",
      banda: "Nirvana",
      album: "./assets/nirvana-album.jpg"
    }
  ],
  ACDC: [
    {
      caminhoDaMusica: "./music/black in black.mpeg",
      tituloDaMusica: "Black in Black",
      banda: "ACDC",
      album: "./assets/black-in-black.jpg"
    },
    {
      caminhoDaMusica: "./music/highway to hell.mpeg",
      tituloDaMusica: "Highway To Hell",
      banda: "ACDC",
      album: "./assets/highway to hell.jpg"
    }
  ],
  Guns: [
    {
      caminhoDaMusica: "./music/don´t cry.mpeg",
      tituloDaMusica: "Don´t Cry",
      banda: "Guns",
      album: "./assets/dont-cry.jpg"
    },
    {
      caminhoDaMusica: "./music/sweet child o mine.mpeg",
      tituloDaMusica: "Sweet Child O' Mine",
      banda: "Guns",
      album: "./assets/Guns_N'_Roses_-_Sweet_Child_o'_Mine.png"
    }
  ]
};

const todas = [
  ...playlists.Nirvana,
  ...playlists.ACDC,
  ...playlists.Guns
];


let playlistAtual = todas;
let musicAtual = 0;


function getMusic(indexMusic) {
  if (indexMusic < 0 || indexMusic >= playlistAtual.length) return; 

  const musica = playlistAtual[indexMusic];
  musicPlayer.src = musica.caminhoDaMusica;
  musicAlbum.src = musica.album;
  musicTitle.innerText = musica.tituloDaMusica;
  banda.innerText = musica.banda;

  musicAtual = indexMusic;
}


function carregarPlaylist(nome) {
  if (nome === "Todas") {
    playlistAtual = todas;
  } else {
    playlistAtual = playlists[nome] || todas;
  }
  musicAtual = 0;
  getMusic(musicAtual);
  musicPlayer.play();
  musicPauseButton.style.display = "inline-block";
  musicplayButton.style.display = "none";
}


musicplayButton.addEventListener("click", function () {
  musicPlayer.play();
  musicPauseButton.style.display = "inline-block";
  musicplayButton.style.display = "none";
});

musicPauseButton.addEventListener("click", function () {
  musicPlayer.pause();
  musicplayButton.style.display = "inline-block";
  musicPauseButton.style.display = "none";
});


function musicNext() {
  if (musicAtual + 1 < playlistAtual.length) {
    getMusic(musicAtual + 1);
    musicPlayer.play();
    musicPauseButton.style.display = "inline-block";
    musicplayButton.style.display = "none";
  }
}

function musickBack() {
  if (musicAtual - 1 >= 0) {
    getMusic(musicAtual - 1);
    musicPlayer.play();
    musicPauseButton.style.display = "inline-block";
    musicplayButton.style.display = "none";
  }
}

musicNextButton.addEventListener("click", musicNext);
musickBackButton.addEventListener("click", musickBack);


musicPlayer.addEventListener("timeupdate", function () {
  const porcentagem = (musicPlayer.currentTime / musicPlayer.duration) * 100 || 0;
  progressBar.value = porcentagem;

  timeStart.innerText = formatarTempo(musicPlayer.currentTime);
  timeEnd.innerText = formatarTempo(musicPlayer.duration);

  progressBar.style.background = `linear-gradient(to right, #7c3aed 0%, #7c3aed ${porcentagem}%, var(--text-color-opacity) ${porcentagem}%, var(--text-color-opacity) 100%)`;
});


function formatarTempo(segundos) {
  if (isNaN(segundos)) return "00:00";

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);

  return `${String(minutos).padStart(2, "0")}:${String(segundosRestantes).padStart(2, "0")}`;
}


progressBar.addEventListener("input", function () {
  const novoTempo = (progressBar.value / 100) * musicPlayer.duration;
  musicPlayer.currentTime = novoTempo;
});


window.onload = () => {
  const volumeBar = document.getElementById("volume-bar");
  const progressBar = document.getElementById("progress-bar");

  
  function atualizarBarraVolume() {
    const value = volumeBar.value;
    volumeBar.style.background = `linear-gradient(to right, #7c3aed 0%, #7c3aed ${value}%, #ddd ${value}%, #ddd 100%)`;
  }

  
  volumeBar.addEventListener("input", () => {
    musicPlayer.volume = volumeBar.value / 100;
    atualizarBarraVolume();
  });

  
  atualizarBarraVolume();
  musicPlayer.volume = volumeBar.value / 100;

  progressBar.value = 0;
  progressBar.style.background = `linear-gradient(to right, #7c3aed 0%, #7c3aed 0%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 100%)`;

  
  carregarPlaylist("Todas");
};
