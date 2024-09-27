/**Aca estamos usando el metodo addEvenListener con el atributo no de que haga click, si no que primeramente cargue
Esto permite que podamos crear una funsión que nos comenzará a ejecutar todo en el orden que deseamos sin la necesidad
de mover de lugar nuestro script en html**/
/*
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
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

    //Inicio funsiones de ataques del jugador
    function ataqueFuego(){
        ataqueJugador = 'Fuego'
        ataqueAleatorioEnemigo()
        
    }
    function ataqueAgua() {
        ataqueJugador = 'Agua'
        ataqueAleatorioEnemigo()
        
    }
    function ataqueTierra() {
        ataqueJugador = 'Tierra'
        ataqueAleatorioEnemigo()
        
    }
    //Fin de funsiones de ataques del jugador

    //Inicio funsiones de ataque del enemigo
    function ataqueAleatorioEnemigo() {
        //1 = Hipodoge(agua), 2 = Capipepo(tierra) y 3 = Pydos(fuego)
        let ataqueAleatorio = aleatorio(1, 3)

        if (ataqueAleatorio == 1) {
            ataqueEnemigo = 'Fuego'
        }else if(ataqueAleatorio == 2){
            ataqueEnemigo = 'Agua'
        } else {
            ataqueEnemigo = 'Tierra'
        }
        nuevoParrafoDeLucha()
        combate()
    }

    //FUNCION ALERTARIO
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //Inicio funsion de combate
    function combate() {
        spanVidasJugador = document.getElementById("VidasJugador")
        spanVidasEnemigo = document.getElementById("VidasEnemigo")        
        
        if(ataqueEnemigo == ataqueJugador) {
            nuevoParrafoDeLucha("EMPATE")
        } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            nuevoParrafoDeLucha("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
            nuevoParrafoDeLucha("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            nuevoParrafoDeLucha("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            nuevoParrafoDeLucha("PERDISTE")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
        revisarVidas()
    }
    //Fin funsion de combate
    //Revisar vidas
    function revisarVidas(){
        if (vidasEnemigo == 0){
            nuevoParrafoFinal("Ganaste 😁")
        }else if(vidasEnemigo == 0)
            nuevoParrafoFinal("Perdiste 😥")
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
   /* } else {
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
    
    function nuevoParrafoDeLucha(resultado) {
        let seccionMensajes = document.getElementById("mensajes")//Variable que usaremos para manipular el Dom
        let newP = document.createElement("p")//Variable que usaremos para crear el nuevo texto dentro de la variables que manipula el Dom

        newP.innerHTML = "Tu mascota ataco con " + ataqueJugador + " Y tu enemigo ataco con: " + ataqueEnemigo + " " + resultado + "."
        seccionMensajes.appendChild(newP)
        /**Expicación de funsión. 
         * 1. Se da selccion a la etiqueta en nuestro html en la que queremos que se ingrese nuestro nuevo parrafo.
         * 2. Se establece la variable en la que usaremos el método de crear una etiqueta, que este caso es "p"
         * 3. Usamos el metodo innerHTML para modificar el contenido de la etiqueta p creada en el paso anterior
         * 4. Indicamos con el medoto appenchild que ingrese lo que hemos creado en newP.innerHTML y así poderlo ver en el Dom
        */
    /*}
    //Fin funsión agregar parrafor a document que diga los ataque usados
    function nuevoParrafoFinal(resultadoFinal) {
        let seccionMensajes = document.getElementById("mensajes")//Variable que usaremos para manipular el Dom
        let newP = document.createElement("p")//Variable que usaremos para crear el nuevo texto dentro de la variables que manipula el Dom

        newP.innerHTML = "El juego termino: " + resultadoFinal + "."
        seccionMensajes.appendChild(newP)
    }
    

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
//Fin funsion mascota de enemigo

//Juego en front
    seleccionarMascotaEnemigo()*/


    let ataqueJugador;
    let ataqueEnemigo;
    let vidasJugador = 3;
    let vidasEnemigo = 3;
    const tipos = ['Fuego', 'Agua', 'Tierra'];
    
    window.addEventListener("load", iniciarJuego)
    
    function iniciarJuego() {
        let selectionSeleccionarAtaque = document.getElementById("Selcionar ataque")
        selectionSeleccionarAtaque.style.display = `none`


        const btnMascota = document.getElementById('boton-mascota');
        const btnFuego = document.getElementById('boton-fuego');
        const btnAgua = document.getElementById('boton-agua');
        const btnTierra = document.getElementById('boton-tierra');
        const spanVidasJugador = document.getElementById('VidasJugador');
        const spanVidasEnemigo = document.getElementById('VidasEnemigo');
        const sectionMensajes = document.getElementById('mensajes');
        let inputHipodoge = document.getElementById("Hipodoge");
        let inputCapipero = document.getElementById("Capipero");
        let inputPydos = document.getElementById("Pydos");
        let spanMascotaJugador = document.getElementById("mascotaJugador");
        let botonReiniciar = document.getElementById("reiniciar");
    
        btnMascota.addEventListener('click', seleccionarMascotaJugador);
        btnFuego.addEventListener('click', () => ataque('Fuego'));
        btnAgua.addEventListener('click', () => ataque('Agua'));
        btnTierra.addEventListener('click', () => ataque('Tierra'));
        botonReiniciar.addEventListener("click", reiniciar);
    
        function seleccionarMascotaJugador() {
            let selectionSeleccionarAtaque = document.getElementById("Selcionar ataque")
            selectionSeleccionarAtaque.style.display = `block`

            let selectionSeleccionarMascota = document.getElementById("selcionar-mascota")
            selectionSeleccionarMascota.style.display = `none`

            if (inputHipodoge.checked) {
                spanMascotaJugador.innerHTML = "Hipodoge";
            } else if (inputCapipero.checked) {
                spanMascotaJugador.innerHTML = `Capipepo`;
            } else if (inputPydos.checked) {
                spanMascotaJugador.innerHTML = `Pydos`;
            } else {
                alert("Selecciona una Mascota");
            }
            seleccionarMascotaEnemigo();
        }

        function seleccionarMascotaEnemigo() {
            let mascotaAleatorio = aleatorio(1, 3);
            let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
    
            if (mascotaAleatorio == 1) {
                spanMascotaEnemigo.innerHTML = "Hipodoge";
            } else if (mascotaAleatorio == 2) {
                spanMascotaEnemigo.innerHTML = "Capipepo";
            } else {
                spanMascotaEnemigo.innerHTML = "Pydos";
            }
        }
    
        function ataque(ataqueJugador) {
            const ataqueAleatorio = tipos[Math.floor(Math.random() * tipos.length)];
            ataqueEnemigo = ataqueAleatorio;
    
            combatir(ataqueJugador, ataqueEnemigo);
        }
    
        function combatir(ataqueJugador, ataqueEnemigo) {
            let resultado;
            if (ataqueJugador === ataqueEnemigo) {
                resultado = 'EMPATE';
            } else if (
                (ataqueJugador === 'Fuego' && ataqueEnemigo === 'Tierra') ||
                (ataqueJugador === 'Agua' && ataqueEnemigo === 'Fuego') ||
                (ataqueJugador === 'Tierra' && ataqueEnemigo === 'Agua')
            ) {
                resultado = 'GANASTE';
                vidasEnemigo--;
            } else {
                resultado = 'PERDISTE';
                vidasJugador--;
            }
    
            spanVidasJugador.textContent = vidasJugador;
            spanVidasEnemigo.textContent = vidasEnemigo;
    
            nuevoParrafo(resultado);
            verificarFinJuego();
        }
    
        function nuevoParrafo(resultado) {
            const nuevoP = document.createElement('p');
            nuevoP.textContent = `Tu mascota atacó con ${ataqueJugador} y el enemigo con ${ataqueEnemigo}. ${resultado}`;
            sectionMensajes.appendChild(nuevoP);
        }
    
        function verificarFinJuego() {
            if (vidasJugador === 0) {
                nuevoParrafo('¡Has perdido!');
                deshabilitarBotones();
            } else if (vidasEnemigo === 0) {
                nuevoParrafo('¡Has ganado!');
                deshabilitarBotones();
            }
        }
    
        function deshabilitarBotones() {
            btnFuego.disabled = true;
            btnAgua.disabled = true;
            btnTierra.disabled = true;
        }
    
        function reiniciar() {
            location.reload();
        }
    
        function aleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    
    