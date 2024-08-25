const myLibrary = [];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const Dune = new Book("Dune", "Frank Herbert", 412, "not read yet");
const AtomicHabbit = new Book("Atomic Habits", "James Clear", 306, "read");

addBookToLibrary(theHobbit);
addBookToLibrary(Dune);
addBookToLibrary(AtomicHabbit);

const btnAdd = document.querySelector("#btnAdd");
const container = document.querySelector(".container");

function displayLibrary(myLibrary) {
  myLibrary.forEach((e) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "card-wrapper");

    const bookTitle = document.createElement("h3");
    bookTitle.setAttribute("class", "book-title");
    cardWrapper.append(bookTitle);
    bookTitle.textContent = e.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "book-author");
    cardWrapper.append(bookAuthor);
    bookAuthor.textContent = e.author;

    const bookPages = document.createElement("p");
    bookPages.setAttribute("class", "book-pages");
    cardWrapper.append(bookPages);
    bookPages.textContent = e.pages;

    const btnRead = document.createElement("p");
    btnRead.setAttribute("id", "btn-read");
    cardWrapper.append(btnRead);
    btnRead.textContent = e.read;

    container.append(cardWrapper);
  });
}

displayLibrary(myLibrary);
