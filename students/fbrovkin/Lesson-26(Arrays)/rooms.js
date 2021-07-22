const rooms = [
  { name: 101, seats: 20, facultyName: "rocket science" },
  { name: 205, seats: 10, facultyName: "CSI sandbox" },
  { name: 104, seats: 14, facultyName: "Augmentation of dairy production" },
  { name: 995, seats: 19, facultyName: "front-end" },
  { name: 508, seats: 17, facultyName: "Augmentation of dairy production" },
];

const group = { groupName: "molodci", students: 18, facultyName: "front-end" };

function getRooms(arr) {
  let display = "";
  arr.forEach((room) => {
    display += `${room.name} `;
  });
  console.log(display);
}

function filterByFaculty(faculty, arr) {
  const newArr = arr.filter((item) => faculty === item.facultyName);
  getRooms(newArr);
}

function roomForGroup(obj, arr) {
  const newArr = arr.filter(
    (room) => obj.facultyName === room.facultyName && obj.students <= room.seats
  );
  getRooms(newArr);
}

function sortBySeats(arr) {
  arr.sort((a, b) => (a.seats > b.seats ? 1 : -1));
  const newArr = [...arr];
  console.log(newArr);
}

function sortByAlphabet(arr) {
  arr.sort((a, b) => (a.facultyName > b.facultyName ? 1 : -1));
  const newArr = [...arr];
  console.log(newArr);
}

getRooms(rooms);
filterByFaculty("Augmentation of dairy production", rooms);
roomForGroup(group, rooms);
sortBySeats(rooms);
sortByAlphabet(rooms);
