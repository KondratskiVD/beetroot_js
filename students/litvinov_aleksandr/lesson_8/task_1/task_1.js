let divText = document.getElementById('div-text');
let areaText = document.getElementById('area-text');
let textNode = document.createTextNode('JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it is used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.')
divText.appendChild(textNode)

document.body.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.keyCode === 69) {
        e.preventDefault()
        divText.style.display = 'none'
        areaText.style.display = 'block'
        areaText.value = divText.textContent
    }
})

document.body.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.keyCode === 187) {
        e.preventDefault()
        areaText.style.display = 'none'
        divText.style.display = 'block'
        divText.textContent = areaText.value
    }
})