const express = require ('express');
const cors = require ('cors')

const app = express()//Acá se genero una instacia del servidor que se estará usando
app.use(cors())
app.use(express.json)// esto nos permite habilitar las opciones tipo json

const jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }
    
}

/*en que url va recibir la petición*/
app.get("/unirse", (req, res) =>{
    const id = `${Math.random()}`

    const jugador = new Jugador(id);
    jugadores.push(jugador);

    res.setHeader("Access-Control-Allow-Origin", "*")
    

    res.send(id)
})

app.post("/mokemon/:jugadorId", (req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    console.log(jugadores);
    console.log(jugadorId);
    res.end()
})


app.listen(8080, () =>{
    console.log('El servidor ya arranco')
});
/*Hasta este momento se inicio el servidor, sin embargo no hace nada, pero ya
fue indicado a nuestro nodejs que lo creara*/