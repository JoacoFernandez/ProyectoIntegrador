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


if(type == "artist"){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let imagen = document.querySelector(".imagen");
        let x = window.matchMedia("(max-width: 768px)");
        if(x.matches){
            imagen.innerHTML += '<img src="' + datos.picture_medium +  '" class="foto" alt="">';
        } else {
            imagen.innerHTML += '<img src="' + datos.picture_big +  '" class="foto" alt="">';
        }
        

        let info = document.querySelector(".informacion");
        info.innerHTML += "<h2> Nombre: " + datos.name + "</h2>";
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
    })
    .catch(function(error){
        console.log(error);
})
}else if(type == "album"){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let imagen = document.querySelector(".imagen");
        
        let x = window.matchMedia("(max-width: 768px)");
        if(x.matches){
            imagen.innerHTML += '<img src="' + datos.cover_medium +  '" class="foto" alt="">';
        } else {
            imagen.innerHTML += '<img src="' + datos.cover_big +  '" class="foto" alt="">';
        }

        let info = document.querySelector(".informacion");
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
    })
    .catch(function(error){
        console.log(error);
})

}else if(type == "track"){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let imagen = document.querySelector(".imagen");
        let x = window.matchMedia("(max-width: 768px)");
        if(x.matches){
            imagen.innerHTML += '<img src="' + datos.album.cover_medium +  '" class="foto" alt="">';
        } else {
            imagen.innerHTML += '<img src="' + datos.album.cover_big +  '" class="foto" alt="">';
        }

        let info = document.querySelector(".informacion");
        info.innerHTML += "<h2>Nombre: " + datos.title + "</h2>";
        info.innerHTML += "<h2><a href='detalle.html?type=" + datos.artist.type + "&id=" + datos.artist.id + "' class='links'>" + "Artista: " + datos.artist.name + "</a></h2>";
        info.innerHTML += "<h2><a href='detalle.html?type=" + datos.album.type + "&id=" + datos.album.id + "' class='links'>" + "Album: " + datos.album.title + "</a></h2>";
        info.innerHTML += "<h2>Duracion: " + datos.duration + " segundos</h2>";

    })
    .catch(function(error){
        console.log(error);
})

}else if(type == "genre"){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let imagen = document.querySelector(".imagen");
        let x = window.matchMedia("(max-width: 768px)");
        if(x.matches){
            imagen.innerHTML += '<img src="' + datos.picture_medium +  '" class="foto" alt="">';
        } else {
            imagen.innerHTML += '<img src="' + datos.picture_big +  '" class="foto" alt="">';
        }

        let info = document.querySelector(".informacion");
        info.innerHTML += "<h2>Nombre: " + datos.name + "</h2>";
    })
    .catch(function(error){
        console.log(error);
})
}