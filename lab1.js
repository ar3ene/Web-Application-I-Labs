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

function Film(id, title, personId = 1, isFavorite = false, dateWatched, rating) {
    this.id = id;
    this.title = title;
    this.isFavorite = isFavorite;
    this.dateWatched = dateWatched;
    this.rating = rating;
    this.personId = personId;
}

function FilmLibrary() {
    this.films = [];
    this.addNewFilm = function(film) {
        this.films.push(film);
    };
}

let myFilmLibrary = new FilmLibrary();
myFilmLibrary.addNewFilm(new Film(1, "Escape")); 
myFilmLibrary.addNewFilm(new Film(2, "God Father", true, "2023-03-15", 5));
console.log(myFilmLibrary.films);


