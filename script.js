const bookSection = document.querySelector(".books");
const addBookButton = document.querySelector(".add-book-btn");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-btn");
const body = document.querySelector("body");
const addBookSubmitButton = document.querySelector(".add-book-submit");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesNumberInput = document.querySelector("#pagesNumber");
const isReadInput = document.querySelector("#isRead");
const form = document.querySelector(".add-form");

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
    if (isRead) {
        isReadButton.className = "status-btn read"
    }
    else {
        isReadButton.className = "status-btn"
    }
    isReadButton.textContent = "Read"
    isReadButton.addEventListener("click", () => {
        isReadButton.classList.toggle("read");
    });

    const removeButton = document.createElement("button")
    removeButton.className = "remove-btn"
    removeButton.textContent = "Remove"
    removeButton.addEventListener("click", () => {
        removeButton.parentElement.remove();
    });
    bookDiv.appendChild(titleHeading)
    bookDiv.appendChild(bookInformationSection)
    bookDiv.appendChild(isReadButton)
    bookDiv.appendChild(removeButton)

    return bookDiv
}

function displayBooks() {
    bookSection.textContent = '';
    for(let book of myLibrary) {
        const bookDiv = createBookElement(book.title, book.author, book.pagesNumber, book.isRead);
        bookSection.appendChild(bookDiv);
    }
}

addBookButton.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    body.classList.add("stop-scrolling")
});
closeButton.addEventListener("click", () => {
    overlay.classList.add("hidden");
    body.classList.remove("stop-scrolling")
});

addBookSubmitButton.addEventListener("click", () => {
    event.preventDefault();
    const book = new Book(titleInput.value, authorInput.value, pagesNumberInput.value, isReadInput.checked);
    addBookToLibrary(book); 
    overlay.classList.add("hidden");
    body.classList.remove("stop-scrolling")
    form.reset();
    displayBooks();
});
 