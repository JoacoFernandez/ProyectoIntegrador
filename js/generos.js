let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/genre";

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos.data);
        let lista = document.querySelector(".lista");
        let resultados = datos.data;

        resultados.forEach(function(result){
            lista.innerHTML += "<li class='cadagenero'>" + result.name + "</li>";
        })
    })
    .catch(function(error){
        console.log(error);
})