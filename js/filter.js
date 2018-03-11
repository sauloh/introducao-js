var filterField = document.querySelector("#filter-table");

filterField.addEventListener("input", function(){
    var patients = document.querySelectorAll(".paciente");

    patients.forEach(function(p){
        var currName = p.querySelector('.info-nome').textContent;
        var filterBy = filterField.value;
        var substr = new RegExp(filterBy, 'i');

        if(substr.test(currName)){
            p.classList.remove("invisible");
        }

        else{
            p.classList.add("invisible");
        }

    })
})
