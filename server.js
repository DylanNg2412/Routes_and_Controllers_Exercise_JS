const express = require("express");
const app = express();

let books = [
  {
    id: "b1",
    title: "Book One",
    description: "Description of book one",
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Book Two",
    description: "Description of book two",
    authorId: "a2",
  },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here

app.get("/", (request, response) => {
  response.json(books);
});

app.get("/books/:id", (request, response) => {
  const selectedBook = books.find((i) => i.id === "b2");
  const author = authors.find((i) => i.id === selectedBook.authorId);
  response.json({
    id: selectedBook.id,
    title: selectedBook.title,
    description: selectedBook.description,
    authorId: author.id,
    name: author.name,
    bio: author.bio,
  });
});

app.get("/reviews/:id", (request, response) => {
  const selectedReviews = reviews.find((i) => i.id === "r1");
  const book = books.find((i) => i.id === selectedReviews.bookId);
  response.json({
    id: selectedReviews.id,
    text: selectedReviews.text,
    bookId: selectedReviews.bookId,
    book_title: book.title,
  });
});

app.listen(4000, () => {
  console.log("Bookstore app is running on port http://localhost:4000");
});
