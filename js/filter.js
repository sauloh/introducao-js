var filterField = document.querySelector("#filter-table");
var patients = document.querySelectorAll(".paciente");

filterField.addEventListener("input", function(){
    patients.forEach(function(p){
        var currName = p.querySelector('.info-nome').textContent;
        var filterBy = filterField.value;

        if(filterBy == currName){
            console.log("Equal!");
            p.classList.remove("invisible");
        }

        else{
            p.classList.add("invisible");
        }

    })
})
