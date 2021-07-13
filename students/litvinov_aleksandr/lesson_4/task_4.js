
let list = [
    { audience: 'Phisics', amount: 12, faculty: 'Phis-Math' },
    { audience: 'Philosophy', amount: 20, faculty: 'Journalism' },
    { audience: 'Chemistry', amount: 15, faculty: 'Phis-Math' },
    { audience: 'Religious', amount: 13, faculty: 'Journalism' },
    { audience: 'English', amount: 14, faculty: 'Journalism' }
]


document.write(`<p style="font-size:24px">TASK_1</p>`)
let audiences = list.forEach(item => {
    document.write(`<p style="color:red; font-size:18px;">${item.audience} - (${item.amount}) : faculty - ${item.faculty}</p>`);
})

document.write(`<p style="font-size:24px">TASK_2</p>`)
let audiencesFac = list.filter(item => {
    if (item.faculty === 'Journalism') {
        document.write(`<p style="color:green; font-size:18px;">${item.audience} - (${item.amount}) : faculty - ${item.faculty}</p>`);
    }
})

document.write(`<p style="font-size:24px">TASK_3</p>`)
let audiencesGroup = list.filter(item => {
    if (item.amount > 13) {
        document.write(`<p style="color:blue; font-size:18px;">${item.audience} - (${item.amount}) : faculty - ${item.faculty}</p>`)
    }
})

document.write(`<p style="font-size:24px">TASK_3</p>`)
let audiencesSort = list.sort((a, b) => a.amount - b.amount)
for (item of list) {
    document.write(`<p style="color:brown">${item.audience} - (${item.amount}) : faculty - ${item.faculty}</p>`)
}

document.write(`<p style="font-size:24px">TASK_5</p>`)
function audiencesAbc(myFunc, array) {
    myFunc(array)
    for (item of array) {
        document.write(`<p style="color:brown">${item.audience} - (${item.amount}) : faculty - ${item.faculty}</p>`)
    }
}
audiencesAbc(sort1, list)

function sort1(arr) {
    arr.sort(function (a, b) {
        if (a.audience > b.audience) {
            return 1
        }
        if (a.audience < b.audience) {
            return -1
        } if (a.audience > b.audience) {
            return 0
        }
    })
}
