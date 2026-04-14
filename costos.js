// costos.js

const preciosDestino = {
    Paris: 500,
    Londres: 400,
    "New York": 600,
    Tokio: 700,
    Cancun: 300
};

const preciosTransporte = {
    Avión: 200,
    Tren: 100,
    Autobús: 50
};

// Calcular costo del viaje
const calcularCosto = (destino, transporte, personas = 1) => {
    let costo = (preciosDestino[destino] || 300) + (preciosTransporte[transporte] || 0);

    // descuento por grupo
    if (personas >= 4) {
        costo *= 0.9; // 10% descuento
    }

    return costo;
};

export { calcularCosto };