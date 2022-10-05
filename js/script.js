'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?"), 
                  b = prompt("На сколько оцените его?");
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('OK');
            } else {
                console.log('error');
                i--;
            }
        }    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++ ) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            while (genre == '' || genre == null) {
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            }
            personalMovieDB.genres[i] = genre;
        }
        // personalMovieDB.genres.forEach(function(item, i) { // альтернативная запись
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();
