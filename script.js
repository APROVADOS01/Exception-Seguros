// =========================================
// JavaScript para o Carrossel (Automático e Manual)
// =========================================
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
let carouselInterval; // Variável para armazenar o ID do intervalo do setTimeout

// Função para exibir o slide atual e iniciar o timer para o próximo
function showSlides() {
    slides.forEach(slide => slide.classList.remove('active')); // Remove a classe 'active' de todos os slides
    slideIndex++; // Avança para o próximo slide
    if (slideIndex > slides.length) {
        slideIndex = 1; // Se for o último slide, volta para o primeiro
    }
    slides[slideIndex - 1].classList.add('active'); // Adiciona a classe 'active' ao slide atual
    // Define um novo timer para a próxima transição automática
    carouselInterval = setTimeout(showSlides, 5000); // # TEMPO DE TRANSIÇÃO AUTOMÁTICA (em milissegundos). Ajuste conforme preferir.
}

// Função para mudar o slide manualmente (usada pelas setas de navegação)
function changeSlide(n) {
    clearTimeout(carouselInterval); // Limpa o timer automático para evitar pular slides durante a navegação manual
    slideIndex += n - 1; // Ajusta o índice baseado no botão clicado (-1 para anterior, +1 para próximo)
    if (slideIndex < 0) { // Se o índice for menor que zero (indo para trás do primeiro slide)
        slideIndex = slides.length - 1; // Vai para o último slide
    } else if (slideIndex >= slides.length) { // Se o índice for maior ou igual ao número de slides (indo para frente do último)
        slideIndex = 0; // Vai para o primeiro slide
    }
    slides.forEach(slide => slide.classList.remove('active')); // Remove 'active' de todos
    slides[slideIndex].classList.add('active'); // Adiciona 'active' ao slide selecionado
    // Reinicia o timer para a transição automática após a mudança manual
    carouselInterval = setTimeout(showSlides, 5000); // # TEMPO DE TRANSIÇÃO AUTOMÁTICA APÓS INTERAÇÃO MANUAL.
}

// =========================================
// JavaScript para o Pop-up do WhatsApp
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o carrossel se houver slides
    if (slides.length > 0) {
        slides[0].classList.add('active'); // Garante que o primeiro slide esteja ativo ao carregar a página
        carouselInterval = setTimeout(showSlides, 5000); // Inicia o ciclo de transição automática
    }

    // Seleciona os elementos do pop-up
    const openWhatsappPopupBtn = document.getElementById('openWhatsappPopup');
    const whatsappPopup = document.getElementById('whatsappPopup');
    const closeWhatsappPopupBtn = document.getElementById('closeWhatsappPopup');

    // Verifica se os elementos do pop-up existem antes de adicionar event listeners
    if (openWhatsappPopupBtn && whatsappPopup && closeWhatsappPopupBtn) {
        // FUNÇÃO PARA ABRIR O POP-UP
        const showPopup = () => {
            whatsappPopup.style.display = 'flex'; // Torna o overlay visível
            setTimeout(() => {
                whatsappPopup.classList.add('active');
            }, 10);
        };

        // Event listener para abrir o pop-up AO CLICAR NO BOTÃO FLUTUANTE
        openWhatsappPopupBtn.addEventListener('click', showPopup);

        // # NOVO: ABRIR O POP-UP AUTOMATICAMENTE QUANDO O SITE CARREGAR
        // Você pode ajustar o tempo (em milissegundos) ou remover o setTimeout para abrir instantaneamente.
        setTimeout(() => {
            showPopup();
        }, 1000); // # TEMPO PARA ABRIR O POP-UP AUTOMATICAMENTE (1000ms = 1 segundo). Altere ou defina como 0 para abrir instantaneamente.

        // Event listener para fechar o pop-up clicando no 'X'
        closeWhatsappPopupBtn.addEventListener('click', () => {
            whatsappPopup.classList.remove('active'); // Remove a classe 'active' para iniciar a transição de saída
            // Esconde o elemento 'display: none' apenas após a transição CSS ter ocorrido
            setTimeout(() => {
                whatsappPopup.style.display = 'none';
            }, 300); // O tempo aqui deve corresponder ao tempo da transição 'opacity' e 'visibility' no CSS do '.whatsapp-popup-overlay'
        });

        // Event listener para fechar o pop-up clicando fora da caixa de conteúdo
        whatsappPopup.addEventListener('click', (event) => {
            // Verifica se o clique foi diretamente no overlay (fundo escurecido), não nos elementos dentro do pop-up-content
            if (event.target === whatsappPopup) {
                whatsappPopup.classList.remove('active');
                setTimeout(() => {
                    whatsappPopup.style.display = 'none';
                }, 300); // O tempo aqui deve corresponder ao tempo da transição CSS
            }
        });
    }
});
