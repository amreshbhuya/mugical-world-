const songs = [
    {
        title: "RamLeela-Ang Laga De",
        artist: "Aditi Paul",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Ang Laga De.mp3"
    },
    {
        title: "RamLeela-Ishqyaun Dhishyaun",
        artist: "Aditya Narayan",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Ishqyaun Dhishyaun.mp3"
    },
    {
        title: "RamLeela-Dhoop",
        artist: "Shreya Ghoshal",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Dhoop.mp3"
    },
    {
        title: "RamLeela-Laal Ishq",
        artist: "Arijit Singh",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Laal Ishq.mp3"
    },
    {
        title: "RamLeela-Lahu Munh Lag Gaya",
        artist: "Shail Hada",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Lahu Munh Lag Gaya.mp3"
    },
    {
        title: "RamLeela-Mor Bani Thanghat Kare",
        artist: "Aditi PaulOsman Mir",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Mor Bani Thanghat Kare.mp3"
    },
    {
        title: "RamLeela-Nagada Sang Dhol",
        artist: "Shreya GhoshalOsman Mir",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Nagada Sang Dhol.mp3"
    },
    {
        title: "RamLeela-Poore Chand",
        artist: "Shail Hada",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Poore Chand.mp3"
    },
    {
        title: "RamLeela-Ram Chahe Leela",
        artist: "Bhoomi Trivedi",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Ram Chahe Leela.mp3"
    },
    {
        title: "RamLeela-Tattad Tattad",
        artist: "Aditya Narayan",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Tattad Tattad.mp3"
    },
    {
        title: "RamLeela-sun rha hai na tu female",
        artist: "Tulsi Kumar",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\sun rha hai na tu female.mp3"
    },
    {
        title: "RamLeela-Piya aaye na",
        artist: "Tulsi Kumar",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Piya aaye na.mp3"
    }

    
];

let currentSongIndex = 0;
let isPlaying = false;

const audio = new Audio(songs[currentSongIndex].file);
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const playlist = document.getElementById("playlist");
const searchInput = document.getElementById("search");
const volumeControl = document.getElementById("volume");
const playlistList = document.getElementById("playlist-list");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const x =document.querySelector("#x");


function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    cover.src = song.cover;
    audio.src = song.file;
}

function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.innerHTML = "<button id='pause'><i class='fas fa-pause'></i></button>";
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = "<button id='play'><i class='fas fa-play'></i></button>";
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function updatePlaylist() {
    const allItems = playlist.querySelectorAll("li");
    allItems.forEach((item) => item.classList.remove("active"));
    allItems[currentSongIndex].classList.add("active");
}

function displaySongs(filteredSongs) {
    playlist.innerHTML = "";
    filteredSongs.forEach((song, index) => {
        const songItem = document.createElement("li");
        songItem.innerText = `${song.title} - ${song.artist}`;
        songItem.setAttribute("data-index", index);
        if (index === currentSongIndex) songItem.classList.add("active");
        playlist.appendChild(songItem);
    });
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

playlist.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
        currentSongIndex = parseInt(e.target.getAttribute("data-index"));
        loadSong(songs[currentSongIndex]);
        playSong();
        updatePlaylist();
    }
});

searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredSongs = songs.filter((song) => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
    displaySongs(filteredSongs);
});

volumeControl.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});

playlistList.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
        const playlistName = e.target.getAttribute("data-playlist");
        const filteredSongs = playlistName === "favorites" ? songs.filter(song => song.favorite) : songs;
        displaySongs(filteredSongs);
        document.querySelectorAll("#playlist-list li").forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
    }
});

shuffleBtn.addEventListener("click", () => {
    songs.sort(() => Math.random() - 0.5);
    currentSongIndex = 0;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
});

repeatBtn.addEventListener("click", () => {
    audio.loop = !audio.loop;
    repeatBtn.classList.toggle("active", audio.loop);
});

displaySongs(songs);
loadSong(songs[currentSongIndex]);
updatePlaylist();
const addToFavoritesBtn = document.getElementById("addToFavorites");

// Function to toggle favorite status of a song
function toggleFavorite() {
    const currentSong = songs[currentSongIndex];
    currentSong.favorite = !currentSong.favorite;
    // Update button text and icon based on favorite status
    addToFavoritesBtn.innerHTML = `<i class="fas fa-heart${currentSong.favorite ? " active" : ""}"></i> ${currentSong.favorite ? "" : ""}`;
    
    // Toggle the "active" class
    addToFavoritesBtn.classList.toggle("active", currentSong.favorite);
}

// Add event listener for the "Add to Favorites" button
addToFavoritesBtn.addEventListener("click", toggleFavorite);
