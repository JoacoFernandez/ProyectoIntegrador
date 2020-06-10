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
        if(window < 768){
            imagen.innerHTML += '<img src="' + datos.picture_medium +  '" class="foto" alt="">';
        } else if (window < 1024){
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
                    lista.innerHTML += "<li><a href='detalle.html?type=" + itemslista[i].type + "&id=" + itemslista[i].id + "'>" + itemslista[i].title + "</a></li>";
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
        imagen.innerHTML += '<img src="' + datos.cover_medium +  '" class="foto" alt="">';

        let info = document.querySelector(".informacion");
        info.innerHTML += "<h2>Nombre: " + datos.title + "</h2>";
        info.innerHTML += "<h2><a href='detalle.html?type=" + datos.artist.type + "&id=" + datos.artist.id + "'>" + "Artista: " + datos.artist.name + "</a></h2>";
        info.innerHTML += "<h2>Fecha de salida: " + datos.release_date + "</h2>";
        
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
        imagen.innerHTML += '<img src="' + datos.album.cover_medium +  '" class="foto" alt="">';

        let info = document.querySelector(".informacion");
        info.innerHTML += "<h2>Nombre: " + datos.title + "</h2>";
        info.innerHTML += "<h2><a href='detalle.html?type=" + datos.artist.type + "&id=" + datos.artist.id + "'>" + "Artista: " + datos.artist.name + "</a></h2>";
        info.innerHTML += "<h2><a href='detalle.html?type=" + datos.album.type + "&id=" + datos.album.id + "'>" + "Album: " + datos.album.title + "</a></h2>";
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
        imagen.innerHTML += '<img src="' + datos.picture_medium +  '" class="foto" alt="">';

        let info = document.querySelector(".informacion");
        info.innerHTML += "<h2>Nombre: " + datos.name + "</h2>";
    })
    .catch(function(error){
        console.log(error);
})
}