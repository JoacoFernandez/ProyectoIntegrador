let queryString = location.search;
console.log(queryString);

let searchParams = new URLSearchParams(queryString);
console.log(searchParams);

let search = searchParams.get('search');
console.log(search);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/search?q=" + search;
console.log(url);

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultados');
        let resultados = datos.data;
        console.log(resultados);

        resultados.forEach(function(resultado){
            lista.innerHTML += '<li>' + resultado.title + '</li>'
        })
    })
    .catch(function(error){
        console.log(error);
    })

// let lista = document.querySelector('.resultados');
// let body = document.querySelector('section');
// while(lista == ""){
//     body.innerHTML += '<h1> Esperando </h1>';
// }
