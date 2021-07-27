let filmTitle = 'Game'
let filmType = 'movie'
let page = 1
let url = "http://www.omdbapi.com/?i=tt3896198&apikey=35b02e3a"

// "http://www.omdbapi.com/?i=tt3896198&apikey=35b02e3a&s=Batman&type=movie&page=2"

function createFilmList(array){
  let films = array.map(film => `<article class="film">${film.Title}<p class="description"><img src="${film.Poster}" style="width:150px; float: left; margin-right: 20px">FILM:<br> ${film.Title}<br>TYPE: ${film.Type} <br>YEAR: ${film.Year}</p><button class="see-more">Подробнее</button></article>`).join('')
  let section = document.querySelector('section');
  if (section == null){
    section = document.createElement('section');
    section.classList.add('results-list');
    let div = document.querySelector('.results');
    div.appendChild(section);
    section.innerHTML = films;
  } else {
    section.remove();
  }

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
function findMovies(filmTitle, filmType, page, url){
  fetch(url+'&s='+filmTitle+'&type='+filmType+'&page='+page)
  .then(response => response.json())
        .then(data => {
            removeFilmTable();
            createFilmList(data.Search);
          }).catch((err) => alert("ОШИБКА ПОИСКА!"))
}
function removeFilmTable(){
  let section = document.querySelector('section')
  section.remove();
}
let btn = document.getElementById('searchButton');
btn.addEventListener('click', function (e){
  e.preventDefault();
  filmTitle = document.querySelector('.movieInput').value;
  filmType = document.getElementById('movieSelect').value;
  fetch(url+'&s='+filmTitle+'&type='+filmType+'&page='+1)
  .then(response => response.json())
      .then(data => {
        console.log(data.Search)
          createFilmList(data.Search);
        }).catch((err) => alert("ОШИБКА ПОИСКА!"))
});
