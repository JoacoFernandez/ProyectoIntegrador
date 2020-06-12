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