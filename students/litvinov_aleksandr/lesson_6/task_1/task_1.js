
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    set newRadius(radius) {
        this.radius = radius;
    }
    get newRadius() {
        return this.radius
    }
}

const circle1 = new Circle(12, 'red')
console.log(circle1.radius);
circle1.newRadius = 120
console.log(circle1.newRadius);

const inpRadius = document.getElementById('radius');
const button = document.getElementById('show');
button.addEventListener('click', show)
const circleShow = document.getElementById('circle1');
function show() {
    circleShow.style.width = circleShow.style.height = inpRadius.value + 'px'
    circleShow.style.backgroundColor = 'red'
    circleShow.style.borderRadius = '50%'
}




