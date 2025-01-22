

const heartContainer = document.getElementById('heart-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posição inicial aleatória
    const startPositionX = Math.random() * window.innerWidth; // Posição X aleatória na tela
    heart.style.left = `${startPositionX}px`;

    // Colocando o emoji de coração ❤️
    heart.textContent = '❤️';

    // Animação com duração aleatória entre 2 e 4 segundos
    const duration = Math.random() * 2 + 2; // entre 2 e 4 segundos
    heart.style.animationDuration = `${duration}s`;

    // Adiciona o coração no container
    heartContainer.appendChild(heart);

    // Remove o coração após a animação para não sobrecarregar a memória
    setTimeout(() => {
        heart.remove();
    }, duration * 1000); // Remove após o tempo da animação
}

// Criar corações a cada 100ms
setInterval(createHeart, 100);

const noButton = document.getElementById("noButton");

// Adicionando o evento de passar o mouse (mouseover)
noButton.addEventListener("mouseover", () => {
    // Obtém as dimensões da janela para garantir que o botão não saia da tela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Gera novas posições aleatórias para o botão
    const randomX = Math.random() * (windowWidth - noButton.offsetWidth);
    const randomY = Math.random() * (windowHeight - noButton.offsetHeight);

    // Aplica as novas posições ao botão
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});