import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Tbook } from './Input';

const Books = () => {
  const [books, setBooks] = useState<Tbook[]>([]);
  const [searchTerm, setTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://library-api-871a.onrender.com/api/book');
      setBooks(response.data);
    } catch (error) {
      console.log('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  const filteredData = books.filter((book) =>
    book.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id="search"/>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Ref</th>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((book: Tbook) => (
              <tr key={book.id} className="even:bg-gray-100">
                <td>{book.id}</td>
                <td className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                  {book.Title}
                </td>
                <td>{book.Author}</td>
                <td>{book.Year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className={`btn ${currentPage === 1 ? 'btn-disabled' : ''}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >Previous
        </button>
        <div>Page {currentPage} of {totalPages}</div>
        <button
          className={`btn ${currentPage === totalPages ? 'btn-disabled' : ''}`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        > Next
        </button>
      </div>
    </>
  );
};

export default Books;