const tabFirst = document.getElementById('tab-1')
const tabSecond = document.getElementById('tab-2');
const tabThird = document.getElementById('tab-3');
const link1 = document.getElementById('link-1');
const link2 = document.getElementById('link-2');
const link3 = document.getElementById('link-3');

document.addEventListener("DOMContentLoaded", (ready) => {
    tabFirst.style.display = 'block'
    link1.classList.add('active')
    tabSecond.style.display = 'none'
    tabThird.style.display = 'none'
})

link1.addEventListener('click', () => {
    tabFirst.style.display = 'block'
    tabSecond.style.display = 'none'
    tabThird.style.display = 'none'
    link1.classList.add('active')
    link2.classList.remove('active')
    link3.classList.remove('active')
})

link2.addEventListener('click', () => {
    tabSecond.style.display = 'block'
    tabFirst.style.display = 'none'
    tabThird.style.display = 'none'
    link2.classList.add('active')
    link1.classList.remove('active')
    link3.classList.remove('active')
})

link3.addEventListener('click', () => {
    tabThird.style.display = 'block'
    tabSecond.style.display = 'none'
    tabFirst.style.display = 'none'
    link3.classList.add('active')
    link1.classList.remove('active')
    link2.classList.remove('active')
})

