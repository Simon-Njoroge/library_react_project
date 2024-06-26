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

  return (
    <>
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
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul>
            {filteredBooks.map((book, index) => (
              <div key={index} className="added">
                <table className="tableName2">
                  <tbody>
                    <tr>
                      <td>Title: <span>{book.title}</span></td>
                      <td>Author: <span>{book.author}</span></td>
                      <td>Year: <span>{book.year}</span></td>
                      <td>
                        <button onClick={() => deleteBook(index)}>Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </ul>
        )}
        {books.length > 0 && (
          <button onClick={handleDeletion}>Delete All Books</button>
        )}
      </div>
    </>
  );
};

export default Inputform;