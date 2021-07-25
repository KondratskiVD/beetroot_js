class Circle {
    constructor(radius) {
        this.radius = radius;
    }


    get r() {
        return this.radius;
    }


    set additionalRad(additionalRad) {
        this.radius = additionalRad;
    }


    get diametr() {
        return this.radius * 2;
    }


    circleArea() {
        let circleArea = Math.floor(Math.PI * (this.radius ** 2));
        return circleArea;
    }


    circleLength() {
        let circleLength = Math.floor(2 * Math.PI * this.radius);
        return circleLength;
    }
}


const circle = new Circle(30);


console.log(circle);
console.log(circle.r);
console.log(circle.diametr);
console.log(circle.circleArea());
console.log(circle.circleLength());


circle.additionalRad = 25;
console.log(circle);
console.log(circle.r);
console.log(circle.diametr);
console.log(circle.circleArea());
console.log(circle.circleLength());
