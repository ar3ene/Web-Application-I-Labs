// 0. Preparation and warm-up exercise

function firstTwoLastTwo(str) {
    let newStr = '';
    if (str.length < 2) {
      newStr = '';
    } else if (str.length === 2) {
      newStr = str + str;
    } else {
      newStr = str.substring(0, 2) + str.substring(str.length - 2, str.length);
    }
    console.log(newStr);
  }

// firstTwoLastTwo("spring");
// firstTwoLastTwo("firsttwolasttwo");
// firstTwoLastTwo("a");
// firstTwoLastTwo("at");


// 1. Create a Film Library
// We will implement a simple application to track the films that a person wants to watch and
// the ones they have already watched. Each film is represented by the following fields:
// ▪ A unique numerical id (mandatory)
// ▪ A title (mandatory)
// ▪ A Boolean value to represent whether the film is among the person’s favorites (default value: false)
// ▪ A date corresponding to the date when the person watched the film (optional)
// ▪ A numerical value between 1 and 5 to represent the rating that the person has given to the film after
// watching it (optional)
// ▪ A numerical id representing the person (mandatory, default to 1).
// Firstly, implement a constructor function to create Film objects.
// Secondly, implement a constructor function to create a FilmLibrary, an object containing an array of Films.
// Then, implement the addNewFilm method, which adds a new Film object, passed as parameter, to the
// FilmLibrary. Populate the FilmLibrary using this method.
// To conclude, print in the console the entire list of Films stored in the FilmLibrary, with all their fields.
// 2. Add functionalities to the Film Library
// add a set of methods to the FilmLibrary object, namely:
// - sortByDate: returns a new array containing the Films within the FilmLibrary instance sorted in
// ascending order of the watch date. The movies that the user has not already watched should be put at the
// end. For example, after the sorting, the FilmLibrary shown in the previous exercise would look like:
// ***** List of films *****
// Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2024, Score: 5, User: 1
// Id: 2, Title: 21 Grams, Favorite: true, Watch date: March 17, 2024, Score: 4, User: 1
// Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2024, Score: 3, User: 1
// Id: 3, Title: Star Wars, Favorite: false, Watch date: null, Score: 0, User: 1
// Id: 4, Title: Matrix, Favorite: false, Watch date: null, Score: 0, User: 1
// - deleteFilm: deletes a Film from the FilmLibrary based on an Id received by parameter.
// - resetWatchedFilms: deletes the Watch date of all the Films in the FilmLibrary.
// - getRated: selects the films that do have a defined score. Only movies with an assigned score should be
// returned, ordered by decreasing score. After filtering the Films Library shown in exercise 1, the method
// should print:
// ***** Films filtered, only the rated ones *****
// Id: 1, Title: Pulp Fiction, Favorite: true, Watch date: March 10, 2024, Score: 5
// Id: 2, Title: 21 Grams, Favorite: true, Watch date: March 17, 2024, Score: 4
// Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2024, Score: 3
// Hint: To implement the required functionalities described above you may use the functional programming
// paradigm to manipulate the array of films.
// Finally, test the methods by invoking them over the FilmLibrary instance you created and populated in
// exercise 1.


const dayjs = require('dayjs');

function Film(id, title, isFavorite = false, dateWatched, rating, personId = 1) {
    this.id = id;
    this.title = title;
    this.isFavorite = isFavorite;
    this.dateWatched = dateWatched ? dayjs(dateWatched) : undefined;
    this.rating = rating;
    this.personId = personId;
}

function FilmLibrary() {
    this.films = [];
    this.addNewFilm = function(film) {
        this.films.push(film);
    };

    this.sortByDate = function() {
        return [...this.films].sort((a, b) => {
            if (a.dateWatched === undefined) return 1;
            if (b.dateWatched === undefined) return -1;
            return a.dateWatched.diff(b.dateWatched);
        });
    };

    this.deleteFilm = function(id) {
        this.films = this.films.filter(film => film.id !== id);
    };

    this.resetWatchedFilms = function() {
        this.films.forEach(film => {
            film.dateWatched = undefined;
        });
    };

    this.getRated = function() {
        return [...this.films]
            .filter(film => film.rating !== undefined)
            .sort((a, b) => b.rating - a.rating);
    };
}

let myFilmLibrary = new FilmLibrary();
myFilmLibrary.addNewFilm(new Film(1, "Escape", isFavorite = true, "2021-01-15", 5, personId = 1)); 
myFilmLibrary.addNewFilm(new Film(2, "God Father", isFavorite = true, "2023-03-15", 5, personId = 1));
console.log(myFilmLibrary.films);

console.log("***** Movie List *****");
console.log(myFilmLibrary.sortByDate());

myFilmLibrary.deleteFilm(2);

console.log("***** Updated List *****"); 
console.log(myFilmLibrary.films);

myFilmLibrary.resetWatchedFilms();

console.log("***** Updated List *****");
console.log(myFilmLibrary.films);

console.log("***** Rated Movies *****");
console.log(myFilmLibrary.getRated()); 