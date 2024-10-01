    let ataqueJugador;
    let ataqueEnemigo;
    let vidasJugador = 3;
    let vidasEnemigo = 3;
    const tipos = ['Fuego', 'Agua', 'Tierra'];
    
    window.addEventListener("load", iniciarJuego)
    
    function iniciarJuego() {
        selectionSeleccionarAtaque.style.display = `none`

        let selectionSeleccionarAtaque = document.getElementById("Selcionar-ataque")
        const btnMascota = document.getElementById('boton-mascota');
        const btnFuego = document.getElementById('boton-fuego');
        const btnAgua = document.getElementById('boton-agua');
        const btnTierra = document.getElementById('boton-tierra');
        const spanVidasJugador = document.getElementById('VidasJugador');
        const spanVidasEnemigo = document.getElementById('VidasEnemigo');
        let inputHipodoge = document.getElementById("Hipodoge");
        let inputCapipero = document.getElementById("Capipero");
        let inputPydos = document.getElementById("Pydos");
        let spanMascotaJugador = document.getElementById("mascotaJugador");
        let botonReiniciar = document.getElementById("reiniciar");
        let spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
        const sectionMensajes = document.getElementById('resultado');
        let selectionSeleccionarMascota = document.getElementById("selcionar-mascota")
    
        btnMascota.addEventListener('click', seleccionarMascotaJugador);
        btnFuego.addEventListener('click', () => ataque('Fuego'));
        btnAgua.addEventListener('click', () => ataque('Agua'));
        btnTierra.addEventListener('click', () => ataque('Tierra'));
        botonReiniciar.addEventListener("click", reiniciar);
    
        function seleccionarMascotaJugador() {            
            selectionSeleccionarAtaque.style.display = `flex`
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
            const nuevoAtaqueDelJugador = document.createElement("p")
            const nuevoAtaqueDelEnemigo = document.createElement("p")
            let notificacion = document.createElement("p")
            sectionMensajes.innerHTML = resultado
            /* AtaqueDelJugador.innerHTML = nuevoAtaqueDelJugador
            ataqueDelEnemigo.innerHTML = nuevoAtaqueDelEnemigo */

            /* const nuevoP = document.createElement('p');
            nuevoP.textContent = `Tu mascota atacó con ${ataqueJugador} y el enemigo con ${ataqueEnemigo}. ${resultado}`; */

            sectionMensajes.appendChild(notificacion)
            nuevoAtaqueDelJugador.appendChild(notificacion);
            nuevoAtaqueDelEnemigo.appendChild(notificacion);
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
    
    