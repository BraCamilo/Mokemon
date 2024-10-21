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
let ataqueEnemigo
let opciondeMokepones
let inputCapipepo
let inputPydos
let inputHipodoge
let mascotaJugador
let opciondeAtaques
let btnFuego
let ataqueJugador = []
let btnAgua
let btnTierra
let vidasJugador = 3
let vidasEnemigo = 3
const tipos = ['Fuego', 'Agua', 'Tierra']

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
         })
    })
}



function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    secuenciaAtaque()
}

function ataque(ataqueJugador) {
    const ataqueAleatorio = tipos[Math.floor(Math.random() * tipos.length)];
    ataqueEnemigo = ataqueAleatorio;

    combatir(ataqueJugador, ataqueEnemigo);
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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