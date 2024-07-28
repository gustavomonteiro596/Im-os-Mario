const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")




function cliqueinobatao(){
   form.style.left = "50%"
   form.style.transform = "translatex(-50%)"
   mascara.style.visibility = "visible"
}

function esconderform(){
    form.style.left = "-290px"
    form.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"
}

