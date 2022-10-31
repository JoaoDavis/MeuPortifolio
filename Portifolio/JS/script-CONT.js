menuLateral = document.getElementById("menu-lateral");
menuAtivado = document.getElementById("menuAtivado");
menuIcon = document.getElementById("click-menu");


function iconMenu(){
    menuAtivado.style.display = "grid";
    menuLateral.style.display = "none"; 
}

function iconFechar(){
    menuAtivado.style.display = "none";
    menuLateral.style.display = "grid";
}