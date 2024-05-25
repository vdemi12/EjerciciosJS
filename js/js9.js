document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("monthForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        let monthNumber = parseInt(document.getElementById("monthNumber").value);
    
        if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
            alert("Por favor, seleccione un número de mes válido.");
            return;
        }
    
        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
    
        document.getElementById("monthName").textContent = "El nombre del mes es: " + months[monthNumber-1];
    });
});
