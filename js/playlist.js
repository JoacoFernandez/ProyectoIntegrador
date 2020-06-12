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
                playlistWrapper.innerHTML += "<li class='cadatrack'><a href='detalle.html?type=" + track.type + "&id=" + track.id + "' class='links'>" + track.title + "</a><br><a href='detalle.html?type=" + track.artist.type + "&id=" + track.artist.id + "' class='linksartist'>" + track.artist.name + "</a>";
                let x = window.matchMedia("(width: 768px)");
                let y = window.matchMedia("(width: 1024px)");
                let z = window.matchMedia("(min-width: 1440px)");
                if(x.matches){
                    playlistWrapper.innerHTML += "<iframe class='player' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='" + idtrack + "'&app_id=1' width='400' height='90'></iframe>";
                } else if(y.matches) {
                    playlistWrapper.innerHTML += "<iframe class='player' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='" + idtrack + "'&app_id=1' width='500' height='90'></iframe>";
                } else if(z.matches) {
                    playlistWrapper.innerHTML += "<iframe class='player' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='" + idtrack + "'&app_id=1' width='800' height='90'></iframe>";
                } else {
                    playlistWrapper.innerHTML += "<iframe class='player' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=007FEB&layout=dark&size=medium&type=tracks&id=" + idtrack + "'&app_id=1' width='200' height='200'></iframe>";
                }
                
            })
            .catch(function(error){
                console.log(error);
        })
    }
}