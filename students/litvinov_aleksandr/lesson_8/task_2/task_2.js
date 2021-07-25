
class Employees {
    constructor(name, position, speciality, age, salary) {
        this.name = name
        this.position = position
        this.speciality = speciality
        this.age = age
        this.salary = salary
    }
}

let employee1 = new Employees('Aleksandr', 'Trainee', 'frontend', 22, 200)
let employee2 = new Employees('Petya', 'Junior', 'backend', 31, 500)
let employee3 = new Employees('Vasya', 'Strong junior', 'java', 25, 800)
let employee4 = new Employees('Aleksey', 'Middle', 'devops', 22, 2500)
let employee5 = new Employees('Andrey', 'Senior', 'frontend', 35, 5000)
let employee6 = new Employees('Ivan', 'Trainee', 'designer', 17, 300)
let employee7 = new Employees('Olga', 'Junior', 'javascript', 23, 600)
let employee8 = new Employees('Vitaliy', 'Strong junior', 'react', 27, 900,)
let employee9 = new Employees('Oleg', 'Middle', 'backend', 32, 1700)
let employee10 = new Employees('Inna', 'Senior', 'pyton', 45, 3500)

const staff = []
staff.push(employee1, employee2, employee4, employee3, employee5, employee6, employee7, employee8, employee9, employee10)

let createTable = (array) => {
    const table = document.getElementById('table');
    const head = document.createElement('tr')
    const tBody = document.createElement('tbody');
    const th1 = document.createElement('th')
    const th2 = document.createElement('th')
    const th3 = document.createElement('th')
    const th4 = document.createElement('th')
    const th5 = document.createElement('th')
    th4.setAttribute('type', 'number')
    th5.setAttribute('type', 'number')
    th1.innerHTML = 'Name'
    th2.innerHTML = 'Position'
    th3.innerHTML = 'Speciality'
    th4.innerHTML = 'Age'
    th5.innerHTML = 'Salary $'
    table.append(head)
    table.append(tBody)
    head.append(th1)
    head.append(th2)
    head.append(th3)
    head.append(th4)
    head.append(th5)
    for (let i in array) {
        let tr = document.createElement("tr");
        tBody.append(tr);
        for (let j in array[i]) {
            let td = document.createElement("td");
            td.innerHTML = array[i][j];
            tr.append(td);
        }
    }
    const heads = document.querySelectorAll('th')
    heads.forEach((head, index) => {
        head.addEventListener('click', () => {
            sortColumn(index)
        })
    })

    const rows = tBody.querySelectorAll('tr')

    const transform = (index, content) => {
        const type = heads[index].getAttribute('type');
        switch (type) {
            case 'number':
                return parseInt(content);
            case 'string':
            default:
                return content;
        }
    };

    const sortColumn = (index) => {
        const newRows = Array.from(rows)
        newRows.sort((rowA, rowB) => {
            const cellA = rowA.querySelectorAll('td')[index].innerHTML
            const cellB = rowB.querySelectorAll('td')[index].innerHTML
            const a = transform(index, cellA);
            const b = transform(index, cellB);
            switch (true) {
                case a > b: return 1
                case a < b: return -1
                case a === b: return 0
            }
        });

        [...rows].forEach((row) => tBody.removeChild(row))

        newRows.forEach((newRow) => tBody.appendChild(newRow))
    };

}
createTable(staff)

