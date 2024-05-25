document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dniForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        let dniNumber = parseInt(document.getElementById("dniNumber").value);
    
        if (isNaN(dniNumber) || dniNumber <= 0 || dniNumber.toString().length < 7 || dniNumber.toString().length > 8) {
            alert("Por favor, ingrese un número de DNI válido.");
            return;
        }
    
        const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
        let letter = dniLetters[dniNumber % 23];
    
        document.getElementById("dniLetter").textContent = "La letra de tu DNI es: "+letter;
    });
});
