import React, { useRef, useState, useEffect } from "react";
import "./input.scss";

interface Tdata {
  title: string;
  author: string;
  year: string;
}

const Inputform = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [books, setBooks] = useState<Tdata[]>([]);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 5;

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const handleData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBook = { title, author, year };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    setTitle("");
    setAuthor("");
    setYear("");
    inputRef.current?.focus();

    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const deleteBook = (index: number) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);

    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const handleDeletion = () => {
    localStorage.removeItem('books');
    setBooks([]);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openLibrary = () => {
    window.alert("opening library please wait .....");
    document.body.classList.remove("close");
    setTimeout(() => {
      document.body.classList.add("open");
    }, 1500);
  };
const closeLibrary=()=>{
  document.body.classList.remove("open");
  document.body.classList.add("close");
}
  return (
    <>
      <div className="whole">
        <div>
        <button onClick={openLibrary} className="openLibrary">Open Library</button>
        <button onClick={closeLibrary} className="closing">closeLibrary</button>
        </div>
        <div className="all">
         
          <div className="form">
            <form onSubmit={handleData}>
              <h1>ADD A BOOK</h1>
              <label htmlFor="title">Book Title:</label>
              <br />
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={inputRef}
                required
              />
              <br />
              <br />
              <label htmlFor="author">Author:</label>
              <br />
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
              <br />
              <br />
              <label htmlFor="year">Publication Year:</label>
              <br />
              <input
                type="text"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
            <input
              type="text"
              id="searching"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title"
            />
          </div>
          <div className="data">
            <h2>Books List:</h2>
            {currentBooks.length === 0 ? (
              <p>No books found.</p>
            ) : (
              <table className="book-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBooks.map((book, index) => (
                    <tr key={index}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.year}</td>
                      <td>
                        <button onClick={() => deleteBook(index)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {books.length > 0 && (
              <button onClick={handleDeletion}>Delete All Books</button>
            )}

            
            {filteredBooks.length > booksPerPage && (
              <div className="pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                > Previous</button>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentBooks.length < booksPerPage}
                > Next</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputform;