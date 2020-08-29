/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const ads = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    movieGenre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    movieItem = movieList.querySelectorAll('.promo__interactive-item');



const movieDB = {
    movies: [
        "Логан",
        "Одержимость",
        "Ла-ла лэнд",
        "Скотт Пилигрим против...",
        "Лига справедливости",
    ]
};
movieDB['movies'].sort();



ads.forEach(item => {
    item.remove();
});

movieGenre.textContent = "Драма";
poster.style.backgroundImage = 'url(img/bg.jpg)';
movieList.innerHTML = "";
movieDB['movies'].forEach((film, n) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${n + 1} ${film}
    <div class="delete"></div>
    </li>`;
});