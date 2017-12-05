var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var altura_error = "Altura invalida;";
var peso_error = "Peso invalido";
var imc_value = 0;
var error = false;

var paciente = document.querySelector("#primeiro-paciente"); // Get pacient
var peso = paciente.querySelector(".info-peso").textContent; // Get weigth
var altura = paciente.querySelector(".info-altura").textContent; // Get height
var tdimc = paciente.querySelector(".info-imc");

tdimc.textContent = '';

if (altura <= 0 || altura >= 3) {
    tdimc.textContent = altura_error;
    error = true;
}

if (peso <= 0 || peso >= 1000) {
    tdimc.textContent += peso_error;
    error = true;
}

if (!error) {
    imc_value = peso / (altura * altura); // Calculates IMC
    tdimc.textContent = imc_value; // Update IMC value
}
