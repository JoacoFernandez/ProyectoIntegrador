var userName = document.getElementById('userName').addEventListener('submit', store());
var userPw = document.getElementById('userPw').addEventListener('submit', check());

// storing input from register-form
function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are logged in.');
    }else {
        alert('ERROR.');
    }
}

//usar submit- para el formulario, add event listener, el evento es submit, ahi dispara 
//la funcion store + la linea 1 y 2 adentro de la funcion store
//check otro event listener en el log in
//al primero un event listener de store y otro a check
//validar para que no este vacio
//2 opciones- 1 html atributos para validar que no este vacio-2 javascript check si value.length es mayor a 0
//user un objeto que tiene name y password- user.name + user.password
//cuando guarde un tema, atraer a ese user y agregarle un posicion playlist de un array con los ids que haya
//