const searchApi =searchApi =>{
    const inputValue = document.getElementById('searchField').value;
    const apiSearch = `https://api.lyrics.ovh/suggest/${inputValue}`;
    fetch(apiSearch)
    .then(res =>res.json())
    .then(data => console.log(data))
}