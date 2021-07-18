class Employee {   ///класс для описания одного работника
    constructor(name, surname, salary, position){
        this.name = name
        this.surname = surname
        this.salary = salary
        this.position = position
    }

}

const employeesArray = [];

function addEmployee(name, surname, salary, position){//фнукция для создания нового работника и записи его в массив всех работников
    let employee = new Employee(name, surname, salary, position);
    employeesArray.push(employee);
}

addEmployee('Vasy', 'Pupkin', 1000, 'developer');//создаем работников новых
addEmployee('Sasha', 'Kotin', 900, 'manager');
addEmployee('Dima', 'Nikiforov', 800, 'hr');
console.log(employeesArray);


class EmpTable { //класс таблицы работников

    constructor(array){
        this.array = array
    }

    getHtml(){//генерация HTML кода 

        let str = '<table  style="border-collapse: collapse; border: 3px solid black; font-size: 20px;">';
        let style = ' style="border: 1px solid grey;"'
        document.write(str);

            for(let i in this.array){
                let newStr = '';
                newStr = `${newStr}<tr${style}><td${style}>${this.array[i].name}</td><td${style}>${this.array[i].surname}</td><td${style}>${this.array[i].salary}</td><td${style}>${this.array[i].position}</td></tr>`
                document.write(newStr);
            }

        document.write('</table>')
    }
}

const empTable = new EmpTable(employeesArray);///создала таблицу работников с передачей массива работников
empTable.getHtml();///записала на страницу HTML код с таблицей сотрудников
