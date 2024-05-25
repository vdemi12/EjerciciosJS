document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("euclideanDivisionForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        let dividend = parseInt(document.getElementById("dividend").value);
        let divisor = parseInt(document.getElementById("divisor").value);
    
        if (isNaN(dividend) || isNaN(divisor) || divisor <= 0) {
            alert("Por favor, ingrese valores válidos para el dividendo y el divisor.");
            return;
        }
    
        let quotient = Math.floor(dividend / divisor);
        let remainder = dividend % divisor;
    
        document.getElementById("quotient").textContent = "Cociente: " + quotient;
        document.getElementById("remainder").textContent = "Resto: " + remainder;
    });
});
