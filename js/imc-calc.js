var titulo = document.querySelector(".titulo"); // Get Title

titulo.textContent = "Aparecida Nutricionista"; // Update Title

var pacient_list = document.querySelectorAll(".paciente"); // Get pacient

for (var i=0; i<pacient_list.length; i++) {
    var paciente = pacient_list[i];
    var imc_value = 0;
    var error = false;
    var peso = paciente.querySelector(".info-peso").textContent; // Get weight
    var altura = paciente.querySelector(".info-altura").textContent; // Get height
    var tdimc = paciente.querySelector(".info-imc");

    tdimc.textContent = calcImc(peso, altura);
}


function calcImc(peso, altura){
  // Error Messages
  var altura_error = "Altura invalida;";
  var peso_error = "Peso invalido";
  var imc = 0

    // Height check
    if (altura <= 0 || altura >= 3) {
        imc = altura_error;
        error = true;
    }

    // Weight check
    if (peso <= 0 || peso >= 1000) {
        imc += peso_error;
        error = true;
    }

    // Print if errors
    if (!error) {
        imc_value = peso / (altura * altura); // Calculates IMC
        imc = imc_value.toFixed(2); // Update IMC value
    }

    // Print if Ok
    else{
        paciente.classList.add("invalid-pacient");
    }
    return imc;
}
