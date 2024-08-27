// Array to store the books
const myLibrary = [];

// Constructor for books objects
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = Boolean(isRead);
}

// Adds a new book to the library array
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

// Example books to add to the library
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const Dune = new Book("Dune", "Frank Herbert", 412, false);
const AtomicHabbit = new Book("Atomic Habits", "James Clear", 306, true);

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
  myLibrary.forEach((book, index) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "card-wrapper");
    cardWrapper.setAttribute("data-index", index);

    const btnDeleteBook = document.createElement("button");
    btnDeleteBook.setAttribute("class", "btn-delete");
    cardWrapper.append(btnDeleteBook);
    btnDeleteBook.textContent = "X";

    // Ev listener for delete button
    btnDeleteBook.addEventListener("click", () => {
      let index = parseInt(cardWrapper.dataset.index);
      removeBook(index);
      displayLibrary(myLibrary);
    });

    const bookTitle = document.createElement("h3");
    bookTitle.setAttribute("class", "book-title");
    cardWrapper.append(bookTitle);
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "book-author");
    cardWrapper.append(bookAuthor);
    bookAuthor.textContent = book.author;

    const bookPages = document.createElement("p");
    bookPages.setAttribute("class", "book-pages");
    cardWrapper.append(bookPages);
    bookPages.textContent = book.pages + " pages";

    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.setAttribute("class", "checkbox-wrapper");
    cardWrapper.append(checkboxWrapper);
    const checkboxRead = document.createElement("input");
    const checkboxLabel = document.createElement("label");
    checkboxRead.setAttribute("type", "checkbox");
    checkboxRead.setAttribute("class", "checkbox-read");
    checkboxWrapper.append(checkboxRead);
    checkboxWrapper.append(checkboxLabel);

    checkboxRead.checked = book.isRead;
    checkboxLabel.textContent = book.isRead ? "Read" : "Not Read";

    // Ev listener for checkbox
    checkboxRead.addEventListener("change", () => {
      book.toggleReadStatus();
      checkboxLabel.textContent = book.isRead ? "Read" : "Not Read";
    });

    container.append(cardWrapper);
  });
}

// Removing book in MyLibrary
const removeBook = (index) => {
  myLibrary.splice(index, 1);
};

Book.prototype.toggleReadStatus = function () {
  this.isRead = !this.isRead;
};

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
  dialog.close();
});

// Submiting the book
btnSubmitBook.addEventListener("click", (book) => {
  book.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("checkbox-read").checked ? true : false;

  let newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);
  displayLibrary(myLibrary);
  dialog.close();
  addBookForm.reset();
});
