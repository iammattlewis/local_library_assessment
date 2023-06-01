function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let checkedOut = books.filter(
    (book) =>
    book.borrows.filter((isReturned) => isReturned.returned === false).length > 0
  );
  return checkedOut.length;
}

function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
    if (map[num.genre]) {
      map [num.genre]++;
    } else {
      map[num.genre] = 1;
    }
  });
  return Object.entries(map)
  .map(([name, count]) => {
    return {
      name,
      count
    };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0,5);
}

function getMostPopularBooks(books) {
  return books
  .map((book) => {
    return{name: book.title, count: book.borrows.length};
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let bookAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        bookAuthor.count += book.borrows.length;
      }
    });
    result.push(bookAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};