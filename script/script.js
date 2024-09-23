function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    //Si pones al final de la funsión que deseas llamar los parentesis, inhabilitas el metodo de listener, ya que hará que se ejecute de una sea cargada la pagina.
}
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipero = document.getElementById("Capipero")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")

    if (inputHipodoge.checked){
        alert("Seleccionaste a Hipodoge")
    }else if(inputCapipero.checked){
        alert("Seleccionaste a Capipero")
    }else if(inputRatigueya.checked){
        alert("Seleccionaste a Ratigueya")
    }else if(inputLangostelvis.checked){
        alert("Seleccionaste a Langostelvis")
    }else if(inputTucapalma.checked){
        alert("Seleccionaste a Tucapalma")
    }else if(inputPydos.checked){
        alert("Seleccionaste a Pydos")
    }else{
        alert("Selecciona una Mascota")
    }
}

/**Aca estamos usando el metodo addEvenListener con el atributo no de que haga click, si no que primeramente cargue
Esto permite que podamos crear una funsión que nos comenzará a ejecutar todo en el orden que deseamos sin la necesidad
de mover de lugar nuestro script en html**/
window.addEventListener("load", iniciarJuego)