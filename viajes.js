// viajes.js

const viajes = [];

// Registrar viaje
const agregarViaje = (destino, fecha, transporte, costo) => {
    const viaje = {
        id: Date.now(),
        destino,
        fecha,
        transporte,
        costo
    };

    viajes.push(viaje);
};

// Obtener todos los viajes
const obtenerViajes = () => viajes;

// Mostrar itinerario
const mostrarItinerario = () => {
    if (viajes.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }

    viajes.forEach(({ destino, fecha, transporte, costo }, index) => {
        console.log(`\nViaje #${index + 1}`);
        console.log(`Destino: ${destino}`);
        console.log(`Fecha: ${fecha}`);
        console.log(`Transporte: ${transporte}`);
        console.log(`Costo: $${costo}`);
        console.log("----------------------");
    });
};

export { agregarViaje, obtenerViajes, mostrarItinerario };