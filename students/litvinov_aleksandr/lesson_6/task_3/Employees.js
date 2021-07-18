class Employees {
    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }
}

let employee1 = new Employees('Aleksandr', 'Trainee', 200)
let employee2 = new Employees('Petya', 'Junior', 500)
let employee3 = new Employees('Vasya', 'Strong junior', 800)
let employee4 = new Employees('Aleksey', 'Middle', 1500)
let employee5 = new Employees('Andrey', 'Senior', 3000)
const staff = []
staff.push(employee1, employee2, employee3, employee4, employee5)

console.log(staff);

class EmpTable {
    constructor(array) {
        this.array = array
    }

    getHtml() {
        const table = document.getElementById('table');
        const array = this.array;
        const head = document.createElement('tr')
        const th1 = document.createElement('th')
        const th2 = document.createElement('th')
        const th3 = document.createElement('th')
        th1.innerHTML = 'Name'
        th2.innerHTML = 'Position'
        th3.innerHTML = 'Salary $'
        table.append(head);
        head.append(th1)
        head.append(th2)
        head.append(th3)
        for (let i in array) {
            let tr = document.createElement("tr");
            table.append(tr);
            for (let k in array[i]) {
                let td = document.createElement("td");
                td.innerHTML = array[i][k];
                tr.append(td);

            }
        }
    }
}

const obj = new EmpTable(staff)
obj.getHtml(staff)