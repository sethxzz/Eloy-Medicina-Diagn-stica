/* Menu Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });



 /* Sticky Navbar */
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/* Remove menu icon navbar when click navbar link */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/* Swiper */
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    /* Dark e Light Mode */

   /* let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}; */

/* Dark e Light Mode - com persistência */

// Seleciona o ícone de modo escuro/claro
const darkModeIcon = document.querySelector('#darkMode-icon');

// Função para aplicar o tema
const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        // Assegura que o ícone correto esteja visível
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
    } else {
        document.body.classList.remove('dark-mode');
        // Assegura que o ícone correto esteja visível
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
    }
};

// Verifica o localStorage ao carregar a página
// 'DOMContentLoaded' garante que o HTML esteja completamente carregado antes de tentar acessar elementos
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme); // Aplica o tema salvo se existir
    } else {
        // Se não houver tema salvo, define um padrão (ex: 'light')
        // Ou você pode optar por não definir nada e usar o CSS padrão se for 'light' por default
        applyTheme('light'); 
    }
});

// Event listener para o clique no ícone de modo escuro/claro
darkModeIcon.onclick = () => {
    // Alterna a classe 'dark-mode' no corpo do documento
    document.body.classList.toggle('dark-mode');

    // Altera o ícone e salva a preferência no localStorage
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark'); // Salva 'dark' no localStorage
    } else {
        darkModeIcon.classList.remove('bx-sun');
        darkModeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'light'); // Salva 'light' no localStorage
    }
};

    /* Scroll Reveal */

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 50
     });

     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });




    // Contador animado ao aparecer na tela
const counters = document.querySelectorAll('.counter');
let hasCounted = false;

function animateCounters() {
    if (hasCounted) return;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const increment = target / (duration / 20);

        let count = 0;

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.floor(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });

    hasCounted = true;
}

// Detecta se a seção entrou na tela
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('#statistics');
    const sectionTop = statsSection.offsetTop;
    const sectionHeight = statsSection.offsetHeight;

    if (window.scrollY + window.innerHeight > sectionTop + sectionHeight / 4) {
        animateCounters();
    }
});
