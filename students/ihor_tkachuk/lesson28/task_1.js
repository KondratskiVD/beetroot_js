// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 


class Circle {
    constructor(_r) {
        this.r = _r;
    }
    get radius() {
        return this.r;
    }
    set radius(newRadius) {
        this.r = newRadius;    
    }
    get diameter() {
        return this.r * 2;
    }
    areaOfCircle() {
        let area = 3.14 * this.r * this.r;
        console.log(`Площадь окружности с радиусом ${this.r} равна ${area}`);
    }
    circumFerence() {
        let circuit = 2 * 3.14 * this.r;
        console.log(`Длина окружности с радиусом ${this.r} равна ${circuit}`);
    }
}

let circle = new Circle(10);
console.log(circle);
circle.areaOfCircle();
circle = new Circle(2);
circle.circumFerence();