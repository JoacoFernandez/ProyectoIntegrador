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

let queryString = location.search;
console.log(queryString);

let searchParams = new URLSearchParams(queryString);
console.log(searchParams);

let type = searchParams.get('type');
console.log(type);

let id = searchParams.get('id');
console.log(id);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/" + type + "/" + id;

let body = document.querySelector(".section");
let imagen = document.querySelector(".imagen");
let x = window.matchMedia("(max-width: 768px)");         
let info = document.querySelector(".informacion");

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        switch(type){
            case ('artist'):
                if(x.matches){
                    imagen.innerHTML += '<img src="' + datos.picture_medium +  '" class="foto" alt="">';
                } else {
                    imagen.innerHTML += '<img src="' + datos.picture_big +  '" class="foto" alt="">';
                }
                info.innerHTML += "<h2> Nombre: " + datos.name + "</h2>";
                info.innerHTML += "<h2> Albums: " + datos.nb_album + "</h2>";
                info.innerHTML += "<h2> Fans: " + datos.nb_fan + "</h2>";

                let toptracks = proxy + datos.tracklist;
                fetch(toptracks)
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(infotracks){
                        console.log(infotracks);
                        info.innerHTML += "<h2>Top Canciones:</h2>";
                        info.innerHTML += "<ol class='lista'></ol>";
                        let lista = document.querySelector(".lista");
                        let itemslista = infotracks.data;
                        for(let i=0; i<5; i++){
                            lista.innerHTML += "<li><a href='detalle.html?type=" + itemslista[i].type + "&id=" + itemslista[i].id + "' class='links'>" + itemslista[i].title + "</a></li>";
                        }
                    })
                    .catch(function(error){
                    console.log(error);
                })
            break;

            case ('album'):
                if(x.matches){
                    imagen.innerHTML += '<img src="' + datos.cover_medium +  '" class="foto" alt="">';
                } else {
                    imagen.innerHTML += '<img src="' + datos.cover_big +  '" class="foto" alt="">';
                }
                info.innerHTML += "<h2>Nombre: " + datos.title + "</h2>";
                info.innerHTML += "<h2><a href='detalle.html?type=" + datos.artist.type + "&id=" + datos.artist.id + "' class='links'>" + "Artista: " + datos.artist.name + "</a></h2>";
                info.innerHTML += "<h2>Fecha de salida: " + datos.release_date + "</h2>";
                let tracks = proxy + datos.tracklist;
                fetch(tracks)
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(tracks){
                        console.log(tracks);
                        info.innerHTML += "<h2>Canciones:</h2>";
                        info.innerHTML += "<ol class='lista'></ol>";
                        let lista = document.querySelector(".lista");
                        let itemslista = tracks.data;
                        itemslista.forEach(function(result){
                            lista.innerHTML += "<li><a href='detalle.html?type=" + result.type + "&id=" + result.id + "' class='links'>" + result.title + "</a></li>";
                        })
                    
                        
                    })
                    .catch(function(error){
                        console.log(error);
                })
            break;

            case ('track'):
                if(x.matches){
                    imagen.innerHTML += '<img src="' + datos.album.cover_medium +  '" class="foto" alt="">';
                } else {
                    imagen.innerHTML += '<img src="' + datos.album.cover_big +  '" class="foto" alt="">';
                }
                info.innerHTML += "<h2>Nombre: " + datos.title + "</h2>";
                info.innerHTML += "<h2><a href='detalle.html?type=" + datos.artist.type + "&id=" + datos.artist.id + "' class='links'>" + "Artista: " + datos.artist.name + "</a></h2>";
                info.innerHTML += "<h2><a href='detalle.html?type=" + datos.album.type + "&id=" + datos.album.id + "' class='links'>" + "Album: " + datos.album.title + "</a></h2>";
                info.innerHTML += "<h2> Fecha de salida: " + datos.release_date + "</h2>";
                info.innerHTML += "<h2>Duracion: " + datos.duration + " segundos</h2>";
                info.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + id + '&app_id=1" width="300" height="90"></iframe>';
                info.innerHTML += "<a href='#' class='boton'> Agregar a la playlist </a>";
        
                let recuperoStorage = localStorage.getItem('playlist');
                if(recuperoStorage == null){
                    playlist = [];
                } else {
                    playlist = JSON.parse(recuperoStorage);
                }
        
                let boton = document.querySelector('.boton');
                if(playlist.includes(id)){
                    boton.innerHTML = "Quitar de la playlist";
                }
        
                boton.addEventListener('click', function(e){
                    e.preventDefault();
        
                    if(playlist.includes(id)){
                        let indiceArray = playlist.indexOf(id);
                        playlist.splice(indiceArray, 1);
                        boton.innerHTML = "Agregar a la playlist";
                        console.log(playlist);
                    } else{
                        playlist.push(id);
                        boton.innerHTML = "Quitar de la playlist";
                    }
                    
                    let playlistParaStorage = JSON.stringify(playlist);
                    localStorage.setItem('playlist', playlistParaStorage);
                    console.log(localStorage);
                })
            break;

            case ('genre'):
                if(x.matches){
                    imagen.innerHTML += '<img src="' + datos.picture_medium +  '" class="foto" alt="">';
                } else {
                    imagen.innerHTML += '<img src="' + datos.picture_big +  '" class="foto" alt="">';
                }
                info.innerHTML += "<h2>Nombre: " + datos.name + "</h2>";
                info.innerHTML += "<h2>Artistas: </h2>";
                info.innerHTML += "<ul></ul>";
                let listaartistas = document.querySelector('ul');
                fetch(url + '/artists')
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(genreartists){
                        console.log(genreartists);
                        let nose = genreartists.data;
                        for(let i=0; i<10; i++){
                            listaartistas.innerHTML += "<li><a class='links' href='detalle.html?type=" + nose[i].type + "&id=" + nose[i].id + "'>" + nose[i].name + "</a></li>";
                        }
                    })
                    .catch(function(error){
                        console.log(error);
                    })
            break;
        }
    })