const apikey = '2e520fcf'
const box = document.getElementById('box');
const list = document.getElementById('boxList')
let url = 'http://www.omdbapi.com/?i=tt3896198'
let input = document.getElementById('boxInput')
let button = document.getElementById('btn')
let select = document.querySelector('select')
let pagination = document.getElementById('pagination')
let moviesOnPage = 10
let page = 1

button.addEventListener('click', search)

function search(page) {
    fetch(`${url}&apikey=${apikey}&s=${input.value}&type=${select.value}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            generateList(data.Search)
            generatePagination(Math.ceil(data.totalResults / moviesOnPage), page)
        }).catch((err) => alert('Movie not found'))
}

const generateList = (data) => {
    list.textContent = ''
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = data[i].Title
        list.append(li)
        let btn = document.createElement('button')
        btn.style.marginLeft = 25 + 'px'
        let btnText = document.createTextNode('details')
        btn.append(btnText)
        li.append(btn)

        let infoBox = document.createElement('div')
        infoBox.classList.add('info-box')
        box.append(infoBox)
        let img = document.createElement('img')
        img.setAttribute('src', data[i].Poster)
        img.style.height = 150 + 'px'
        img.style.float = 'left'
        let infoSubsribe = document.createElement('div');
        infoSubsribe.innerHTML = `<p>Type: ${data[i].Type}</p><p>Title: ${data[i].Title}</p><p>Year: ${data[i].Year}</p>`
        infoSubsribe.style.marginLeft = 20 + 'px'
        infoBox.append(img)
        infoBox.append(infoSubsribe)
        infoBox.style.display = 'none'

        btn.addEventListener('click', showDescription)
        function showDescription() {
            if (infoBox.style.display === 'none') {
                infoBox.style.display = 'block'
            } else {
                infoBox.style.display = 'none'
            }
        }
    }
}

const generatePagination = (pagesNumber, activePage) => {
    pagination.textContent = ''
    for (let i = 1; i <= pagesNumber; i++) {
        let li = document.createElement('li')
        if (activePage === i) {
            li.classList.add('active')
        }
        li.addEventListener('click', () => {
            pagination.textContent = ''
            search(i)
        })
        li.innerHTML = i
        pagination.append(li)
    }
}
