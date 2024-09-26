/**Aca estamos usando el metodo addEvenListener con el atributo no de que haga click, si no que primeramente cargue
Esto permite que podamos crear una funsión que nos comenzará a ejecutar todo en el orden que deseamos sin la necesidad
de mover de lugar nuestro script en html**/
let ataqueJugador
let ataqueEnemigo
window.addEventListener("load", iniciarJuego)

//FUNCIONES
//Inicio de funsion iniciar juego
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    //Si pones al final de la funsión que deseas llamar los parentesis, inhabilitas el metodo de listener, ya que hará que se ejecute de una sea cargada la pagina.
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let ataqueSeleccionado = document.getElementById(`AtaqueSeleccionado`)
    let ataqueEnemigoSeleccionado = document.getElementById(`ataqueEnemingo`)

    //Inicio funsiones de ataques del jugador
    function ataqueFuego(){
        ataqueJugador = `Fuego`
        ataqueSeleccionado.innerHTML = `Fuego`
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua() {
        ataqueJugador = `Agua`
        ataqueSeleccionado.innerHTML = `Agua`
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra() {
        ataqueJugador = `Tierra`
        ataqueSeleccionado.innerHTML = `Tierra`
        ataqueAleatorioEnemigo()
    }
    //Fin de funsiones de ataques del jugador

    //Inicio funsiones de ataque del enemigo
    function ataqueAleatorioEnemigo() {
        //1 = Hipodoge(agua), 2 = Capipepo(tierra) y 3 = Pydos(fuego)
        let ataqueAleatorio = aleatorio(1, 3)

        if (ataqueAleatorio == 1) {
            ataqueEnemigo = `Agua`
            ataqueEnemigoSeleccionado.innerHTML = `Agua`
        }else if(ataqueAleatorio == 2){
            ataqueEnemigo = `Tierra`
            ataqueEnemigoSeleccionado.innerHTML = `Tierra`
        }else{
            ataqueEnemigo = `Fuego`
            ataqueEnemigoSeleccionado.innerHTML = `Fuego`
        }
    }
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

}
//Fin de funsion iniciar juego


//Inicio de funsion seleccionar mascota de jugador
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

//Inicio funsion mascota de enemigo
    function seleccionarMascotaEnemigo() {
        let mascotaAleatorio = aleatorio(1, 3)
        let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

        if (mascotaAleatorio == 1) {
            spanMascotaEnemigo.innerHTML = "Hipodoge"
        } else if (mascotaAleatorio == 2) {
            spanMascotaEnemigo.innerHTML = "Capipepo"
        } else {
            spanMascotaEnemigo.innerHTML = "Pydos"
        }
    }    
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
//Fin funsion mascota de enemigo

//Juego en front
    seleccionarMascotaEnemigo()

}
//Fin de funsion seleccionar mascota jugador