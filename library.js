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

const bookTitle = document.createElement("h3");
bookTitle.setAttribute("class", "book-title");
container.append(bookTitle);

const bookAuthor = document.createElement("p");
bookAuthor.setAttribute("class", "book-author");
container.append(bookAuthor);

const bookPages = document.createElement("p");
bookPages.setAttribute("class", "book-pages");
container.append(bookPages);

const btnRead = document.createElement("p");
btnRead.setAttribute("id", "btn-read");
container.append(btnRead);

function displayLibrary(myLibrary) {
  myLibrary.forEach((e) => {
    e;
  });
}
