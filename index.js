var pelicula = require('./salasCine')

var salas_Cine = [
    new pelicula("1", "Sala 2D", "2:40 pm", "Avengers End Game", "Subtitulada al Español", "180"),
    new pelicula("2", "Sala XD 2D", "1:30 pm", "Thor Raknarok", "Ingles", "150"),
    new pelicula("3", "Sala 3D", "6:10 pm", "Iron Man 3", "Doblada al Español", "120"),
    new pelicula("4", "Sala XD 3D", "9:15 pm", "DeadPool", "Ingles", "120")

]

// var listadoSalas = salas_Cine.map(salas_Cine => salas_Cine.informacionSalas())
// console.log(listadoSalas)

// var listadoPeliculas = salas_Cine.map(salas_Cine => salas_Cine.informacionPeliculas())
// console.log(listadoPeliculas)

var cateleraHoy = salas_Cine.map(salas_Cine => salas_Cine.cartelera())
console.log(cateleraHoy)