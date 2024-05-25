document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("palindromeForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        let inputPalindrome = document.getElementById("inputPalindrome").value;
    
        if (!inputPalindrome) {
            alert("Por favor, ingrese una cadena.");
            return;
        }
    
        function isPalindrome(str) {
            let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
            let reversedStr = normalizedStr.split("").reverse().join("");
            return normalizedStr === reversedStr;
        }
    
        let isInputPalindrome = isPalindrome(inputPalindrome);
    
        let generatedPalindrome = inputPalindrome;
    
        if (!isInputPalindrome) {
            let reversedInput = inputPalindrome.split("").reverse().join("");
            generatedPalindrome += reversedInput;
        }
    
        document.getElementById("isPalindrome").textContent = isInputPalindrome ? "La cadena es un palíndromo." : "La cadena no es un palíndromo.";
        document.getElementById("generatedPalindrome").textContent = isInputPalindrome ? "" : "Palíndromo generado: "+generatedPalindrome;
    });
});
