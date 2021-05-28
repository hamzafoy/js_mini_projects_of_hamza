class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        const reduce = (acc, cur) => acc + cur;
        let reduction = this._ratings.reduce(reduce);
        return reduction / this._ratings.length;
    }
    addRating(score) {
        this._ratings.push(score);
    }
};



class Book extends Media {
    constructor(title, author, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
};



class Movie extends Media {
    constructor(title, director, runTime, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
};



const NineteenEightyFour = new Book('1984', 'George Orwell', 328);
NineteenEightyFour.addRating(8.5);
NineteenEightyFour.addRating(9);
NineteenEightyFour.addRating(8.5);

const DarkKnightRises = new Movie('Dark Knight Rises', 'Christopher Nolan', 164);
DarkKnightRises.toggleCheckOutStatus();

console.log(NineteenEightyFour); // EXPECTED OUTPUT: Book { _title: '1984', _isCheckedOut: false, _ratings: [ 8.5, 9, 8.5 ], _author: 'George Orwell', _pages: 328 }
console.log(DarkKnightRises); //EXPECTED OUTPUT: Movie { _title: 'Dark Knight Rises', _isCheckedOut: true, _ratings: [], _director: 'Christopher Nolan', _runTime: 164 }