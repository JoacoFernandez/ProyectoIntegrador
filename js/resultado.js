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


//boton para subir arriba
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}