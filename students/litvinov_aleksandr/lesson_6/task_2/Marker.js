
class Marker {
    constructor(color, amount) {
        this.color = color
        this.amount = amount

    }
    write(text) {
        let p = document.getElementById('text');
        for (let i = 0; i < text.length; i++) {
            if (this.amount !== 0) {
                if (text[i] === ' ') {
                    this.amount += 0.5
                }
                p.innerHTML += text[i]
                p.style.color = this.color
                this.amount -= 0.5;
            } else {
                document.write('<p style="color: red; font-size:18px; text-transform:uppercase;">Marker is over</p>')
                break
            }
        }
    }
}

class FillMarker extends Marker {
    fill(amount) {
        if (amount > 100) {
            amount = 100
        } else {
            this.amount += amount
        }
    }
}
let marker = new FillMarker('#000', 5)

marker.fill(15)
const t = 'Lorem, ipsum fugit maiores. Officia dignissimos odit repellat vitae qui iusto ipsum, facere mollitia! Consectetur'
marker.write(t)