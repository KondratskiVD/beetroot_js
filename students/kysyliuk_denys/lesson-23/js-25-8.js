let a=prompt("Час")
let b=prompt("Минута")
let c=prompt("Секунда")
let myMath = math()

function math() {
    for(a=(a*60*60); b=(b*60);) {
        return(a+b+c)
    }
}
prompt(myMath + "Секунд")