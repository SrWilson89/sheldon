// script.js
document.getElementById('chiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir recarga de la página
    
    const observed = document.getElementById('observed').value.split(',').map(Number);
    const expected = document.getElementById('expected').value.split(',').map(Number);
    
    if (observed.length !== expected.length) {
        alert("Los valores observados y esperados deben tener la misma longitud.");
        return;
    }

    // Calcular Chi-cuadrado
    let chiSquare = 0;
    for (let i = 0; i < observed.length; i++) {
        chiSquare += Math.pow(observed[i] - expected[i], 2) / expected[i];
    }
    
    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Valor de Chi-cuadrado: ${chiSquare.toFixed(2)}`;
    
    // Guardar el resultado en localStorage
    document.getElementById('saveResult').addEventListener('click', function() {
        const timestamp = new Date().toLocaleString();
        localStorage.setItem('chiSquareResult', JSON.stringify({
            observed: observed,
            expected: expected,
            chiSquare: chiSquare.toFixed(2),
            date: timestamp
        }));
        alert('Resultado guardado con éxito.');
    });
});
