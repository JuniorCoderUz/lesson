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


document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Одержимость",
            "Ла-ла лэнд",
            "Скотт Пилигрим против...",
            "Лига справедливости",
        ]
    };

    const ads = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        movieGenre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        movieItem = movieList.querySelectorAll('.promo__interactive-item'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('input[type="text"]'),
        checkbox = addForm.querySelector('input[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;


        if (newFilm.length > 22) {

            newFilm = `${newFilm.substring(0, 22)}...`;

            movieDB.movies.push(newFilm.toUpperCase());
            sortedArray(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        if (favorite) {
            console.log('This film your favorite 😎');
        }

        movieDB.movies.push(newFilm.toUpperCase());
        sortedArray(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
        event.target.reset();
    });


    function sortedArray(arr) {
        arr.sort();
    }

    function deleteAds(nameAds) {
        nameAds.forEach(item => {
            item.remove();
        });
    }

    function renameContent(contentName, newGenre) {
        contentName.textContent = `${newGenre}`.toUpperCase();
    }

    function buildBg(nameOfPoster) {
        nameOfPoster.style.backgroundImage = 'url(img/bg.jpg)';
    }

    function createMovieList(films, parent) {
        sortedArray(films);
        parent.innerHTML = "";
        films.forEach((film, n) => {
            parent.innerHTML += `<li class="promo__interactive-item">${n + 1} ${film}
        <div class="delete"></div>
        </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    deleteAds(ads);
    renameContent(movieGenre, "драма");
    buildBg(poster);
    createMovieList(movieDB.movies, movieList);

});

