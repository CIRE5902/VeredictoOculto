// GSAP para animaciones
document.addEventListener("DOMContentLoaded", () => {
    const typingText = "Procesando tu caso legal... por favor, espera.";
    let index = 0;

    function typeText() {
        const typingElement = document.getElementById('typing-text');
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeText, 100); // Controla la velocidad de la escritura
        } else {
            showHiddenMessage(); // Mostrar mensaje cuando termine
        }
    }

    function showHiddenMessage() {
        const hiddenMessage = document.getElementById('hidden-message');
        hiddenMessage.style.display = "block";
        gsap.from(".hidden-message", { duration: 1, opacity: 0, y: 20 });
    }

    typeText(); // Iniciar la animación de escritura
});
