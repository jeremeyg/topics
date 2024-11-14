const books = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "Animal Farm", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Brave New World", author: "Aldous Huxley" },
];

const byAuthor = books.reduce((acc, curr) => {
  const author = curr.author;
  if (!acc[author]) {
    acc[author] = [];
  }
  acc[author].push(curr);
  return acc;
}, {});
console.log(byAuthor);
