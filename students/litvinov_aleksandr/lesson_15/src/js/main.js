import '../index.html'
import '../scss/style.scss'

const btn = document.getElementById('btn')
const header = document.getElementById('header')
btn.addEventListener('click', changeBackground)

function changeBackground() {
    header.classList.toggle('change')
}