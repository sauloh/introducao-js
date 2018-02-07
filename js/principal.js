var titulo = document.querySelector(".titulo"); // Get Title

titulo.textContent = "Aparecida Nutricionista"; // Update Title

var pacient_list = document.querySelectorAll(".paciente"); // Get pacient

for (var i=0; i<pacient_list.length; i++) {
    var paciente = pacient_list[i];
    var imc_value = 0;
    var error = false;
    var peso = paciente.querySelector(".info-peso").textContent; // Get weigth
    var altura = paciente.querySelector(".info-altura").textContent; // Get height
    var tdimc = paciente.querySelector(".info-imc");

    tdimc.textContent = calcImc(peso, altura);
}

// +++ Buttom Function - Adding new pacient +++ //
var addButtom = document.querySelector("#adicionar-paciente");

// Event on Click
addButtom.addEventListener("click", function () {
    event.preventDefault();

    // Get input form data
    var form = document.querySelector("#form-adiciona");
    var name = form.nome.value;
    var weight = form.peso.value;
    var height = form.altura.value;
    var fat = form.gordura.value;

    // Creating elements of a new row in table
    var pacientTr = document.createElement("tr");
    pacientTr.classList.add("paciente");

    var nameTd = document.createElement("td");
    nameTd.classList.add("info-nome");

    var weightTd = document.createElement("td");
    weightTd.classList.add("info-peso");

    var heightTd = document.createElement("td");
    heightTd.classList.add("info-altura");

    var fatTd = document.createElement("td");
    fatTd.classList.add("info-gordura");

    var imcTd = document.createElement("td");

    nameTd.textContent = name;
    weightTd.textContent = weight;
    heightTd.textContent = height;
    fatTd.textContent = fat;
    imcTd.textContent = calcImc(weight, height);

    pacientTr.appendChild(nameTd);
    pacientTr.appendChild(weightTd);
    pacientTr.appendChild(heightTd);
    pacientTr.appendChild(fatTd);
    pacientTr.appendChild(imcTd);

    var pacientTable= document.querySelector("#tabela-pacientes");

    pacientTable.appendChild(pacientTr);

    console.log(pacientTr);

})

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
