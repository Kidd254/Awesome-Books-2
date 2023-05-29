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
    const addedBooks = document.querySelector('.dynamic');
const book = document.createElement('div');
const title = document.createElement('p');
title.innerText = tempBook.title;
book.appendChild(title);
const author = document.createElement('p');
author.innerText = tempBook.author;
book.appendChild(author);
const removeBtn = document.createElement('button');
removeBtn.innerText = 'remove';
book.appendChild(removeBtn);
removeBtn.addEventListener('click', ()=>{
    book.style.display= 'none';
});
const line = document.createElement('hr');
book.appendChild(line);
addedBooks.appendChild(book);
}


