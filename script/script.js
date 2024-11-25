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
const seccionVerMapa = document.getElementById('verMapa')
const mapa = document.getElementById('mapa')

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
let mascotaJugadorObjeto
let opciondeAtaques
let btnFuego
let ataqueJugador = []
let btnAgua
let btnTierra
let vidasJugador = 3
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.webp'

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
alturaQueBuscamos = anchoDelMapa * 600 / 800
const anchoMaximoDelMapa = 350

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;

class mokepon {
    constructor(nombre, imagen, vida, fotoMapa) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaImg = new Image()
        this.mapaImg.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaImg,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )       
    }
}

let Hipodoge = new mokepon('Hipodoge', '/assets/mokepons_mokepon_hipodoge_attack.png', 5, '/assets/hipodoge.png')
let Capipepo = new mokepon('Capipepo', '/assets/mokepons_mokepon_capipepo_attack.png', 5, '/assets/capipepo.png')
let Pydos = new mokepon('Pydos', '/assets/mokepons_mokepon_ratigueya_attack.png', 5, '/assets/ratigueya.png')

let HipodogeEnemigo = new mokepon('Hipodoge', '/assets/mokepons_mokepon_hipodoge_attack.png', 5, '/assets/hipodoge.png')
let CapipepoEnemigo = new mokepon('Capipepo', '/assets/mokepons_mokepon_capipepo_attack.png', 5, '/assets/capipepo.png')
let PydosEnemigo = new mokepon('Pydos', '/assets/mokepons_mokepon_ratigueya_attack.png', 5, '/assets/ratigueya.png')


Hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra'}

)
HipodogeEnemigo.ataques.push(
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
CapipepoEnemigo.ataques.push(
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
PydosEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }

)

mokepones.push(Hipodoge, Pydos, Capipepo)
function iniciarJuego() {
    selectionSeleccionarAtaque.style.display = `none`
    seccionVerMapa.style.display = 'none'

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
    iniciarMapa()
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
                boton.style.background = '#112f58'
                boton.disabled = true;                               
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true;
            }
            ataque()
         })
    })
}



function seleccionarMascotaEnemigo() {
    console.log('Ataque Enemigo')
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataque() {
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
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' ||
            (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') ||
            (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA')
        ) {
            resultado = 'Ganaste'
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            resultado = 'Perdiste'
            indexAmbosOponentes(index, index)
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        nuevoParrafo(resultado);
        verificarFinJuego();

    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function verificarFinJuego() {
    if (victoriasJugador === victoriasEnemigo) {
        nuevoParrafo('Han empatado!');
    } else if (victoriasJugador > victoriasEnemigo) {
        nuevoParrafo('¡Has ganado!');
    }else{
        nuevoParrafo('Has perdido')
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
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 10
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -10
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = + 10
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = - 10
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
function sePresionoUnaTecla(event){    
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break          
        case 'ArrowDown':
            moverAbajo()    
            break
        case 'ArrowRight':
            moverDerecha()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        default:
            break
    }
    

}
function pintarCanvas(){      
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.Height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    HipodogeEnemigo.pintarMokepon() 
    PydosEnemigo.pintarMokepon()
    CapipepoEnemigo.pintarMokepon()
    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(HipodogeEnemigo)
        revisarColision(PydosEnemigo)
        revisarColision(CapipepoEnemigo)
    }

}
function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]            
        }
        
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    selectionSeleccionarMascota.style.display = `none`
    //selectionSeleccionarAtaque.style.display = `flex`    
    seccionVerMapa.style.display = 'flex'
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)    
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
        mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota >derechaEnemigo
    ){
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    seccionVerMapa.style.display = 'none'
    selectionSeleccionarAtaque.style.display = 'flex'
    seleccionarMascotaEnemigo(enemigo);
}

window.addEventListener("load", iniciarJuego)