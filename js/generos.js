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
            lista.innerHTML += "<li class='cadagenero'><a href='detalle.html?type=" + result.type + "&id=" + result.id + "'><img src='" + result.picture_small +  "' class='foto' alt=''>" + " " + result.name + "</a></li>";
        })
    })
    .catch(function(error){
        console.log(error);
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