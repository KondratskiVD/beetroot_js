// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов.


class Marker {

    constructor(color, quantity) {
        this.color = color;
        this.quantity = Number(quantity);
    }

    print(str) {

        let newStr = '';

        for(let i of str) {
            if (this.quantity > 0) {
                newStr = newStr + i;
                if(i !== ' ') {
                    this.quantity -= 0.5;
                } 
            }
        }
        console.log(newStr);
        document.write(`<p style="color: ${this.color}; font-size: 28px"> ${newStr} <p>`);
    }
}

class RefuelingMarker extends Marker {

    toRefuelMarker(addedQuantity = 0) {
        this.quantity += addedQuantity;
    }
}

const marker = new Marker('blue', 10);
console.log(marker);
marker.print('Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.');

marker.quantity = 22.5;
marker.color = 'silver';  
marker.print('Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.');

const refuelingMarker = new RefuelingMarker('gold', 8); //создаем заправляющийся маркер;
refuelingMarker.toRefuelMarker(3); //дозаправка;
refuelingMarker.print('Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.');

refuelingMarker.toRefuelMarker(7); //снова дозаправка; 
refuelingMarker.print('Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.');