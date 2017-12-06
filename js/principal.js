var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var altura_error = "Altura invalida;";
var peso_error = "Peso invalido";


var pacient_list = document.querySelectorAll(".paciente"); // Get pacient

for (var i=0; i<pacient_list.length; i++) {
    var paciente = pacient_list[i];
    var imc_value = 0;
    var error = false;
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
        tdimc.textContent = imc_value.toFixed(2); // Update IMC value
    }

    else{
        paciente.classList.add("invalid-pacient")
    }
}
