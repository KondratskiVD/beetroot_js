let qtty = prompt('Enter amount to be exchanged');

let curr = prompt('Enter currency (EUR or UAH or AZN)');

let EUR = 1.13;

let UAH = 0.037;

let AZN = 0.59;

switch(curr){
    case 'EUR':alert(`You have got ${EUR * qtty} $`)        
    break;
    case 'UAH':alert(`You have got ${UAH * qtty} $`)
    break;
    case 'AZN':alert(`You have got ${AZN * qtty} $`)
    break;
    default:alert ('RTFM!');
}