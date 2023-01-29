const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.heart-container', {scale: 0}, {scale:1, ease:"elastic.out(1, 0.4)", duration: 1.5})
tl.fromTo('.heart', {opacity:0, x:-50, rotation: '-45deg'},{opacity: 1, x:0, rotation: '0deg'}, '<50%')
tl.fromTo('.text', {x:30, opacity: 0}, {x: 0, opacity: 1}, '<')

const button = document.querySelector('button');

button.addEventListener('click', () => {
    gsap.to('.heart-container', {opacity: 0, y: 100, duration:0.75})
}) 