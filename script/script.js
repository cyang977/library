let myLibrary = [];

let userInput = [];
let newDiv;
let divContent; 
let emptyString;
let newBook;
let deleteBtn; 
let pressDelete;
const titleBook = document.querySelector('#title');
const authorName = document.querySelector('#author');
const yearPublished = document.querySelector('#year');
const maxPages = document.querySelector('#pages');
const booksGrid = document.querySelector('.books-grid');


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

function Book(title, author, year, pages) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function deleteBook() {

}

const viewBook = document.querySelector('.view-btn');
viewBook.addEventListener('click', () => {
    removeAllChildNodes(booksGrid);
    for (i of myLibrary){
        console.log(i);
        newDiv = document.createElement('div');
        booksGrid.appendChild(newDiv);
        divContent = document.createElement('p');
        newDiv.appendChild(divContent);
        emptyString = `Title: ${i.author}<br> Author: ${i.title}<br>
        Year: ${i.year}<br> Pages: ${i.pages}`;
        divContent.innerHTML = emptyString;
        deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML = 'Delete';
        pressDelete = document.querySelectorAll('.deleteBtn');
        console.log(pressDelete);
        // Need to figure out a way to delete certain books
        pressDelete.forEach(btn => btn.addEventListener('click', () => {
            console.log(e);
            //deleteBook(); 
        }));
        newDiv.appendChild(deleteBtn);
        divContent.classList.add('content');
        newDiv.classList.add('view-books');
    }
})