let url = "http://www.omdbapi.com/?i=tt3896198&apikey=35b02e3a"

// "http://www.omdbapi.com/?i=tt3896198&apikey=35b02e3a&s=Batman&type=movie&page=2"

let btn = document.getElementById('searchButton');

btn.addEventListener('click', function (e){
  e.preventDefault();
  filmTitle = document.querySelector('.movieInput').value;
  filmType = document.getElementById('movieSelect').value;
  console.log(filmTitle,filmType)
  findMovies(filmTitle, filmType, page = 1, url);
});

const findMovies = (filmTitle, filmType, page, url) => {
  fetch(`${url}&s=${filmTitle}&type=${filmType}&page=${page}`)
  .then(response => response.json())
        .then(data => {
            let totalResults = data.totalResults;
            createPageList(totalResults, page)
            createFilmList(data.Search);
          }).catch((err) => alert("ОШИБКА ПОИСКА!"))
}

function createFilmList(array){
  let films = array.map(film => `<article class="film">${film.Title}<p class="description"><img src="${film.Poster}" style="width:150px; float: left; margin-right: 20px">FILM:<br> ${film.Title}<br>TYPE: ${film.Type} <br>YEAR: ${film.Year}</p><button class="see-more">Подробнее</button></article>`).join('')

    let div = document.querySelector('.results');
    div.textContent = '';
    section = document.createElement('section');
    section.classList.add('results-list');
    div.appendChild(section);
    section.innerHTML = films;

  let buttonsSeeMore = document.querySelectorAll('.see-more');
  for (let i=0; i < buttonsSeeMore.length; i++){
    buttonsSeeMore[i].addEventListener('click', (e) => {
      if (e.target.parentElement.childNodes[1].style.display == 'flex'){
        e.target.parentElement.childNodes[1].style.display = 'none'
      } else e.target.parentElement.childNodes[1].style.display = 'flex';
      }) 
  }  
}


let pageList = document.querySelector('.pagination')
pageList.addEventListener('click', function ChangePage(e){
  page = e.target.innerHTML;
  findMovies(filmTitle, filmType, page, url);
})


function createPageList (totalResults, activePage){
  
  let totalPages = Math.floor(totalResults / 10) + 1;
  console.log(`Total pages = ${totalPages}`)
  let ul = document.querySelector('.pagination');
  ul.textContent ='';

  for (let i = 1; i <= totalPages; i++){
  let li = document.createElement('li');
  if (activePage == i){
    li.classList.add('active-page')
  } 

  li.innerHTML = i;
  ul.append(li);
  }
}