let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

if (a >= b) {
    while (a % b !== 0) {
        let c = a % b;
        a = b;
        b = c;
    }
    alert(Math.abs(b));
} else {
    while (b % a !== 0) {
        let c = b % a;
        b = a;
        a = c;
    }
    alert(Math.abs(a));
}

// export default function () {
//     let a = Number(prompt('Введите первое число'));
//     let b = Number(prompt('Введите второе число'));

//     if (a >= b) {
//         while (a % b !== 0) {
//             let c = a % b;
//             a = b;
//             b = c;
//         }
//         alert(b);
//     } else {
//         while (b % a !== 0) {
//             let c = b % a;
//             b = a;
//             a = c;
//         }
//         alert(a);
//     }
// }


