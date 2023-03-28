var books = [
{
    title : "The Design of Everyday Things",
    author: "Don Norman",
    isRead: false
},
{
    title : "The Most Human Human",
    author: "Brian Christian",
    isRead: true
}
]

let bookList = document.getElementById("booklist");

books.forEach((book) => {

    let paraTag = document.createElement("p");
    paraTag.innerHTML = `Title: ${book.title} <br> Author: ${book.author} <br> isRead: ${book.isRead}`;
    bookList.appendChild(paraTag);
}
)