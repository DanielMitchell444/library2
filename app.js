let modal = document.querySelector('.modal');
let addBtn = document.querySelector('.addBtn');
let closeBtn = document.querySelector('.close');
let addBookBtn = document.querySelector('.add');



const myLibrary = [
{title: "Book",
author: "JK-ROWLING",
pages: "500",
isRead: true
 
}];

function Book(title, author, pages, isRead){
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.isRead = isRead;
}

function openModal(){
 modal.style.display = "block";
}

function closeModal(){
modal.style.display = "none";
}

function addNewBook(){
let titleInput = document.querySelector('.title').value;
let authorInput = document.querySelector('.author').value;
let pages = document.querySelector('.pages').value;
let isRead = document.querySelector('.isRead');

const book1 = new Book(titleInput, authorInput, pages, isRead);

myLibrary.push(book1);

console.log(myLibrary);




}

function addBookToLibrary(){
 myLibrary.forEach(item => {
  console.log(item);
 })
}

addBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
addBookBtn.addEventListener('click', addNewBook);

addBookToLibrary();

