var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

xhr.addEventListener("load", function(){
  response = xhr.responseText;
  patients_json = JSON.parse(response);

  console.log(patients_json);

  patients_json.forEach(function(patient){
    addPatient(patient);

  });
});

xhr.send();
