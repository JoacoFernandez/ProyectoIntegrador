let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/chart/";

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos.artists.data);
        let listaartistas = document.querySelector(".artistas");
        let resultados = datos.artists.data;
        for(let i=0; i<5; i++){
            listaartistas.innerHTML += "<li>" + resultados[i].name + "</li>";
        }     
    })
    .catch(function(error){
        console.log(error);
})

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos.tracks.data);
        let listacanciones = document.querySelector(".canciones");
        let resultados = datos.tracks.data;
        for(let i=0; i<5; i++){
            listacanciones.innerHTML += "<li>" + resultados[i].title + "</li>";
        }     
    })
    .catch(function(error){
        console.log(error);
})

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos.albums.data);
        let listaalbums = document.querySelector(".albums");
        let resultados = datos.albums.data;
        for(let i=0; i<5; i++){
            listaalbums.innerHTML += "<li>" + resultados[i].title + "</li>";
        }     
    })
    .catch(function(error){
        console.log(error);
})