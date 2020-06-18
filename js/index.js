window.onscroll = function() {myFunction()};
var header = document.querySelector('.header');
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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


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
        for(let i=0; i<10; i++){
            listaartistas.innerHTML += "<li class='item'><a href='detalle.html?type=" + resultados[i].type + "&id=" +  resultados[i].id + "class='foto' alt=''>" + resultados[i].name + "</a></li>";
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
        for(let i=0; i<10; i++){
            listacanciones.innerHTML += "<li class='item'><a href='detalle.html?type=" + resultados[i].type + "&id=" + resultados[i].id + "'>" + resultados[i].title + "</a></li>";
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
        for(let i=0; i<10; i++){
            listaalbums.innerHTML += "<li class='item'><a href='detalle.html?type=" + resultados[i].type + "&id=" + resultados[i].id + "'>" + resultados[i].title + "</a></li>";
        }     
    })
    .catch(function(error){
        console.log(error);
})

document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector("body").style.visibility = "hidden"; 
        document.querySelector(".loader").style.visibility = "visible"; 
    } else { 
        document.querySelector(".loader").style.display = "none"; 
        document.querySelector("body").style.visibility = "visible"; 
    } 
  };