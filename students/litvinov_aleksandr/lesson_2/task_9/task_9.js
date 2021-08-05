tableMult()
function tableMult() {
    for (i = 1; i <= 9; i++) {
        let newTable = [];
        for (j = 1; j <= 10; j++) {
            newTable.push(i * j)
        }
        console.log(newTable.join(' '));
    }
}