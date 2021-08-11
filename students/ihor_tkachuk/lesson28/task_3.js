// Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


class Employee {   //класс для описания одного работника;
    constructor(name, surname, salary, position){
        this.name = name
        this.surname = surname
        this.salary = salary
        this.position = position
    }

}

const employeesArray = [];

function addEmployee(name, surname, salary, position) {   //функция для создания нового работника и записи его в массив всех работников;
    let employee = new Employee(name, surname, salary, position);
    employeesArray.push(employee);
}

addEmployee('Oksana', 'Koval', 2000, 'creditmanager');   //создаем новых работников ;
addEmployee('Serhiy', 'Kozyr', 1700, 'depositmanager');
addEmployee('Yuriy', 'Timofeev', 1800, 'accountant');
console.log(employeesArray);


class EmpTable {   //класс таблицы работников;

    constructor(array){
        this.array = array
    }

    getHtml() {   //генерация HTML кода; 

        let str = '<table  style="border-collapse: collapse; border: 2px solid black; font-size: 25px;">';
        let style = ' style="border: 1px solid black; padding: 10px;"'
        document.write(str);

            for(let i in this.array) {
                let newStr = '';
                newStr = `${newStr}<tr${style}><td${style}>${this.array[i].name}</td><td${style}>${this.array[i].surname}</td><td${style}>${this.array[i].salary}</td><td${style}>${this.array[i].position}</td></tr>`
                document.write(newStr);
            }

        document.write('</table>')
    }
}

const empTable = new EmpTable(employeesArray);   //создаем таблицу работников с передачей массива работников;
empTable.getHtml();   //записаем на страницу HTML код с таблицей сотрудников;