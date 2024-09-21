function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    //Si pones al final de la funsión que deseas llamar los parentesis, inhabilitas el metodo de listener, ya que hará que se ejecute de una sea cargada la pagina.
}
function seleccionarMascotaJugador() {
    let mascotaSeleccionada = document.getElementById('Hipodoge').Checked
    if (mascotaSeleccionada = true){
        alert("Seleccionaste: ", mascotaSeleccionada, ".")   
    }else{
        alert("no has seleccionado mascota")
    }
}

/**Aca estamos usando el metodo addEvenListener con el atributo no de que haga click, si no que primeramente cargue
Esto permite que podamos crear una funsión que nos comenzará a ejecutar todo en el orden que deseamos sin la necesidad
de mover de lugar nuestro script en html**/
window.addEventListener("load", iniciarJuego)