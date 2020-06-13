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

let imagen = document.querySelector(".imagen");
let x = window.matchMedia("(max-width: 768px)");    ////

let search = searchParams.get('search');
console.log(search);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/search/?q=' + search;
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
            lista.innerHTML += '<li>' + resultado.title + '</li>' + resultado.cover;
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
