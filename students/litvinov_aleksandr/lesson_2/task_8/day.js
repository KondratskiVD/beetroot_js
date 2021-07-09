cycle()

function cycle() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday'];
    for (i = 0; i < days.length; i++) {
        alert(`${days[i]}!    Do you want to see next day?`);
    }
}