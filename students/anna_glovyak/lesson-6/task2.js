class Marker {

    constructor(color, quantity){
        this.color = color;
        this.quantity = Number(quantity);
    }

    print(str){

        let newStr ='';
        
        for(let i of str){
            if (this.quantity > 0){
                newStr = newStr + i;
                if(i !== ' '){
                    this.quantity -= 0.5;
                } 
            }
        }
        console.log(newStr);
        document.write(`<p style="color: ${this.color}"> ${newStr} <p>`);
    }
}

class RefuelingMarker extends Marker{
    
    toRefuelMarker(addedQuantity = 0){
        this.quantity += addedQuantity;
    }
}

const marker = new Marker('red', 7);
console.log(marker);
marker.print('Пишу строку пока не закончится краска в маркере');
marker.quantity = 12.9;  ///меняем процент краски, и пишем больше
marker.print('Пишу строку пока не закончится краска в маркере');

const refuelingMarker = new RefuelingMarker("#560011", 2);///создаю заправляющийся макрер
refuelingMarker.toRefuelMarker(3); //дозаправляю
refuelingMarker.print('Пишу заправляющимся маркером');
refuelingMarker.toRefuelMarker(9);//снова заправляю 
refuelingMarker.print('Пишу заправляющимся маркером');
