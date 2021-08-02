let a = prompt("Введите длину");
let b = prompt("Введите ширину");
let myMath = math();

function math(){
    if(a!=''&&b!=''){
        return a*b;
    }
    else if (a!=''&&b=='') {
        return a*a;
    }
    else if (a==''&&b!='') {
        return b*b; 
    }
}
prompt(myMath)