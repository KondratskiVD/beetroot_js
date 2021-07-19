//4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.


const auditorium = [
    {
        name: 'biology',
        numberOfSeats: 18,
        facultyName: 'Department of Biology',
    },
    {
        name: 'zoology',
        numberOfSeats: 19,
        facultyName: 'Department of Biology',
    },
    {
        name: 'biochemistry',
        numberOfSeats: 20,
        facultyName: 'Department of Biology',
    },
    {
        name: 'geography',
        numberOfSeats: 16,
        facultyName: 'Department of Geography',
    },
]

//Вывод на экран всех аудиторий;

function showAllAuditoriums() {

    let allAuditoriums = [];

    for (let i = 0; i < auditorium.length; i++) {
        allAuditoriums.push(auditorium[i].name);
    }
    return allAuditoriums;
}

console.log(showAllAuditoriums());


//Вывод на экран аудиторий для указанного факультета;

function showDepartmentAuditoriums() {

    let departmentAuditoriums = [];

    for (let i = 0; i < auditorium.length; i++) {
        if (auditorium[i].facultyName === 'Department of Biology')
        departmentAuditoriums.push(auditorium[i].name);
    }
    return departmentAuditoriums;
}

console.log(showDepartmentAuditoriums());


//Функция сортировки аудиторий по количеству мест;

function sortBySeats (auditorium) {

    let sortbyseats = auditorium.sort((a, b) => a.numberOfSeats - b.numberOfSeats);
   
    return sortbyseats;
}
console.log(sortBySeats(auditorium));


//Функция сортировки аудиторий по названию (по алфавиту);

function sortByName (auditorium) {

    let sortbyname = auditorium.sort ((a, b) => {

        if (a.name < b.name) return -1;
        return (a.name > b.name) ? 1 : 0;   
    }
    );
    console.log(sortbyname);
}
sortByName(auditorium);