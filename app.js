// app.js

import { agregarViaje, mostrarItinerario } from "./viajes.js";
import { calcularCosto } from "./costos.js";

const iniciarApp = () => {
    console.log("🌍 Bienvenido al Planificador de Viajes");

    const viaje1Costo = calcularCosto("Paris", "Avión", 2);
    agregarViaje("Paris", "2024-06-15", "Avión", viaje1Costo);

    const viaje2Costo = calcularCosto("Cancun", "Autobús", 5);
    agregarViaje("Cancun", "2024-07-01", "Autobús", viaje2Costo);

    const viaje3Costo = calcularCosto("Tokio", "Avión", 1);
    agregarViaje("Tokio", "2024-08-10", "Avión", viaje3Costo);

    mostrarItinerario();
};

iniciarApp();