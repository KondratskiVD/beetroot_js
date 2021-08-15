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
let favoriteMovies = []


button.addEventListener('click', search)

function search(page) {
    fetch(`${url}&apikey=${apikey}&s=${input.value}&type=${select.value}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            generateList(data.Search)
            generatePagination(Math.ceil(data.totalResults / moviesOnPage), page)
        })
        .catch((err) => alert('Movie not found'))
}

const generateList = (data) => {

    list.textContent = ''
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li')
        let btn = document.createElement('button')
        let btnText = document.createTextNode('details')
        let btnSave = document.createElement('button');
        let btnSaveText = document.createTextNode('add to favotite')
        btn.append(btnText)
        btn.classList.add('details')
        btnSave.append(btnSaveText)
        li.append(data[i].Title, btn, btnSave)
        list.append(li)
        let infoBox = document.createElement('div')
        let img = document.createElement('img')
        let infoSubsribe = document.createElement('div');
        img.setAttribute('src', data[i].Poster)
        infoBox.classList.add('info-box')
        infoSubsribe.innerHTML = `<p>Type: ${data[i].Type}</p><p>Title: ${data[i].Title}</p><p>Year: ${data[i].Year}</p>`
        infoSubsribe.style.marginLeft = 20 + 'px'
        infoBox.append(img, infoSubsribe)
        box.append(infoBox)

        btn.addEventListener('click', showDescription)
        function showDescription() {
            infoBox.classList.toggle('show')
        }

        btnSave.addEventListener('click', addToFavorite)
        function addToFavorite() {
            let id = data[i].imdbID.toString()
            favoriteMovies.push(id)
            localStorage.setItem('id', JSON.stringify(favoriteMovies))
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






