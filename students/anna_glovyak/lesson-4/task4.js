const auditorium = [
    {
        roomName: 'laboratory',
        roomSits: 17,
        facultyName: 'chemistry'
    },
    {
        roomName: 'big Auditorium',
        roomSits: 20,
        facultyName: 'mathematics'
    },
    {
        roomName: 'classroom',
        roomSits: 12,
        facultyName: 'philosophy'
    },
]

function showAuditories (collection){
    for (let item of collection) {
        console.log(`${item.roomName} - ${item.roomSits} sits, for ${item.facultyName}`);
    }
}
showAuditories(auditorium);

function showSpecialAuditories (collection, faculty){
    for (let item of collection) {
        if(item.facultyName == faculty) {
            console.log(`${item.roomName} - ${item.roomSits} sits, for ${item.facultyName}`);
            return item;
        }
    }
}
let nameNeddedFaculty = prompt('Введите название факультета');
showSpecialAuditories(auditorium, nameNeddedFaculty);

function sortSits (collection) {
    let sortauditorium = collection.sort((a, b) => a.roomSits - b.roomSits);
    console.log(sortauditorium);
    return sortauditorium;
}
sortSits(auditorium);

function sortByName (collection) {

    let sortByName = collection.sort(function(a, b){
        var x = a.roomName.toLowerCase();
        var y = b.roomName.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
    console.log(sortByName);
}
sortByName(auditorium);