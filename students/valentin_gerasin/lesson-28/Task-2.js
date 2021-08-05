class marker {
    constructor(color, volume) {
        this.color = color;
        this.volume = +volume;
    }


    print(string) {
        let newString = '';
        for (let a of string) {
            if (this.volume > 0) {
                newString = newString + a;
                if (a !== ' ') {
                    this.volume = this.volume - 0.5;
                }
            }
        }
        console.log(newString);
        document.write(`<p style="color: ${this.color}">${newString}<p>`);
    }
}

class reloadingMarker extends marker {
    forReloadingMarker(addedVolume = 0) {
        this.volume = this.volume + addedVolume;
    }
}

const markerType = new marker('blue', 10);
console.log(markerType);
markerType.print('555 555 555 555 555 555 555 555 555 555 555 555 555 555');

markerType.volume = 15;
markerType.print('555 555 555 555 555 555 555 555 555 555 555 555 555 555');



const refuelingMarker = new reloadingMarker("brown", 5);
console.log(refuelingMarker);
refuelingMarker.forReloadingMarker(8);
refuelingMarker.print('555 555 555 555 555 555 555 555 555 555 555 555 555 555');

refuelingMarker.forReloadingMarker(9.5);
refuelingMarker.print('555 555 555 555 555 555 555 555 555 555 555 555 555 555');
