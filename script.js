const block = document.querySelector('.container');
const card = document.querySelector('.card');

const img = document.querySelectorAll('.img');
const circle = document.querySelector('.circle');
const title = document.querySelector('h3');
const text = document.querySelector('p');
const btns = document.querySelectorAll('.btn-box');
const link = document.querySelector('a');


block.addEventListener('mousemove', (e) =>{
    const x = e.clientX;
    const y = e.clientY;

    const winX = window.innerWidth;
    const winY = window.innerHeight;

    const posX = winX / 2 - x;
    const posY = winY / 2 - y;

    card.style.transition = '0s';
    card.style.transform = `rotateY(${posY / 15}deg) rotateX(${posX / 15}deg)`;
    circle.style.transform = `scale(1)`;
    img.style.transform = `rotate(-360deg)`;
});

block.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0) rotateX(0)`;
    circle.style.transform = `scale(0)`;
    img.style.transform = `rotate(0)`;
})


btns.forEach((box) => {
    box.addEventListener('click', () => {
        for (let i = 0; i < box.length; i++) {
            box[i].classList.remove('active');
            content[i].classList.remove('active');
        }
        box.classList.add('active');
        const index = box.getAttribute('data-');
        btns[index].classList.add('active');
    });

});