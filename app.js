let intro = document.querySelector('.intro')
let logo = document.querySelector('.logo-header')
let logoSpan = document.querySelectorAll('.logospan')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2000);

    })
})

ScrollReveal().reveal('.navbar', {
    delay: 2500,
    mobile: false
});

ScrollReveal().reveal('.intro1', {
    delay: 2500,
    distance:"200px",
    scale: 0.6,
    origin:"left",
    mobile: false
});

ScrollReveal().reveal('.intro2', {
    delay: 2800,
    distance:"100px",
    origin:"left",
    mobile: false
});

ScrollReveal().reveal('.intro3', {
    delay: 3100,
    distance:"100px",
    origin:"left",
    mobile: false
});
ScrollReveal().reveal('.btn-web', {
    delay: 3400,
    opacity: 0,
    origin: "left",
    distance: "50px",
    interval: 300,
    mobile: false
});
ScrollReveal().reveal('.aboutme', {
    delay: 100,
    origin: "left",
    distance: "100px",
});

ScrollReveal().reveal('.abouticon', {
    delay: 300,
    origin: "left",
    distance: "30px",
    interval: 300
});

ScrollReveal().reveal('.col-imgMe', {
    delay: 350,
    distance:"200px",
    origin:"right",
    mobile: false
});

ScrollReveal().reveal('.portfolio', {
    delay: 200,
    origin: "bottom",
    distance: "200px",
    interval: 100
});

ScrollReveal().reveal('.project', {
    delay: 200,
    distance: "50px",
    interval: 300
});


ScrollReveal().reveal('.contactslide1', {
    delay: 200,
    origin: "bottom",
    distance: "200px",
    interval: 100
});

ScrollReveal().reveal('.contactslide2', {
    delay: 500,
    origin: "bottom",
    distance: "100px",
});

ScrollReveal().reveal('.contactbutton', {
    delay: 650,
    origin: "left",
    distance: "500px",
});

ScrollReveal().reveal('.intro1', {
    delay: 100,
    distance:"100px",
    origin:"left",
    desktop: false
});

ScrollReveal().reveal('.intro2', {
    delay: 350,
    distance:"100px",
    origin:"left",
    desktop: false
});

ScrollReveal().reveal('.intro3', {
    delay: 600,
    distance:"100px",
    origin:"left",
    desktop: false
});

ScrollReveal().reveal('.btn-web', {
    delay: 800,
    opacity: 0,
    origin: "left",
    distance: "50px",
    interval: 200,
    desktop: false
});

ScrollReveal().reveal('.imgMobile', {
    delay: 700,
    distance:"100px",
    origin:"left",
    desktop: false
});