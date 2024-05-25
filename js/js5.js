document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("stringForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        let inputString = document.getElementById("inputString").value;
    
        if (!inputString) {
            alert("Por favor, ingrese una cadena.");
            return;
        }
    
        let stringCase = "";
    
        if (inputString === inputString.toUpperCase()) {
            stringCase = "La cadena está en mayúsculas.";
        } else if (inputString === inputString.toLowerCase()) {
            stringCase = "La cadena está en minúsculas.";
        } else {
            stringCase = "La cadena no está ni en mayúsculas ni en minúsculas.";
        }
    
        document.getElementById("stringCase").textContent = stringCase;
    });
});
