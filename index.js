//LIBRERIAS
const express = require ('express');
const cors = require ('cors');
const app = express();
app.use(cors());
app.use(express.json());

//VARIABLES
const jugadores = []

//CLASES
class Jugador{
    constructor(id){
        this.id = id
    }
    asignarmokepon(mokepon){
        this.mokepon = mokepon
    }
    actualizarPosicion(x,y){
        this.x = x
        this.y = y
    }
    
}
class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}

//MÉTODOS
app.get("/unirse", (req, res) =>{
    const id = `${Math.random()}`

    const jugador = new Jugador(id);
    jugadores.push(jugador);

    res.setHeader("Access-Control-Allow-Origin", "*")
    

    res.send(id)
})

app.post("/mokepon/:jugadorId", (req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarmokepon(mokepon)
    }
    
    console.log(jugadores);
    console.log(jugadorId);
    res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })
})


app.listen(8080, () =>{
    console.log('El servidor ya arranco')
});
/*Hasta este momento se inicio el servidor, sin embargo no hace nada, pero ya
fue indicado a nuestro nodejs que lo creara*/