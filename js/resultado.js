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
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE and Opera
}


/*para el spinner no tocar*/
document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector(".loader").style.visibility = "visible"; 
  } else { 
      document.querySelector(".loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
}; 


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


let queryString = location.search;
console.log(queryString);

let queryStringObj = new URLSearchParams(queryString);
console.log(queryStringObj);  
let search = queryStringObj.get('search');
console.log(search);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/search/track?q=' + search;
console.log(url);

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(datos){
    console.log(datos);
    let lista = document.querySelector('.resultadoscanciones');
    let resultados = datos.data;

    resultados.forEach(function(resultado) {
      lista.innerHTML += '<li><a class="result" href="detalle.html?type=' + resultado.type + '&id=' + resultado.id + '">' + resultado.title + '</a></li>';
    });
    console.log(datos)
  })

  .catch(function(error) {
    return console.log(error);
})

let urlArtist = proxy + 'https://api.deezer.com/search/artist?q=' + search;

fetch(urlArtist)
  .then(function(response) {
    return response.json();
  })
  .then(function(datos){
    console.log(datos);
    let lista = document.querySelector('.resultadosartists');
    let resultados = datos.data;

    resultados.forEach(function(resultado) {
      lista.innerHTML += '<li><a class="result" href="detalle.html?type=' + resultado.type + '&id=' + resultado.id + '">' + resultado.name + '</a></li>';
    });
    console.log(datos)
  })

  .catch(function(error) {
    return console.log(error);
})

let urlAlbum = proxy + 'https://api.deezer.com/search/album?q=' + search;

fetch(urlAlbum)
  .then(function(response) {
    return response.json();
  })
  .then(function(datos){
    console.log(datos);
    let lista = document.querySelector('.resultadosalbums');
    let resultados = datos.data;

    resultados.forEach(function(resultado) {
      lista.innerHTML += '<li><a class="result" href="detalle.html?type=' + resultado.type + '&id=' + resultado.id + '">' + resultado.title + '</li>';
    });
    console.log(datos)
  })

  .catch(function(error) {
    return console.log(error);
})