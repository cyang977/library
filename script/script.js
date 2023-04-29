// Used to contain book object and stores them to an array
let myLibrary = [];
// Creates a new Div on click event
let newDiv;
// Holds the content of the book object into a paragraph
let divContent; 
// Is the content of the book object
let emptyString;
// An object of book object when click event is triggered, this is added to myLibrary array
let newBook;
// A query selector that targets 'delete' buttons
let deleteBtn; 
// An event when deleteBtn is clicked
let pressDelete;
// Used to store button position relative to its div position, when pressed will delete div in coressponding position
let btnArray = [];
// class name of button
let btnClassName;
// button element
let btnElement;


// Selecting user input id of 'title'
const titleBook = document.querySelector('#title');
// Selecting user input id of 'author'
const authorName = document.querySelector('#author');
// Selecting user input id of 'year'
const yearPublished = document.querySelector('#year');
// Selecting user input id of 'pages'
const maxPages = document.querySelector('#pages');
// Selecting div grid where the books will be displayed
const booksGrid = document.querySelector('.books-grid');


// Adds book to the library array when clicked
const addBook = document.querySelector('.new-book-btn');
addBook.addEventListener('click', () => {
    console.log(titleBook.value);
    console.log(authorName.value);
    console.log(yearPublished.value);
    console.log(maxPages.value);
    // Adding the values from the input elements to their assigned key
    newBook = new Book(titleBook.value, authorName.value, yearPublished.value, maxPages.value);
    console.log(newBook);
    // .push() new object created to array
    addBookToLibrary(newBook); 
})


// Action when 'view book' is clicked
const viewBook = document.querySelector('.view-btn');
viewBook.addEventListener('click', () => {
    // Removes all child nodes when clicking viewbooks so that it doesnt duplicate old nodes
    removeAllChildNodes(booksGrid);
    // clear btnArray so no duplicate values
    btnArray.length = 0;
    // create book view function goes here
    createBookView();
    // pressDelete goes here
    /* 
    working now when moved pressDelete to createBookView(), 
    reason so is it needs to exist outside of the click event of 
    viewBook that way we can delete multiple times without having 
    to click view book button for each time we delete
    */
})


/* 
Need to find a way to delete and update the Dom right
after deleting book so that we wont have to click 'view book'
again to see that the books were deleted. 
*/

/*
Only allowed to delete once. Need to find a way to delete multiple times.
*/

// Object constructor for books
function Book(title, author, year, pages) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
}


// Adds books to the library array by .push() object to it
function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}


// Removes Child Nodes when refresh viewing book.
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function createBookView() {
    // For-of loop to create new nodes 
    for (const [index, i] of myLibrary.entries()){
        console.log(index);
        console.log(i);
        // Creating new div element in the DOM 
        newDiv = document.createElement('div');
        // Appending newDiv to be the last child element in the booksGrid parent container
        booksGrid.appendChild(newDiv);
        // Creating paragraph element inside of newDiv and appending it to it
        divContent = document.createElement('p');
        newDiv.appendChild(divContent);
        // Setting text inside paragraph element to be of emptyString
        emptyString = `Title: ${i.author}<br> Author: ${i.title}<br>
        Year: ${i.year}<br> Pages: ${i.pages}`;
        divContent.innerHTML = emptyString;
        // Creating deleteBtn element and appending it to newDiv 
        deleteBtn = document.createElement('button');
        // Adding a style to the element using html class attribute
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.classList.add(`${index}`);
        addBtnToArray(index);
        console.log(btnArray);
        deleteBtn.textContent = 'Delete';
        // Need to figure out a way to delete certain books
        newDiv.appendChild(deleteBtn);
        divContent.classList.add('content');
        newDiv.classList.add('view-books');
    }
    pressDelete = document.querySelectorAll('.deleteBtn');
        console.log(pressDelete);
        pressDelete.forEach(btn => btn.addEventListener('click', (e) => {
            console.log(e);
            btnElement = e.target;
            // Accessing target's className
            btnClassName = btnElement.className;
            console.log(btnClassName);
            console.log(typeof btnClassName);
            deleteBook(btnClassName); 
    }));
}


// Deletes books from library once delete button is clicked
function deleteBook(position) {
    if (/0/.test(position)) {
        // Deletes button in array at position 0 corresponding to div at index 0
        btnArray.splice(0, 1);
        myLibrary.splice(0, 1);
        removeAllChildNodes(booksGrid);
        createBookView();
    } else if (/1/.test(position)) {
        // Deletes button in array at position 1 corresponding to div at index 1
        btnArray.splice(1, 1);
        myLibrary.splice(1, 1);
        removeAllChildNodes(booksGrid);
        createBookView();
    } else if (/2/.test(position)) {
        // Deletes button in array at position 2 corresponding to div at index 2
        btnArray.splice(2, 1);
        myLibrary.splice(2, 1);
        removeAllChildNodes(booksGrid);
        createBookView();
    } else {
        // Deletes button in array at position 3 corresponding to div at index 3
        btnArray.splice((btnArray.length - 1), 1);
        myLibrary.splice((myLibrary.length - 1), 1);
        removeAllChildNodes(booksGrid);
        createBookView();
    }
    console.log(btnArray);
    console.log(myLibrary);
}


// Need to access class name of element and use it as argument 
function addBtnToArray(index) {
    btnArray.push(index);
}




/* 
Need to find a way to delete and update the Dom right
after deleting book so that we wont have to click 'view book'
again to see that the books were deleted. 
*/

/*
Only allowed to delete once. Need to find a way to delete multiple times.
*/