const bookSection = document.querySelector(".books")

const myLibrary = [];

function Book(title, author, pagesNumber, isRead) {
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookElement(title, author, pagesNumber, isRead) {
    // Create the outer div element
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    const titleHeading = document.createElement("h4");
    titleHeading.className = "title";
    titleHeading.textContent = title;

    const bookInformationSection = document.createElement("section")
    bookInformationSection.className = "bookInformation"

    const authorHeading =  document.createElement("h5");
    authorHeading.className = "author";
    authorHeading.textContent = author;

    const pagesNumberHeading = document.createElement("h5");
    pagesNumberHeading.className = "pagesNumber"
    pagesNumberHeading.textContent = pagesNumber

    bookInformationSection.appendChild(authorHeading)
    bookInformationSection.appendChild(pagesNumberHeading)

    const isReadButton = document.createElement("button")
    isReadButton.className = "status-btn read"
    isReadButton.textContent = "Read"

    const removeButton = document.createElement("button")
    removeButton.className = "remove-btn"
    removeButton.textContent = "Remove"

    bookDiv.appendChild(titleHeading)
    bookDiv.appendChild(bookInformationSection)
    bookDiv.appendChild(isReadButton)
    bookDiv.appendChild(removeButton)

    bookSection.appendChild(bookDiv)
}

function displayBooks() {
    for(let book of myLibrary) {
        createBookElement(book.title, book.author, book.pagesNumber, book.isRead)
    }
}


for (let i = 0; i < 10; i++) {
    book1 = new Book('yeahdasa', 'yeah', 1, true)
    addBookToLibrary(book1); 
}
displayBooks();   