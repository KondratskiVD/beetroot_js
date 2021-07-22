
let button = document.createElement('button')
let btnText = document.createTextNode('change')
let buttonText = document.createTextNode('Turn On')
let traficLights = document.createElement('div')
let red = document.createElement('div')
let orange = document.createElement('div')
let green = document.createElement('div')
red.classList.add('default__color', 'color__red')
orange.classList.add('default__color')
green.classList.add('default__color')
document.body.append(traficLights)
button.append(btnText)
traficLights.append(button, red, orange, green)
traficLights.classList.add('trafic-lights')

drawCircle = (div, size) => {
    div.style.width = div.style.height = size + 'px'
    div.style.borderRadius = '50%'
    div.style.marginBottom = '5px'
}

drawCircle(red, 50)
drawCircle(orange, 50)
drawCircle(green, 50)

button.addEventListener('click', () => {

    if (red.classList.contains("color__red")) {
        red.classList.remove("color__red");
        orange.classList.add("color__orange");
    } else if (orange.classList.contains("color__orange")) {
        orange.classList.remove("color__orange");
        green.classList.add("color__green");
    } else if (green.classList.contains("color__green")) {
        green.classList.remove("color__green");
        red.classList.add("color__red");
    }

})