document.getElementById('start-scan').addEventListener('click', function() {
    const video = document.getElementById('camera-stream');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
        });
    }
});

// Función para mostrar el patrón (puede ser un código QR, por ejemplo)
function showPattern() {
    const patternDisplay = document.getElementById('pattern-display');
    // Aquí puedes generar y mostrar el patrón, por ejemplo, un código QR
    patternDisplay.innerHTML = '<img src="path/to/your/qr-code.png" alt="QR Code">';
}

// Llamar a la función para mostrar el patrón al cargar la página
window.onload = showPattern;
