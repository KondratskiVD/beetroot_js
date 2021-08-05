const textStyles = [
    {
        styleName: 'color',
        value: 'green'
    },

    {
        styleName: 'font-size',
        value: '40px'
    },

    {
        styleName: 'text-decoration',
        value: 'underline'
    },

]

function styles(list, text) {

    let textString = '<p>' + text + '</p>';
    document.write(textString);
    let paragraf = document.querySelector('p');
    let paragrafWithStyle;

    for (let item of list) {
        paragrafWithStyle = item.styleName + ':' + item.value + ';' + paragrafWithStyle;
        paragraf.style = paragrafWithStyle;
    }
}
let text = 'Тест стилей текста';
styles(textStyles, text);