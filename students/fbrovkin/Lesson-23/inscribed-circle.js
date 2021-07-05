let l = prompt('Enter circuit'),
    p = prompt('Enter perimeter'),
    s = p / 4,
    d = l / Math.PI;

if (d <= s) {
    alert('It fits! Congratulations! You can actually put it inside')
}
else {
    alert('C`mon man! Take a bigger square!')
}
