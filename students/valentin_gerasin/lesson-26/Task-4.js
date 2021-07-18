const auditoriums = [
    {
        auditName: 'Аудитория для работы с макетами',
        sits: 15,
        faculty: 'Инженерный факультет'
    },
    {
        auditName: 'Аудитория информационных технологий',
        sits: 10,
        faculty: 'Факультет информатики'
    },
    {
        auditName: 'Лекционная аудитория',
        sits: 20,
        faculty: 'Филологический факультет'
    }
]

function auditoriumsList(list) {
    for (let item of list) {
        console.log(`Список свободных аудиторий: ${item.auditName} - ${item.sits} подходит для ${item.faculty}`);
    }
}
auditoriumsList(auditoriums)

function chosenFaculty() {
    let f = prompt('Укажите цифрой ваш факультет: 1.)Инженерный факультет; 2.)Факультет информатики; 3.)Филологический факультет')
    if (f == 1) {
        alert('Ваш факультет - Инженерный факультет, для Вас подойдет Аудитория для работы с макетами в которой 10 мест')
    } else if (f == 2) {
        alert('Ваш факультет - Факультет информатики, для Вас подойдет IT аудитория в которой 15 мест')
    } else if (f == 3) {
        alert('Ваш факультет - Филологический факультет, для Вас подойдет Лекционная аудитория в которой 20 мест')
    } else if (f < 1 || f > 3) {
        alert('Вы ввели неподходящий номер факультета')
    }
}
chosenFaculty()

function sortBySits(list) {
    let sitSort = list.sort((x, y) => x.sits - y.sits);
    console.log(sitSort);
    return sitSort;
}
sortBySits(auditoriums)

function sortByName(newList) {
    let sortByName = newList.sort(function (a, b) {
        let x = a.auditName.toLowerCase();
        let y = b.auditName.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    console.log(sortByName);
}
sortByName(auditoriums);























/*
function showAuditories(collection) {
    for (let item of collection) {
        console.log(`${item.auditName} - ${item.sits} места, для ${item.faculty}`);
    }
}
showAuditories(auditoriums);

function showSpecialAuditories(collection, faculty) {
    for (let item of collection) {
        if (item.faculty == faculty) {
            console.log(`${item.auditName} - ${item.sits} места, для ${item.faculty}`);
            return item;
        }
    }
}
let nameNeddedFaculty = prompt('Введите название факультета');
showSpecialAuditories(auditoriums, nameNeddedFaculty);

function sortSits(collection) {
    let sortauditorium = collection.sort((a, b) => a.sits - b.sits);
    console.log(sortauditorium);
    return sortauditorium;
}
sortSits(auditoriums);

function sortByName(collection) {

    let sortByName = collection.sort(function (a, b) {
        var x = a.auditName.toLowerCase();
        var y = b.auditName.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    console.log(sortByName);
}
sortByName(auditoriums);
*/