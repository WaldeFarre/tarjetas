function crearTarjetas(){
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");
    for(let i=1; i<=5;i++){
        contenido = contenido + "<div class='item'>"+i+"</div>";
        divTarjetas.innerHTML = contenido;
    }
    
}
function pintarTarjetas(){
    let contenido = "";
    let divTarjetas = document.getElementById("txtDesde");

    for(let i=1; i<=10;i++){
        contenido = contenido + "<div class='item'>"+i+"</div>";
        divTarjetas.innerHTML = contenido;
    }
}