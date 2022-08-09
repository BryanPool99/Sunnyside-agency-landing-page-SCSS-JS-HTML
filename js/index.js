console.log("EMPEZANDO");
const Iconmenu=document.querySelector(".btn");
const ListMenu=document.querySelector(".navbar");
const triangulo=document.querySelector(".triangulo");
Iconmenu.addEventListener("click",()=>{
    console.log("estas presioando el icono de menu");
    ListMenu.classList.toggle("oculto");
    triangulo.classList.toggle("active");
})
