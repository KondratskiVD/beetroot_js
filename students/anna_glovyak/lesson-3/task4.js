let rectangleHeight = prompt("Введите длинну прямоугольника");
let rectangleWidth = prompt("Введите ширину прямоугольника");


const calcRectangleArea = function (a, b = a) { //поставила по умолчанию значение для b. Если в функцию передать только один параметр, то b=a и вычесляеться площадь квадрата
    return alert(`Площадь прямоугольника ${a * b}`);
}
calcRectangleArea(rectangleHeight, rectangleWidth); //есди вызвать с одним параметром, то посчитает площадь квадрата
