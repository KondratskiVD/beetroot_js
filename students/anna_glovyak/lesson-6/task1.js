class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get Radius(){
        return this.radius;
    }

    set newRadius(newRadius){
        this.radius = newRadius;
    }
    get Diametr(){
        return this.radius * 2;
    }
    calcCircleSquare(){
        let circleSquare = Math.floor(Math.PI * (this.radius ** 2));
        return circleSquare;
    }
    calcCircleLength(){
        let circleLength = Math.floor(2 * Math.PI * this.radius);
        return circleLength;
    }
}

const circle = new Circle(2);
console.log(circle);
console.log(circle.Radius);
console.log(circle.Diametr);
console.log(circle.calcCircleSquare());
console.log(circle.calcCircleLength());
circle.newRadius = 6;
console.log(circle);
console.log(circle.Radius);
console.log(circle.Diametr);
console.log(circle.calcCircleSquare());
console.log(circle.calcCircleLength());


