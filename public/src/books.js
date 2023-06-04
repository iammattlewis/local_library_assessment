function findAuthorById(authors, id) {
  let foundAuth = authors.find((author) => author.id === id);
  return foundAuth;
}

/*
// Old function without helper //
function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}
*/

// New function using helper //
function findBookById(books, id) {
  //use the findElementById helper function I wrote
  return findElementById(books, id);
}

 function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
  );
  let borrowedBooks = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
  );
  let partitionedBooks = [[...borrowedBooks], [...returnedBooks]];
  return partitionedBooks;  
}


function getBorrowersForBook(book, accounts) {
  return book.borrows 
  .map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  })
  .slice(0,10);
}

// Helper function //
function findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
