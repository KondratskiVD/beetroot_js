let date = prompt('Enter date using format "DD-MM-YYYY"(for example "01-02-1815")'),
    d = date[0] + date[1],
    m = date[3] + date[4],
    y = date[6] + date[7] + date[8] + date[9]
    newd = ++d,
    even = m == 04 || m == 06 || m == 09 || m == 11,
    leapYear = y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);
    
if (m == '02' && newd > '28' && !leapYear) {
    alert(`01-03-${y}`)
}
else if (m == '02' && newd > '29' && leapYear) {
    alert(`01-03-${y}`)
} 
else if (even && newd > 30) {
    alert(`01-${++m}-${y}`)
}

else if (newd > '31' && m == 12) {
    alert(`01-01-${++y}`)
}
else if (newd > '31') {
    alert(`01-${++m}-${y}`)
}
else {
    alert(`${newd}-${m}-${y}`)
};