let q1 = prompt('What is going on? Options: a) "Donno", b) "5", c)"JavaScript"'),
    q2 = prompt('SUP? Options: a) "Good", b)"Comme ci comme ca", c) "JavaScript'),
    q3 = prompt('What is the approximate percentage mass of protein in molecule of hemoglobin (including water content)? Options: a) "96", b) "35", c) "%(KS&*"8'),
    a = 0;
switch(q1) {
    case 'c':a += 2
    break;
}
switch(q2) {
    case 'c':a += 2
    break;
}
switch(q3) {
    case 'b':a += 2;
    break;
}
alert(`Your score is ${a}`)