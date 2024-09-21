const songs = [
  {
    name: "Vinnane Vinnane",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713445333/musicplayer/tfhaymqbjil94kyzlpro.mp3",
    artists: "Armaan Malik ",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713445586/musicplayer/r3ecyiejfyt5q1gskkj0.jpg"
  },
  {
    name: "Ninnila Ninnila",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713445998/musicplayer/romhvskfcbzlbznvjjab.mp3",
    artists: "Armaan Malik",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713445586/musicplayer/r3ecyiejfyt5q1gskkj0.jpg"
  },
  {
    name: "Allasani Vaari",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713446595/musicplayer/w1h2gatagz0bupnczjup.mp3",
    artists: "Armaan Malik",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713445586/musicplayer/r3ecyiejfyt5q1gskkj0.jpg"
  },
  {
    name: "Jab Tak",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713448067/musicplayer/l8bb9uteq9eur8vmu3yr.mp3",
    artists: "Armaan Malik",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713447835/musicplayer/m3lfelawgfoqaq8occlp.jpg"
  },
  {
    name: "Ism Title Song",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713377178/musicplayer/uxxlmzky6vvao9qbx59v.mp3",
    artists: "Anurag Kulkarni & Puri Jagannath",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713377157/musicplayer/zlxoppfifcnb9ss7ndc9.jpg"
  },
  
  {
    name: "Tum Se",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713075376/musicplayer/dzgvygslqcykbc8bx1oh.mp3",
    artists: "Sachin-Jigar",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713075137/musicplayer/ytfxgxtmw6qtrkdkvdlg.png"
  },
  {
    name: "Ismart Title Shankar",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713077164/musicplayer/xzt3xcntrogjdwyistnt.mp3",
    artists: "Anurag Kulkarni & Puri Jagannath",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713075540/musicplayer/eqtroi0mz3j0mj3ftjlj.jpg"
  },
  {
    name: "O My Friend",
    link: "https://res.cloudinary.com/dow34udbv/video/upload/v1713374525/musicplayer/v0jqzsymrpmukbohreq5.mp3",
    artists: "Karthik",
    image: "https://res.cloudinary.com/dow34udbv/image/upload/v1713374639/musicplayer/plyvbvlhnv89kewehabx.jpg"
  },
];

var progress = document.querySelector("#progress");
var song = document.querySelector("#song");
var playBtn = document.querySelector("#play i");
var index = 0;
var img = document.querySelector(".img img");

var title = document.querySelector("#title");
var thumb = document.querySelector("#thumb");
var artist = document.querySelector("#musician");

var start = document.querySelector("#start");
var end = document.querySelector("#end");

song.src = songs[index].link;

title.innerHTML = songs[index].name;
artist.innerHTML = songs[index].artists;
thumb.src = songs[index].image;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;

  setInterval(() => {
    var min = Math.floor(song.duration / 60);
    var sec = Math.floor(song.duration % 60);

    var curMin = Math.floor(song.currentTime / 60);
    var curSec = Math.floor(song.currentTime % 60);

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }
    
    start.innerHTML = curMin + ":" + curSec;
    end.innerHTML = min + ":" + sec;
  }, 1000);
};

function playPause() {
  if (playBtn.classList.contains("bx-pause")) {
    song.pause();
    playBtn.classList.remove("bx-pause");
    playBtn.classList.add("bx-play");
    img.classList.remove("play");
  } else {
    song.play();
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
    img.classList.add("play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    if (song.currentTime == song.duration) {
      nextPlay();
    }
  }, 1000);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  playBtn.classList.remove("bx-play");
  playBtn.classList.add("bx-pause");
  img.classList.add("play");
};

function nextPlay() {
  index = index + 1;
  if (index > songs.length) {
    index = 0;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  }
}

function prevPlay() {
  index = index - 1;
  if (index < 0) {
    index = songs.length;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  }
}