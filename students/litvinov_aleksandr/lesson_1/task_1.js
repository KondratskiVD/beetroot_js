let age = prompt('Enter your age')

if (age >= 0 && age <= 12) {
    console.log('You are a child');

} else if (age > 12 && age <= 18) {
    console.log('You are a teenager');

} else if (age > 18 && age <= 60) {
    console.log('You are adult');

} else if (age > 60 && age < 122) {
    console.log('You are a pensioner');

} else if (age >= 122) {
    console.log('You entered incorrect age');
}