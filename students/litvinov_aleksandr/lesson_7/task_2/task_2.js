let overlay = document.querySelector('.popup__overlay')
let content = document.querySelector('.popup__content')
let button = document.getElementById('show-popup');
let close = document.getElementById('close');

button.addEventListener('click', () => {
    overlay.classList.add('active')
    content.classList.add('active')
})

close.addEventListener('click', () => {
    overlay.classList.remove('active')
    content.classList.remove('active')
})

document.addEventListener('click', (e) => {
    if (e.target === content) {
        overlay.classList.remove('active')
        content.classList.remove('active')
    }
})
