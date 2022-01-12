let solicitudh4 = document.querySelector("#solicitud");
let conectadosh4 =document.querySelector("#conectados");
let usuarioname = document.querySelector("#usuarioname");


function accept(id){
    let element= document.querySelector(id);
    element.remove();
    solicitudh4.innerText--;
    conectadosh4.innerText++;
}
function ignore(id){
    let element= document.querySelector(id);
    element.remove();
    solicitudh4.innerText--;
}
function editar(){
    usuarioname.innerText = "Gabriela";
}
