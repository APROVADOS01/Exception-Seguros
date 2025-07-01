// JavaScript para o Carrossel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
let carouselInterval; // Variável para armazenar o ID do intervalo do setTimeout

// Função para exibir os slides e gerenciar a transição automática
function showSlides() {
    slides.forEach(slide => slide.classList.remove('active')); // Remove a classe 'active' de todos os slides
    slideIndex++; // Avança para o próximo slide
    if (slideIndex > slides.length) {
        slideIndex = 1; // Se for o último slide, volta para o primeiro
    }
    slides[slideIndex - 1].classList.add('active'); // Adiciona a classe 'active' ao slide atual
    // Define um novo timer para a próxima transição automática
    carouselInterval = setTimeout(showSlides, 5000); // # Tempo de transição automática entre os slides (em milissegundos). Ajuste conforme preferir.
}

// Função para mudar o slide manualmente (usada pelas setas de navegação)
function changeSlide(n) {
    clearTimeout(carouselInterval); // Limpa o timer automático para evitar conflitos
    slideIndex += n - 1; // Ajusta o índice baseado no botão clicado (-1 para anterior, +1 para próximo)
    if (slideIndex < 0) { // Se o índice for menor que zero (indo para trás do primeiro slide)
        slideIndex = slides.length - 1; // Vai para o último slide
    } else if (slideIndex >= slides.length) { // Se o índice for maior ou igual ao número de slides (indo para frente do último)
        slideIndex = 0; // Vai para o primeiro slide
    }
    slides.forEach(slide => slide.classList.remove('active')); // Remove 'active' de todos
    slides[slideIndex].classList.add('active'); // Adiciona 'active' ao slide selecionado
    // Reinicia o timer para a transição automática após a mudança manual
    carouselInterval = setTimeout(showSlides, 5000); // # Tempo de transição automática após interação manual.
}

// Inicia o carrossel quando todo o conteúdo HTML é carregado
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        slides[0].classList.add('active'); // Garante que o primeiro slide esteja ativo ao carregar a página
        carouselInterval = setTimeout(showSlides, 5000); // Inicia o ciclo de transição automática
    }
});