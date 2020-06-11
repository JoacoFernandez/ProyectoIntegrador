let recuperoStorage = localStorage.getItem("playlist");
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistwrapper');
let player = document.querySelector('iframe');

playlist.forEach(function(idtrack){
    mostrarTrack(idtrack);
})

function mostrarTrack(idtrack){
    let proxy = "https://cors-anywhere.herokuapp.com/";
    let url = proxy + "https://api.deezer.com/track/" + idtrack;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(track){
            console.log(track);
            playlistWrapper.innerHTML += "<li class='cadatrack'><a href='detalle.html?type=" + track.type + "&id=" + track.id + "' class='links'> Cancion: " + track.title + "</a><a href='detalle.html?type=" + track.artist.type + "&id=" + track.artist.id + "' class='links'>  - Artista: " + track.artist.name + "</a><a href='detalle.html?type=" + track.album.type + "&id=" + track.album.id + "' class='links'>  - Album: " + track.album.title + "</a></li> <iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='" + idtrack + "'&app_id=1' width='500' height='90'></iframe>";
        })
        .catch(function(error){
            console.log(error);
    })
}