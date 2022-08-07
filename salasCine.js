
class pelicula {

    constructor (numeroSala, nombreSala, horaFuncion, nombrePelicula, idioma, duracion ){
        this.numeroSala =  numeroSala
        this.nombreSala = nombreSala
        this.horaFuncion = horaFuncion
        this.nombrePelicula = nombrePelicula
        this.idioma = idioma
        this.duracion = duracion
    }

    informacionSalas(){
        return " La sala numero: " + this.numeroSala + " Se llama:  " + this.nombreSala
    }

    informacionPeliculas(){
        return " La Pelicula se llama: " + this.nombrePelicula + " , Esta en idioma:  " + this.idioma + ", Tiene una duracion de: " + this.duracion + " minutos."
    }

    cartelera(){
        return " Sala: " + this.numeroSala + " -> " + this.nombreSala + " -> " + this.horaFuncion + " -> " + this.nombrePelicula + " -> Idioma:  " + this.idioma 
    }

}






module.exports = pelicula