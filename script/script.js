function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    //Si pones al final de la funsión que deseas llamar los parentesis, inhabilitas el metodo de listener, ya que hará que se ejecute de una sea cargada la pagina.
}
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipero = document.getElementById("Capipero")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascotaJugador")

    //.checked nos permite validar que nuestra etiqueta tipo input/radio este seleccionada o no.
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipero.checked) {
        spanMascotaJugador.innerHTML = `Capipepo`
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = `Pydos`
        /*Inner.HTML ha sido el método que nos permitio interactuar directamente con nuestro archivo HTML, en el cual podemos
        ahora Traer, modificar o eliminar contenido de una etiqueta*/
    } else {
        alert("Selecciona una Mascota")
    }

    seleccionarMascotaEnemigo()


    function seleccionarMascotaEnemigo() {
        let ataqueAleatorio = aleatorio(1, 3)
        let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

        if (ataqueAleatorio == 1) {
            spanMascotaEnemigo.innerHTML = "Hipodoge"
        } else if (ataqueAleatorio == 2) {
            spanMascotaEnemigo.innerHTML = "Capipepo"
        } else {
            spanMascotaEnemigo.innerHTML = "Pydos"
        }
    }
    
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}


/**Aca estamos usando el metodo addEvenListener con el atributo no de que haga click, si no que primeramente cargue
Esto permite que podamos crear una funsión que nos comenzará a ejecutar todo en el orden que deseamos sin la necesidad
de mover de lugar nuestro script en html**/
window.addEventListener("load", iniciarJuego)