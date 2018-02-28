// +++ Buttom Function - Adding new pacient +++ //

function getPatientForm(form){
  // Get patient data from submited form
  var patient = {
    name: form.nome.value,
    weight: form.peso.value,
    height: form.altura.value,
    fat: form.gordura.value,
    imc: calcImc(form.peso.value, form.altura.value)
  }
  return patient;
}

function createCol(data, dclass) {
  // Create a column of a table
  var table = document.createElement("td");
  table.classList.add(dclass);
  table.textContent = data;

  return table;
}

function createEntry(patient){
  // Create Table
  var entry = document.createElement("tr");
  entry.classList.add("paciente");

  // Create each column of table and append to table
  entry.appendChild(createCol(patient.name, "info-name"))
  entry.appendChild(createCol(patient.weight, "info-peso"))
  entry.appendChild(createCol(patient.height, "info-altura"))
  entry.appendChild(createCol(patient.fat, "info-gordura"))
  entry.appendChild(createCol(patient.imc, "info-imc"))

  return entry;
}

function validateWeight(weight) {
    // Weight check
    if (weight <= 0 || weight >= 1000) {
        return false;
    } else {
      return true;
    }
}

function validateHeight(height){
    // Height check
    if (height <= 0 || height >= 3) {
        return false;
    } else {
      return true;
    }
}

function validatePatientData(patient){
  var errors = [];

  if (patient.name.length == 0) errors.push("Name can't be empty");
  if (patient.fat == 0) errors.push("Fat can't be empty");

  if (patient.weight.length == 0){
    errors.push("Weight cant' be empty");
  } else {
      if (!validateWeight(patient.weight)) errors.push("Invalid Weight");
  }

  if (patient.height == 0){
    errors.push("Height can't be empty");
  } else{
    if (!validateHeight(patient.height)) errors.push("Invalid Height");
  }

  return errors;
}

function printErrors(errors){
    var list = document.querySelector("#mensagens-erro");
    list.innerHTML = "";

    errors.forEach(function(error) {
        var item = document.createElement("li");
        item.textContent = error;
        list.appendChild(item);
    });
}

// Add new patient from form on Click
var addButtom = document.querySelector("#adicionar-paciente");
addButtom.addEventListener("click", function () {
    event.preventDefault();

    // Get input form data
    var form = document.querySelector("#form-adiciona");

    // Save form data to an object
    var patient = getPatientForm(form);

    var errors = validatePatientData(patient);

    if (errors.length > 0) {
      printErrors(errors);
    } else{
      // Create new table entry with patient data
      var newEntry = createEntry(patient);

      // Seclect current table
      var patientTable = document.querySelector("#tabela-pacientes");

      // Add new entry to existing table
      patientTable.appendChild(newEntry);

      // Clear form and errors after patient added to table
      form.reset();
      document.querySelector("#mensagens-erro").innerHTML = "";
    }

})
