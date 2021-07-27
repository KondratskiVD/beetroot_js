function openWindow() {
    let modalWindow = document.querySelector('#modal')
    modalWindow.style.display = 'block';
    let openButton = document.querySelector('#openButton')
    openButton.style.display = 'none'
}

function closeWindow() {
    let modalWindow = document.querySelector('#modal')
    modalWindow.style.display = 'none';
    let openButton = document.querySelector('#openButton')
    openButton.style.display = 'block'
}