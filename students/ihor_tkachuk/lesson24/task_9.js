for (let i = 1; i < 10; i++) {
    let array = [];
    for (let k = 1; k < 10; k++) {
        array.push(`${i} * ${k} = ${i*k}`);  
    }
    alert(array.join(';    ')); 
}