window.onscroll = function() {myFunction()};
var header = document.querySelector('.header');
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let recuperoStorage = localStorage.getItem("playlist");
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistwrapper');
let player = document.querySelector('iframe');
let section = document.querySelector('.section');

if(recuperoStorage == null || recuperoStorage.length == '[]'){
    section.innerHTML += "<h2> No hay canciones en tu playlist</h2>";

} else {
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
                let x = window.matchMedia("(min-width: 768px)");
                if(x.matches){
                    playlistWrapper.innerHTML += "<li class='cadatrack'><a href='detalle.html?type=" + track.type + "&id=" + track.id + "' class='links'> Cancion: " + track.title + "</a><a href='detalle.html?type=" + track.artist.type + "&id=" + track.artist.id + "' class='links'>  - Artista: " + track.artist.name + "</a><a href='detalle.html?type=" + track.album.type + "&id=" + track.album.id + "' class='links'>  - Album: " + track.album.title + "</a></li> <iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='" + idtrack + "'&app_id=1' width='500' height='90'></iframe>";
                } else {
                    playlistWrapper.innerHTML += "<li class='cadatrack'><a href='detalle.html?type=" + track.type + "&id=" + track.id + "' class='links'>" + track.title + "</a><br><a href='detalle.html?type=" + track.artist.type + "&id=" + track.artist.id + "' class='links'>" + track.artist.name + "</a><a href='detalle.html?type=" + track.album.type + "&id=" + track.album.id + "' class='links'>  - " + track.album.title + "</a></li> <iframe scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=007FEB&layout=dark&size=medium&type=tracks&id=" + idtrack + "'&app_id=1' width='200' height='200'></iframe>";
                }
                
            })
            .catch(function(error){
                console.log(error);
        })
    }
}