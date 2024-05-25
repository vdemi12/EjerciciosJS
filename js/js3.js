document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("triangleForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        let sideA = parseFloat(document.getElementById("sideA").value);
        let sideB = parseFloat(document.getElementById("sideB").value);
        let sideC = parseFloat(document.getElementById("sideC").value);
    
        if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
            alert("Por favor, ingrese valores válidos para los lados.");
            return;
        }
    
        let triangleType = "";
        
        if (sideA === sideB && sideB === sideC) {
            triangleType = "El triángulo es equilátero";
        } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
            triangleType = "El triángulo es isósceles";
        } else {
            triangleType = "El triángulo es escaleno";
        }
    
        document.getElementById("triangleType").textContent = triangleType;
    });
});
