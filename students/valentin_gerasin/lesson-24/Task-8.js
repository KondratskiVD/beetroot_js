
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    currDay = (currDay + 1) % days.length;
}
