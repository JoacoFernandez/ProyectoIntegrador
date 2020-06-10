let queryString = location.search;
console.log(queryString);

let searchParams = new URLSearchParams(queryString);
console.log(searchParams);

let type = searchParams.get('type');
console.log(type);

let id = searchParams.get('id');
console.log(id);

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/" + type + "/" + id;

let body = document.querySelector(".section");


if(type == "artist"){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        body.innerHTML += "<p> hola </p>";
        
    })
    .catch(function(error){
        console.log(error);
})
}else if(type == "album"){

}else if(type == "track"){

}else if(type == "genre"){
    
}