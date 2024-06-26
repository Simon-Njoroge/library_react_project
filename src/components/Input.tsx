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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editAuthor, setEditAuthor] = useState<string>("");
  const [editYear, setEditYear] = useState<string>("");
  const booksPerPage = 5;

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const handleData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditing && editIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = { title: editTitle, author: editAuthor, year: editYear };
      setBooks(updatedBooks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newBook = { title, author, year };
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);
    }

    setTitle("");
    setAuthor("");
    setYear("");
    setEditTitle("");
    setEditAuthor("");
    setEditYear("");
    inputRef.current?.focus();

    localStorage.setItem('books', JSON.stringify(books));
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

  const handleEdit = (index: number) => {
    const bookToEdit = books[index];
    setEditTitle(bookToEdit.title);
    setEditAuthor(bookToEdit.author);
    setEditYear(bookToEdit.year);
    setEditIndex(index);
    setIsEditing(true);
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
    }, 1000);
  };

  const closeLibrary = () => {
    document.body.classList.remove("open");
    document.body.classList.add("close");
  };

  return (
    <>
      <div className="whole">
        <div>
          <button onClick={openLibrary} className="openLibrary">Open Library</button>
          <button onClick={closeLibrary} className="closing">Close Library</button>
        </div>
        <div className="all">
          <div className="form">
            <form onSubmit={handleData}>
              <h1>{isEditing ? 'EDIT BOOK' : 'ADD A BOOK'}</h1>
              <label htmlFor="title">Book Title:</label><br />
              <input
                type="text"
                id="title"
                value={isEditing ? editTitle : title}
                onChange={(e) => isEditing ? setEditTitle(e.target.value) : setTitle(e.target.value)}
                ref={inputRef}
                required
              /><br /><br />
              <label htmlFor="author">Author:</label><br />
              <input
                type="text"
                id="author"
                value={isEditing ? editAuthor : author}
                onChange={(e) => isEditing ? setEditAuthor(e.target.value) : setAuthor(e.target.value)}
                required
              /><br /><br />
              <label htmlFor="year">Publication Year:</label><br />
              <input
                type="text"
                id="year"
                value={isEditing ? editYear : year}
                onChange={(e) => isEditing ? setEditYear(e.target.value) : setYear(e.target.value)}
                required
              /><br /><br />
              <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
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
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => deleteBook(index)}>Delete</button>
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