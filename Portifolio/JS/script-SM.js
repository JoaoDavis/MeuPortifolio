menuLateral = document.getElementById("menu-lateral");
menuAtivado = document.getElementById("menuAtivado");
menuIcon = document.getElementById("click-menu");
minhaFoto = document.getElementById("area-sobre");
minhaFoto2 = document.getElementById("img-sobre");

function iconMenu(){
    menuAtivado.style.display = "grid";
    menuLateral.style.display = "none";       
    minhaFoto.style.marginLeft = "100px";

    if(innerWidth <= 1440) {
        minhaFoto2.style.width = "320px";
        minhaFoto2.style.marginLeft = "-60px";
        menuAtivado.style.width = "300px";
    }
}

function iconFechar(){
    menuAtivado.style.display = "none";
    menuLateral.style.display = "grid";
    minhaFoto.style.marginLeft = "300px";

    if(innerWidth <= 1440) {       
        minhaFoto.style.marginLeft = "100px";
    }
}