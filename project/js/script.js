/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const advBlocks = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const posterBg = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');
const form = document.querySelector('.add');
const inputForm = document.querySelector('.adding__input');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

advBlocks.forEach(item => {
    item.remove()
});

genre.textContent = 'Драма';

posterBg.style.backgroundImage = "url('./img/bg.jpg')";


movieDB.movies.sort();


function createList(film, parent) {
    parent.innerHTML = "";
    film.forEach((film, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
        </li>`;
    });
}
createList(movieDB.movies, movieList);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = inputForm.value;
    if (newFilm.length > 10) {
        newFilm = `${newFilm.slice(0, 10)}...`;
    }
    movieDB.movies.push(newFilm);
    createList(movieDB.movies, movieList);

})

