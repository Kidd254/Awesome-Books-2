const dynamic = document.querySelector('#dynamic');
const listOfBooks = [{
    title: 'atomic habit',
    author: 'James Clear',
},
{
    title: 'Shreds of Tenderness',
    author: 'John Ruganda'
},
{
    title: 'The River Between',
    author: 'Ngugi wa Thiongo',
}
]

function addBooks(bookTitle, authorName){
    const tempBook = {
        title,
        author,
    };
    listOfBooks.push(tempBook);
    const addedBooks = document.querySelector('.addbook');
const book = document.createElement('div');
const title = document.createElement('p');
title.innerText = tempBook.title;
book.append(title);
const author = document.createElement('p');
author.innerText = tempBook.author;
book.append(author);
const removeBtn = document.createElement('button');
removeBtn.innerText = 'remove';
book.append(removeBtn);
removeBtn.addEventListener('click', ()=>{
    book.style.display= 'none';
});
const line = document.createElement('hr');
book.append(line);
addedBooks.append(book);
}

function removeBook(index) {
  listOfBooks.splice(listOfBooks.findIndex((e) => e.title === listOfBooks[index].title
  && e.author === listOfBooks[index].author), 1);
}
// Display all books saved in the collection in the top part of the page.
function bookLoders() {
  for (let k = 0; k < listOfBooks.length; k += 1) {
    const book = document.createElement('article');
    const title = document.createElement('p');
    title.innerText = listOfBooks[k].title;
    const author = document.createElement('p');
    author.innerText = listOfBooks[k].author;
    book.append(title);
    book.append(author);
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.addEventListener('click', () => {
      removeBook(k);
      book.style.display = 'none';
    });
    book.append(button);
    const line = document.createElement('hr');
    book.append(line);
    dynamic.append(book);
  }
}
