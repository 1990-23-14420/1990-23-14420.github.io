const $cerrar = document.getElementById("cerrar")
const $alerta = document.getElementById("alerta")
const $abrir =document.getElementById("abrir")
const $inicio =document.getElementById("inicio")


$abrir.addEventListener("click", function(){
    $alerta.classList.add('active');
});



$cerrar.addEventListener("click", cerrar)

function cerrar() 
{
     $alerta.style.display = "none" 
}

$abrir.addEventListener("click", abrir)

function abrir()
{
    $alerta.style.display = ""
}
