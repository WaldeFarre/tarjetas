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
    let divTarjetas = document.getElementById("divTarjetas");
    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);
 
    for(let i=desde; i<=hasta; i=i+salto){
        contenido = contenido + "<div class='item'>"+i+"</div>";
    }
    divTarjetas.innerHTML = contenido;
}
 
 
