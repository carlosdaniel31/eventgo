// abre e fecha o menu quando clicar no ícone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

// quando clicar em algum item do menu, esconda o menu
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

//mudar o header da página quando der o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})

// carousel de testemunhos com Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWapperSize: true
        }
    }
})

// scroll suave com ScrollReveal
const scrollReveal = ScrollReveal({
    origin: 'top', 
    distance: '30px',
    duration: 900,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,

    { interval:100}
)

// botão voltar para o topo 
const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
})