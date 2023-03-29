const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.container', { delay: 200 });

var typed = new Typed('.capa__texto', {
    strings: ['O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.'],
    typeSpeed: 30,
  });