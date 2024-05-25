document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("gcdForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        let number1 = parseInt(document.getElementById("number1").value);
        let number2 = parseInt(document.getElementById("number2").value);
    
        if (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
            alert("Por favor, ingrese números enteros positivos.");
            return;
        }
    
        function gcd(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
    
        let result = gcd(number1, number2);
    
        document.getElementById("gcd").textContent = "MCD: " + result;
    });
});
