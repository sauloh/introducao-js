// Calculates Body Mass Index (BMI) //
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
  var imc = 0

  imc_value = peso / (altura * altura); // Calculates IMC
  imc = imc_value.toFixed(2); // Update IMC value with only 2 decimal cases

  return imc;
}
