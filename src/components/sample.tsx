import book6 from '../images/book 6.webp'
import book5 from '../images/book 5.webp'
import book4 from '../images/books 4.webp'
import book3 from '../images/book 3.webp'
import book7 from "../images/book7.webp"
import book8 from '../images/book8.webp'
import book9 from "../images/book 9.jpg"
import book10 from '../images/book 10.webp'
import book11 from '../images/book11.webp'
import book12 from '../images/book 12.jpg'
import book13 from '../images/book 13.jpg'
const Samplebooks = ()=>{
    const hideBooks=()=>{
        document .body.classList.add("hidebooks")
        document.body.classList.remove("sample")
    }
    
    return(
        <>
        <div>
        <div className="carousel rounded-box" id="sample" onClick={hideBooks}>
  <div className="carousel-item">
    <img
      src={book6}
      alt="book" />
  </div>
  <div className="carousel-item">
    <img
      src={book5}
      alt="Book" />
  </div>
  <div className="carousel-item">
    <img
      src={book4}
      alt="book" />
  </div>
  <div className="carousel-item">
    <img
      src={book3}
      alt="Book" />
  </div>
  <div className="carousel-item">
    <img
      src={book7}
      alt="Book" />
  </div>
  <div className="carousel-item">
    <img
      src={book8}
      alt="Book" />
  </div>
  <div className="carousel-item">
    <img
      src={book9}
      alt="book" />
  </div>
  <div className="carousel-item">
    <img
      src={book10}
      alt="book" />
  </div>
  <div className="carousel-item">
    <img
      src={book11}
      alt="book" />
  </div>
  <div className="carousel-item">
    <img
      src={book12}
      alt="book" />
  </div>
  <div className="carousel-item">
    <img
      src={book13}
      alt="book" />
  </div>
</div>
        </div>
        </>
    )
}
export default Samplebooks

