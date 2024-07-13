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