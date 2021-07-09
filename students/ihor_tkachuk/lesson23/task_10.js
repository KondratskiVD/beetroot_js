let date = prompt('Введите дату в формате дд/мм/гггг'),
    day = date[0] + date[1],
    month = date[3] + date[4],
    yearAny = date[6] + date[7] + date[8] + date[9]
    dayNew = ++day,
    month30 = month == 04 || month == 06 || month == 09 || month == 11,
    yearLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    
if (month == 02 && dayNew > 28 && !yearLeap) {
    alert(`01/03/${yearAny}`);
}
else if (month == 02 && dayNew > 29 && yearLeap) {
    alert(`01/03/${yearAny}`);
} 
else if (month30  && dayNew > 30) {
    alert(`01/${++month}/${yearAny}`);
}

else if (dayNew > 31 && month == 12) {
    alert(`01/01/${++yearAny}`);
}
else if (dayNew > 31) {
    alert(`01/${++month}/${yearAny}`);
}
else {
    alert(`${dayNew}/${month}/${yearAny}`);
}