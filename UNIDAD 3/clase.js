class Persona {
    constructor(nombre, apellidos, anno, estudio, poblacion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.year = anno;
        this.estudio = estudio;
        this.poblacion = poblacion;
    }

    get Estudio() {
        return this.estudio;
    }

    get Poblacion() {
        return this.poblacion;
    }
}

// Crear un array de objetos Persona
const personas = [
    new Persona("Koke", "Seguido", 1990, "grado superior", "Toledo"),
    new Persona("Ana", "Nuñez", 1985, "grado medio", "Toledo"),

];

// Función flecha para obtener dos atributos de cada objeto Persona y mostrarlos
const obtenerAtributos = () => {
    for (const persona of personas) {
        const { Estudio, Poblacion } = persona;
        console.log(`Estudio: ${Estudio}, Poblacion: ${Poblacion}`);
    
    }
};

// Llamar a la función flecha
obtenerAtributos();
