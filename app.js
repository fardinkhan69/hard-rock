const searchApi =searchApi =>{
    const inputValue = document.getElementById('searchField').value;
    const apiSearch = `https://api.lyrics.ovh/suggest/${inputValue}`;
    fetch(apiSearch)
    .then(res =>res.json())
    .then(data => getSong(data.data))
}

const getSong =songs=>{
   
    const songContainer = document.getElementById('songContainer');
    songContainer.innerHTML=''
    songs.forEach(song => {
        const songBox = document.createElement('div');
        songBox.className = 'single-result row align-items-center my-3 p-3';
        songBox.innerHTML= `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio src="${song.preview}" controls></audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success" onclick="getLyrics('${song.artist.name}','${song.title}')">Get Lyrics</button>
        </div>`;
        songContainer.appendChild(songBox)
    });
    
}

const getLyrics =(artist,title) =>{
   
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
    .then(data => singleLyric(data.lyrics)) 
}

const singleLyric = lyric =>{
    const singleLyricContainer = document.getElementById('singleLyricContainer');

    singleLyricContainer.innerText= lyric;
}