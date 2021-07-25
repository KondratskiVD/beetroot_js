class Employee {
    constructor(name, surname, position, salary) {
        this.name = name
        this.surname = surname
        this.position = position
        this.salary = salary
    }

}

const employees = [];

function addNewEmployees(name, surname, position, salary) {
    let employee = new Employee(name, surname, position, salary);
    employees.push(employee);
}

addNewEmployees('Name', 'Surname', 'Position', 'Salary');
addNewEmployees('Ilya', 'Frolov', 'senior', 4000);
addNewEmployees('David', 'Karpov', 'mid', 2000);
addNewEmployees('Vladislav', 'Fedotov', 'junior', 1000);
addNewEmployees('Andrey', 'Komarov', 'trainee', 500);
console.log(employees);


class table {
    constructor(array) {
        this.array = array
    }

    getHtml() {
        let string = '<table  style="margin: 0 auto; border-collapse: collapse; border: 2px solid black; font-size: 20px;">';
        let style = ' style="border: 2px solid black;"'
        document.write(string);

        for (let a in this.array) {
            let newString = '';
            newString = `${newString}<tr${style}><td${style}>${this.array[a].name}</td><td${style}>${this.array[a].surname}</td><td${style}>${this.array[a].position}</td><td${style}>${this.array[a].salary}</td></tr>`
            document.write(newString);
        }
        document.write('</table>')
    }
}

const empTable = new table(employees);
empTable.getHtml();




