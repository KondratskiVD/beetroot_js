const result = [];
for (let i = 1; i < 10; i++){
    let array = [];
    for (let j = 1; j < 10; j++) {
        array.push(`${i} * ${j} = ${i*j}`);  
    }
    console.log(array); 
}
