const textStyle = [
    {
        styleName: 'color',
        value: 'blue'
    },
    {
        styleName: 'text-decoration',
        value: 'overline'
    },
    {
        styleName: 'size',
        value: '30px'
    },
    {
        styleName: 'text-transform',
        value: 'uppercase'
    }
]
console.log(textStyle);

function addElem (collection, text) {

    let newString = '<p>' + text + '</p>';
    document.write(newString);
    let newParagraf = document.querySelector('p');
    let newStyleParagraf;

    for (let item  of collection){
       console.log(item.styleName);
       newStyleParagraf = item.styleName + ':' + item.value + ';' + newStyleParagraf;
       newParagraf.style = newStyleParagraf;
    }        
}
let text = 'добавленый стилизированный текст';
addElem(textStyle, text);