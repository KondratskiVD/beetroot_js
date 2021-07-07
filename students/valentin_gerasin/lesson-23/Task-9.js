let questOne = prompt('1+4=: 8; 5; 7')
let questTwo = prompt('5+7=: 10; 15; 12')
let questThree = prompt('8+9=: 17; 27; 7')
let score = 0

if (questOne == 5)
    score += 2
if (questTwo == 12)
    score += 2
if (questThree == 17)
    score += 2
alert('Вы набрали: ' + score);