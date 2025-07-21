const books = [
  {
    title: "hujan",
    authorName: "tereliye",
    releaseYear: 1950
  },
  {
    title: "hujin",
    authorName: "tereliye",
    releaseYear: 1945
  },
  {
    title: "hujun",
    authorName: "tereliye",
    releaseYear: 2003
  },
];


const sortByYear = (book1, book2) => {
  const book1Year = book1.releaseYear;
  const book2Year = book2.releaseYear;

  if (book1Year > book2Year) {
    return 1;
  } else if (book1Year < book2Year) {
    return -1;
  } else {
    return 0
  }
}

let filteredBooks = books.filter(book => book.releaseYear >= 1950);
filteredBooks = filteredBooks.sort(sortByYear);

console.log(filteredBooks);