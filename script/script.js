    const contenedorTarjetas =document.getElementById("contenedorTarjetas")
    
    let mokepones = []
    let ataqueJugador;
    let ataqueEnemigo;
    let opciondeMokepones;
    let vidasJugador = 3;
    let vidasEnemigo = 3;
    const tipos = ['Fuego', 'Agua', 'Tierra'];

    class mokepon{
        constructor(nombre, imagen, vida){
            this.nombre = nombre
            this.imagen = imagen
            this.vida = vida
            this.ataques = []
        }
    }

    let Hipodoge = new mokepon("Hipodoge", '/assets/mokepons_mokepon_hipodoge_attack.png', 5)
    let Capipepo = new mokepon("Capipepo", '/assets/mokepons_mokepon_capipepo_attack.png', 5)
    let Pydos = new mokepon("Pydos", '/assets/mokepons_mokepon_ratigueya_attack.png', 5)
    
    mokepones.push(Hipodoge, Pydos, Capipepo)
    Hipodoge.ataques.push(
        {nombre: '💧', id:'boton-agua'},
        {nombre: '💧', id:'boton-agua'},
        {nombre: '💧', id:'boton-agua'},
        {nombre: '🔥', id:'boton-fuego'},
        {nombre: '🌱', id:'boton-tierra'}

    )
    Capipepo.ataques.push(
        {nombre: '🌱', id:'boton-tierra'},
        {nombre: '🌱', id:'boton-tierra'},
        {nombre: '🌱', id:'boton-tierra'},
        {nombre: '💧', id:'boton-agua'},
        {nombre: '🔥', id:'boton-fuego'}

    )
    Pydos.ataques.push(
        {nombre: '🔥', id:'boton-fuego'},
        {nombre: '🔥', id:'boton-fuego'},
        {nombre: '🔥', id:'boton-fuego'},
        {nombre: '💧', id:'boton-agua'},
        {nombre: '🌱', id:'boton-tierra'}

    )

    
    window.addEventListener("load", iniciarJuego)
    
    mokepones.forEach(mokepon => {
        opciondeMokepones = `
            <section class=${mokepon.nombre} id=${mokepon.nombre}>
                    <input type="radio" name="mascota" id=${mokepon.nombre}>
                    <label class="mascota" for=${mokepon.nombre}>
                        <p>${mokepon.nombre}</p>
                        <img class=${mokepon.nombre} src=${mokepon.imagen} for=${mokepon.nombre}>
                    </label>
            </section>
        `
        contenedorTarjetas.innerHTML = opciondeMokepones    
    });
    
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
            } else if (inputCapipepo.checked) {
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
                resultado = 'Empate ';
            } else if (
                (ataqueJugador === 'Fuego' && ataqueEnemigo === 'Tierra') ||
                (ataqueJugador === 'Agua' && ataqueEnemigo === 'Fuego') ||
                (ataqueJugador === 'Tierra' && ataqueEnemigo === 'Agua')
            ) {
                resultado = 'Ganaste ';
                vidasEnemigo--;
            } else {
                resultado = 'Perdiste';
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
                nuevoParrafo('¡Has Perdido');
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
    
    