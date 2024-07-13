// dialog script
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

// form script
const bookForm = document.getElementById('add-book-form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const pageCount = document.getElementById('page-count');
const bookYear = document.getElementById('book-year');
const myLibrary = [];

// Initialize the library with the static book
const staticBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 12, 2018);
myLibrary.push(staticBook);

function Book(title, author, pageCount, year) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.year = year;
    this.read = false;
}

function addBookToLibrary(event) {
    event.preventDefault();
    const book = new Book(bookTitle.value, bookAuthor.value, pageCount.value, bookYear.value);
    myLibrary.push(book);
    bookTitle.value = '';
    bookAuthor.value = '';
    pageCount.value = '';
    bookYear.value = '';
    bookDialog.close();
    renderBooks();
}

function createCard(book, index) {
    const card = document.createElement('div');
    card.classList.add('book-item');
    card.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pageCount} pages</p>
        <p>${book.year}</p>
        <div class="btn-books">
            <button class="btn-status">${book.read ? 'Mark as unread' : 'Mark as read'}</button>
            <button class="btn-delete">Delete</button>
        </div>           
    `;
    
    addButtonListeners(card, book, index);
    
    return card;
}

function addButtonListeners(cardElement, book, index) {
    const statusBtn = cardElement.querySelector('.btn-status');
    const deleteBtn = cardElement.querySelector('.btn-delete');

    statusBtn.addEventListener('click', () => {
        book.read = !book.read;
        renderBooks();
    });

    deleteBtn.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        renderBooks();
    });
}

function renderBooks() {
    const booksContainer = document.querySelector('.book-container');
    
    // Clear existing dynamically added book items from the DOM
    const existingBooks = booksContainer.querySelectorAll('.book-item:not(.static)');
    existingBooks.forEach(book => book.remove());

    // Render all books in the library
    myLibrary.forEach((book, index) => {
            const newBookElement = createCard(book, index);
            booksContainer.insertBefore(newBookElement, booksContainer.lastElementChild)
    });
}

// Add event listener to the form
bookForm.addEventListener('submit', addBookToLibrary);

// Initial render of books
renderBooks();