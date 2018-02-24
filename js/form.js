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

// Add new patient from form on Click
var addButtom = document.querySelector("#adicionar-paciente");
addButtom.addEventListener("click", function () {
    event.preventDefault();

    // Get input form data
    var form = document.querySelector("#form-adiciona");
    // Save form data to an object
    var patient = getPatientForm(form);

    // Create new table entry with patient data
    var newEntry = createEntry(patient);

    // Seclect current table
    var patientTable = document.querySelector("#tabela-pacientes");

    // Add new entry to existing table
    patientTable.appendChild(newEntry);

    // Clear form after patient added to table
    form.reset();

})
