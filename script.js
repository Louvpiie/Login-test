// Seleciona todos os elementos com a classe 'toggle'
document.querySelectorAll('.toggle').forEach(toggle => {
    // Adiciona um evento de clique a cada um deles
    toggle.addEventListener('click', () => {
        // Alterna a classe 'flip' no elemento principal '.wrapper'
        document.querySelector('.wrapper').classList.toggle('flip');
    });
});