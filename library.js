// Array to store the books
const myLibrary = [];

// Constructor for books objects
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

// Adds a new book to the library array
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

// Example books to add to the library
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const Dune = new Book("Dune", "Frank Herbert", 412, "not read yet");
const AtomicHabbit = new Book("Atomic Habits", "James Clear", 306, "read");

// Manually added books to array
addBookToLibrary(theHobbit);
addBookToLibrary(Dune);
addBookToLibrary(AtomicHabbit);

// Picking HTML elements for using them in JS
const btnAdd = document.querySelector("#btnAdd");
const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");
const btnSubmitBook = document.querySelector("#create-book");
const addBookForm = document.querySelector("#addBookForm");

// Displaying each book to frontend
function displayLibrary(myLibrary) {
  container.innerHTML = ""; // Clear the container before displaying the updated library
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
    bookPages.textContent = e.pages + " pages";

    const btnRead = document.createElement("button");
    btnRead.setAttribute("id", "btn-read");
    cardWrapper.append(btnRead);
    btnRead.textContent = e.read;

    container.append(cardWrapper);
  });
}

// Displaying the myLibrary content when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayLibrary(myLibrary);
});

// MODAL
// "Show the dialog" button opens the dialog modally
btnAdd.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  e.preventDefault();
  dialog.close();
});

// Submiting the book
btnSubmitBook.addEventListener("click", (e) => {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("checkbox-read").checked
    ? "read"
    : "not read yet";

  if (title && author && pages) {
    let newBook = new Book(title, author, pages, isRead);
    console.log(newBook);
    addBookToLibrary(newBook);
    displayLibrary(myLibrary);
    dialog.close();
    addBookForm.reset();
  } else {
    // incomplete form submission
  }
});
