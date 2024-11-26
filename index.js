const express = require ('express');

const app = express()//Acá se genero una instacia del servidor que se estará usando

app.listen(8080, () =>{
    console.log('El servidor ya arranco')
});
//Hasta este momento se inicio el servidor, sin embargo no hace nada, pero ya fue indicado a nuestro nodejs que lo creara