function Movie(id, title) {
    console.log('hello constructor');
    this.id = id;
    this.title = title;
    this.printMovie = function() {
        console.log(`Movie title is ${this.title}`)
    }

}
let movie1 = new Movie(1, 'Jocker and Harkey');
let movie2 = new Movie(2, 'Black Mirror');


console.log(movie1);