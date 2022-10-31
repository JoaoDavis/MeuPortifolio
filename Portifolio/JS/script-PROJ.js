menuLateral = document.getElementById("menu-lateral");
menuAtivado = document.getElementById("menuAtivado");
menuIcon = document.getElementById("click-menu");
mais = document.getElementsByClassName("area-mais");
imagemProjeto = document.getElementsByClassName("imagens-projetos");
projetoImagem = document.getElementsByClassName("projetos-links");


function iconMenu(){
    menuAtivado.style.display = "grid";
    menuLateral.style.display = "none"; 
    projetoImagem[1].style.marginLeft = "60px";
    projetoImagem[2].style.marginLeft = "140px";
    projetoImagem[3].style.marginLeft = "200px";
    projetoImagem[4].style.marginLeft = "260px";
}

function iconFechar(){
    menuAtivado.style.display = "none";
    menuLateral.style.display = "grid";
    projetoImagem[1].style.marginLeft = "120px";
    projetoImagem[2].style.marginLeft = "260px";
    projetoImagem[3].style.marginLeft = "360px";
    projetoImagem[4].style.marginLeft = "470px";
}