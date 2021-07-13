
let styles1 = [
    { property: 'color', value: 'red' },
    { property: 'text-align', value: 'center' },
    { property: 'font-size', value: '40px' },
    { property: 'text-decoration', value: 'underline' },
    { property: 'font-family', value: 'sans-serif' }
]

let styles2 = [
    { property: 'color', value: 'yellow' },
    { property: 'text-align', value: 'left' },
    { property: 'font-size', value: '100px' },
    { property: 'text-decoration', value: 'linethrough' },
    { property: 'font-family', value: 'sans-serif' }
]

let myStyle = []
let a = ''

let setText = (array, text) => {
    for (item of array) {
        myStyle.push(`${item.property}:${item.value}`)
    }
    a = myStyle.join('; ')
    return document.write(`<p style="${a}" > ${text} </p>`)
}

setText(styles1, 'JavaScript')

