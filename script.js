// ====== CONTROLE DO CARROSSEL DE IMAGENS ======
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return; // Só roda na página que tem carrossel
    
    if (index >= slides.length) { currentSlide = 0; }
    else if (index < 0) { currentSlide = slides.length - 1; }
    else { currentSlide = index; }

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// ====== CONTROLE DO GRUPO RECOLHÍVEL (ACCORDION) ======
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');

        // Alterna a classe ativa do botão
        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "20px";
            icon.style.transform = "rotate(180deg)";
        } else {
            content.style.maxHeight = "0";
            content.style.padding = "0 20px";
            icon.style.transform = "rotate(0deg)";
        }
    });
});

// Inicializa o primeiro slide do carrossel ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    setInterval(() => {
        changeSlide(1);
    }, 4000);
});
// ====== CONTROLE DO NOVO LAYOUT DE ABAS VISUAIS ======
function openTab(event, tabId) {
    // Esconde todos os conteúdos das abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove a classe 'active' de todos os botões
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Mostra o conteúdo da aba atual e adiciona classe 'active' ao botão clicado
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

let year = new Date()
const currentYear = document.getElementById("current-year");
currentYear ? currentYear.textContent = year.getFullYear() : null;

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.dropdown').classList.toggle('active');
    });
});