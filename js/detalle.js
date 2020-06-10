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
        imagen.innerHTML += '<img src="' + datos.picture +  '" class="foto" alt="">';

        let info = document.querySelector(".informacion");
        info.innerHTML += "<h2> Nombre: " + datos.name + "</h2>";
        info.innerHTML += "<h2> Fans : " + datos.nb_fan + "</h2>";

        let toptracks = proxy + datos.tracklist;
        fetch(toptracks)
            .then(function(response){
                return response.json();
            })
            .then(function(infotracks){
                console.log(infotracks);
                info.innerHTML += "<h2>Top Canciones:</h2>";
                let ul = "<ul class='lista'></ul>"
                let lista = document.querySelector(".lista");
                let itemslista = infotracks.data;
                for(let i=0; i<5; i++){
                    lista.innerHTML += "<li>" + itemslista.title + "</li>"; //REVISAR!!!!!!!!!!!!!!!!!!
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
        body.innerHTML += "<p> hola </p>";
        
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
        body.innerHTML += "<p> hola </p>";
        
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
        body.innerHTML += "<p> hola </p>";
        
    })
    .catch(function(error){
        console.log(error);
})

}