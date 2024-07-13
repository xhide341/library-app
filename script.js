// modal script
const addBookBtn = document.getElementById('add-book-btn');
const bookDialog = document.getElementById('book-dialog');
const modalBackground = document.querySelector('.modal-background');
const cancelBtn = document.getElementById('cancel-btn');


addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    bookDialog.close();
});


addBookBtn.addEventListener('click', openForm);
cancelBtn.addEventListener('click', closeForm);
modalBackground.addEventListener('click', closeForm);

// form script
const bookForm = document.getElementById('add-book-form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const pageCount = document.getElementById('page-count');
const bookYear = document.getElementById('book-year');
const myLibrary = [];

bookForm.addEventListener('submit', addBookToLibrary);

addBookToLibrary = function(event) {
    event.preventDefault();
    const book = {
        title: bookTitle.value,
        author: bookAuthor.value,
        pageCount: pageCount.value,
        year: bookYear.value,
    };
    myLibrary.push(book);
    bookTitle.value = '';
    bookAuthor.value = '';
    pageCount.value = '';
    bookYear.value = '';
    bookDialog.close();
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
