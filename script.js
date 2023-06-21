const myLibrary = [];

function Book(author, title, pagesNumber, isRead) {
    this.author = arthor;
    this.tile = title;
    this.pagesNumber = pagesNumber;
    this.isRead = isRead;
}

function addBookToLibrary() {
    const book = new Book();
    myLibrary.push(book);
}