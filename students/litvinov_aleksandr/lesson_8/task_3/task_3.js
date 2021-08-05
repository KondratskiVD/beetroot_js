
const divText = document.getElementById('frame')
const resize = document.getElementById('resize')

const startResize = e => {
    e.preventDefault;
    window.addEventListener("mousemove", beginResize);
    window.addEventListener("mouseup", endResize);
};

const beginResize = e => {
    divText.style.width = (e.clientX - divText.offsetLeft) + "px";
    divText.style.height = (e.clientY - divText.offsetTop) + "px";
};
const endResize = () => {
    window.removeEventListener('mousemove', beginResize);
    window.removeEventListener('mouseup', endResize);
};

resize.addEventListener("mousedown", startResize);