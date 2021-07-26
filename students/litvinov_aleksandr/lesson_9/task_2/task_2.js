
$('#btnPlus').on('click', () => {
    $('#result').html(Number($('#num1').val()) + Number($('#num2').val()))
})
$('#btnMin').on('click', () => {
    $('#result').html(Number($('#num1').val()) - Number($('#num2').val()))
})
$('#btnMult').on('click', () => {
    $('#result').html(Number($('#num1').val()) * Number($('#num2').val()))
})
$('#btnDiv').on('click', () => {
    $('#result').html(Number($('#num1').val()) / Number($('#num2').val()))
})


