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
  document.body.scrollTop = 0; // para safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE and Opera
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