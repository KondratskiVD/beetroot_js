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
        let str = '<table style= "max-width: 400px; width: 100%; text-align: center; margin: 100px auto; border: 1px solid #000; border-spacing: 5px; ">';
        let style = ' style="background: #6f77e9; color: #fff;"'
        document.write(str);

        for (let i in this.array) {
            let newStr = '';
            newStr = `${newStr}<tr${style}><td${style}>${this.array[i].name}</td><td${style}>${this.array[i].position}</td><td${style}>${this.array[i].salary}</td></tr>`
            document.write(newStr);
        }
        document.write('</table>')
    }
}
const obj = new EmpTable(staff)
obj.getHtml(staff)

