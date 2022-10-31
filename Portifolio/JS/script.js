menuLateral = document.getElementById("menu-lateral");
menuAtivado = document.getElementById("menuAtivado");
menuIcon = document.getElementById("click-menu");
circuloPrincipal = document.getElementsByClassName("circulo");
circulosPequeno = document.getElementById("area-circulos-home");
textoInicial = document.getElementById("area-texto-inicial");
barraHome = document.getElementById("barra-cinza-home");

function iconMenu(){
    menuAtivado.style.display = "grid";
    menuAtivado.style.zIndex = "10000000000000000000";
    menuLateral.style.display = "none";
    circulosPequeno.style.padding = "0 0 0 60px";

    if(innerWidth <= 1440) {
        textoInicial.style.marginLeft = "-900px";
        menuAtivado.style.width = "300px";
        barraHome.style.marginLeft = "90px";
    }

    if(innerWidth <= 1024) {
        textoInicial.style.marginLeft = "-30px";
    }
    
}

function iconFechar(){
    menuAtivado.style.display = "none";
    menuLateral.style.display = "grid";
    circulosPequeno.style.padding = "0";

    if(innerWidth <= 1440) {
        textoInicial.style.marginLeft = "-980px";
    }
    
    if(innerWidth <= 1024) {
        textoInicial.style.marginLeft = "-30px";
    }
}

