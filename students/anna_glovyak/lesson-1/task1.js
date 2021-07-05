let age = prompt("How old are you?");

let message = (age >= 0 && age < 12) ? "You are child":
(age >= 12 && age < 18) ? "You are teenager":
(age >= 18 && age < 60) ? "You are adult":
"You are pensioner";
alert(message);