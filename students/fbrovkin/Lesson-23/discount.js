let s = prompt('Enter your purchase sum to apply discount');

if (s >= 0 && s < 200) {
    alert(`You don't have a discount =( Your paycheck is ${s}`)
}
else if (s >= 200 && s < 300) {
    alert(`Your paycheck (including 3% discount) is ${s - s * 0.03}`)
}
else if (s >= 300 && s < 500) {
    alert(`Your paycheck (including 5% discount) is ${s - s * 0.05}`)
}
else if (s >= 500) {
    alert(`Your paycheck (including max discount) is ${s - s * 0.07}`)
}
else {
    alert('Invalid data')
};
