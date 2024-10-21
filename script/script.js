const selectionSeleccionarAtaque = document.getElementById("Selcionar-ataque")
const btnMascota = document.getElementById('boton-mascota');
const spanVidasJugador = document.getElementById('VidasJugador');
const spanVidasEnemigo = document.getElementById('VidasEnemigo');
const botonesDeAtaque = document.getElementById('botonesDeAtaque')


const spanMascotaJugador = document.getElementById("mascotaJugador");
const botonReiniciar = document.getElementById("reiniciar");
const spanMascotaEnemigo = document.getElementById("mascotaEnemigo");
const sectionMensajes = document.getElementById('resultado');
const selectionSeleccionarMascota = document.getElementById("selcionar-mascota")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let botones = []
let mokepones = []
let ataqueEnemigo = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let opciondeMokepones
let inputCapipepo
let inputPydos
let inputHipodoge
let ataquesMokeponEnemigo
let mascotaJugador
let opciondeAtaques
let btnFuego
let ataqueJugador = []
let btnAgua
let btnTierra
let vidasJugador = 3
let vidasEnemigo = 3

class mokepon {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let Hipodoge = new mokepon('Hipodoge', '/assets/mokepons_mokepon_hipodoge_attack.png', 5)
let Capipepo = new mokepon('Capipepo', '/assets/mokepons_mokepon_capipepo_attack.png', 5)
let Pydos = new mokepon('Pydos', '/assets/mokepons_mokepon_ratigueya_attack.png', 5)


Hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra'}

)
Capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }

)
Pydos.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }

)

mokepones.push(Hipodoge, Pydos, Capipepo)
function iniciarJuego() {
    selectionSeleccionarAtaque.style.display = `none`

    mokepones.forEach((mokepon) => {
        opciondeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="mascota" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img class=${mokepon.nombre} src=${mokepon.imagen} for=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opciondeMokepones

        inputHipodoge = document.getElementById("Hipodoge");
        inputCapipepo = document.getElementById("Capipepo");
        inputPydos = document.getElementById("Pydos");
    })

    btnMascota.addEventListener('click', seleccionarMascotaJugador);
    botonReiniciar.addEventListener("click", reiniciar);
}

function seleccionarMascotaJugador() {            
    selectionSeleccionarMascota.style.display = `none`
    selectionSeleccionarAtaque.style.display = `flex`    

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert("Selecciona una Mascota");
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador  === mokepones[i].nombre) {
            ataques = mokepones[i].ataques            
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        opciondeAtaques = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        botonesDeAtaque.innerHTML += opciondeAtaques     
    })

    btnFuego = document.getElementById('boton-fuego');
    btnAgua = document.getElementById('boton-agua');
    btnTierra = document.getElementById('boton-tierra');
    botones = document.querySelectorAll('.BAtaque')


}

function secuenciaAtaque(){
    botones.forEach((boton) => {
         boton.addEventListener('click', (e) =>{//e = significa evento mismo
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)                                
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
            }
            ataque()
         })
    })
}



function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataque(ataqueJugador) {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1){
        ataqueEnemigo.push('FUEGO')
    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
    /* combatir(ataqueJugador, ataqueEnemigo); */
}
function iniciarPelea(){
    if(ataqueJugador.length == 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    let resultado;
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] == ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            resultado = 'Empate'
            vidasJugador++
            spanVidasJugador.innerHTML = vidasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' ||
            (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FFUEGO') ||
            (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo === 'AGUA')
        ) {
            resultado = 'Ganaste'
            vidasEnemigo--
        } else {
            resultado = 'Perdiste'
            vidasJugador--
        }
        spanVidasJugador.textContent = vidasJugador;
        spanVidasEnemigo.textContent = vidasEnemigo;

        nuevoParrafo(resultado);
        verificarFinJuego();

    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

function reiniciar() {
    location.reload();
}

function deshabilitarBotones() {
    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;
}

window.addEventListener("load", iniciarJuego)