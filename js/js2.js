document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("circleForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        let radius = parseFloat(document.getElementById("radius").value);
        if (isNaN(radius) || radius <= 0) {
            alert("Por favor, ingrese un radio válido.");
            return;
        }
        
        let circumference = 2 * Math.PI * radius;
        let area = Math.PI * radius * radius;
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);
        
        document.getElementById("circumference").textContent = "Longitud de la circunferencia: "+ circumference+ " unidades";
        document.getElementById("area").textContent = "Área del círculo: " + area + " unidades cuadradas";
        document.getElementById("volume").textContent = "Volumen de la esfera: " + volume + " unidades cúbicas";
    });
});
