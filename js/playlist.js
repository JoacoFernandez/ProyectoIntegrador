window.onscroll = function() {myFunction()};
var header = document.querySelector('header');
var sticky = header.offsetTop;
mybutton = document.getElementById("myBtn");
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    mybutton.style.display = "block";
  } else {
    header.classList.remove("sticky");
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



var loginA = document.querySelector("#login a");
var loginSolo = document.querySelector("#login");
document.querySelector("#login form").addEventListener("submit",function(event){
  var nombre = document.querySelector("#nombre").value;
  localStorage.setItem("nombre", nombre);
})
console.log(localStorage.getItem("nombre"));

  if (localStorage.getItem("nombre") == "" || localStorage.getItem("null")) {
    localStorage.removeItem("nombre");
  } if (localStorage.getItem("nombre") == null) {
    document.querySelector(".saludo").style.display="none";
    document.querySelector("#playlist").style.display="none";
    let entrar = document.querySelector(".entrar");
    document.querySelector("#login a").addEventListener("click",function(){
      entrar.style.display="block";
    })
  } else {
    loginA.innerHTML="Logout";
    document.querySelector(".usuario").innerText += localStorage.getItem("nombre");
    document.querySelector("#login a").addEventListener("click",function(){
      localStorage.removeItem("nombre");
      window.location.href="index.html";
    })
}


let recuperoStorage = localStorage.getItem("playlist");
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistwrapper');
let player = document.querySelector('iframe');
let section = document.querySelector('.section');

if(recuperoStorage == null || recuperoStorage == "[]"){
    section.innerHTML += "<h2 class='vacio' > No hay canciones en tu playlist</h2>";
    let alerta = alert('En este momento tu playlist esta vacia');
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
                playlistWrapper.innerHTML += "<li class='cadatrack'><button href='#' class='borrar'>BORRAR</button><a href='detalle.html?type=" + track.type + "&id=" + track.id + "' class='links'>" + track.title + "</a><br><a href='detalle.html?type=" + track.artist.type + "&id=" + track.artist.id + "' class='linksartist'>" + track.artist.name + "</a>";
                
                let x = window.matchMedia("(width: 768px)");
                let y = window.matchMedia("(width: 1024px)");
                let z = window.matchMedia("(min-width: 1440px)");
                if(x.matches){
                    playlistWrapper.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=400&height=95&color=a1dfcf&layout=dark&size=medium&type=tracks&id=' + idtrack + '&app_id=1" width="400" height="90"></iframe>';
                } else if(y.matches) {
                    playlistWrapper.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=500&height=350&color=a1dfcf&layout=dark&size=medium&type=tracks&id=' + idtrack + '&app_id=1" width="500" height="90"></iframe>';
                } else if(z.matches) {
                    playlistWrapper.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=800&height=350&color=a1dfcf&layout=dark&size=medium&type=tracks&id=' + idtrack + '&app_id=1" width="800" height="90"></iframe>';
                } else {
                    playlistWrapper.innerHTML += "<iframe class='player' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=200&height=200&color=007FEB&layout=dark&size=medium&type=tracks&id=" + idtrack + "'&app_id=1' width='200' height='200'></iframe>";
                }


                var botones = document.querySelectorAll("button.borrar")
                for (var i = 0; i < botones.length; i++) {
                  botones[i].onclick = function() {

                    let indiceArray = playlist.indexOf(track.id);
                    if (playlist.indexOf(track.id) == -1) {
                      } else {
                        let indiceArray = playlist.indexOf(track.id);
                        playlist.splice(indiceArray,1)
                      }


                      playlist.splice(indiceArray, 1);
                      let playlistParaStorage = JSON.stringify(playlist);
                      location.reload();
                      console.log(playlist);
                      localStorage.setItem('playlist', playlistParaStorage);
                      console.log(localStorage);

                  }

                }
                
                
            })
            .catch(function(error){
                console.log(error);
        })
    }
}