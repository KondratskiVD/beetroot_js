let lights = document.querySelectorAll('.off-light');
let counter = 1;

function changeColor() {

    for (let i = 0; i < lights.length; i++) {
        lights[i].style.background = 'grey';
    }
    switch (counter) {
        case 1: lights[0].style.background = 'red';
            break;
        case 2: lights[1].style.background = 'yellow';
            break;
        case 3: lights[2].style.background = 'green';
    }
    (counter == 3) ? counter = 1 : counter++;
}