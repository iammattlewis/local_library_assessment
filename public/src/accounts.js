function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((account0, account1) =>
  account0.name.last.toLowerCase() > account1.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrowed = 0;
  for (let i=0; i < books.length; i++) {
    for (let j=0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
        totalBorrowed += 1;
      }
    }
  }
  return totalBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  let possession = [];
  let matchingAccounts = [];
  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {}
    };
    const { id, title, genre, authorId, author, borrows } = book;
    borrowed.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
        possession.push(book);
        matchingAccounts.push(borrow);
        books.borrows = matchingAccounts;
        book.author = authors.filter((auth) => auth.id === book.authorId)[0]
      }
    });
  });
  return possession;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
