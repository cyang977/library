let myLibrary = [];

let userInput = []; 
let newBook;
const titleBook = document.querySelector('#title');
const authorName = document.querySelector('#author');
const yearPublished = document.querySelector('#year');
const maxPages = document.querySelector('#pages');


const addBook = document.querySelector('.new-book-btn');
addBook.addEventListener('click', () => {
    console.log(titleBook.value);
    console.log(authorName.value);
    console.log(yearPublished.value);
    console.log(maxPages.value);
    newBook = new Book(titleBook.value, authorName.value, yearPublished.value, maxPages.value);
    console.log(newBook);
    addBookToLibrary(newBook); 
})

function Book(author, title, year, pages) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}