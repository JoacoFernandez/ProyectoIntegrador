window.onscroll = function() {myFunction()};
var header = document.querySelector('header');
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
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
    document.querySelector(".usuario").innerText = localStorage.getItem("nombre");
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
        for(let i=0; i<5; i++){
            listaartistas.innerHTML += "<li class='item'><a href='detalle.html?type=" + resultados[i].type + "&id=" +  resultados[i].id + "'><img src='" + resultados[i].picture_small +  "' class='foto' alt=''>" + resultados[i].name + "</a></li>";
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
            listacanciones.innerHTML += "<li class='item'><a href='detalle.html?type=" + resultados[i].type + "&id=" + resultados[i].id + "'>" + "<img src='" + " " + resultados[i].cover_small +  "' class='foto' alt=''> " + resultados[i].title + "</a></li>";
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
            listaalbums.innerHTML += "<li class='item'><a href='detalle.html?type=" + resultados[i].type + "&id=" + resultados[i].id + "'><img src='" + resultados[i].cover_small +  "' class='foto' alt=''>" + resultados[i].title + "</a></li>";
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