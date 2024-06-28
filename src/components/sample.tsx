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
import book14 from '../images/book 14.webp'
import book15 from '../images/book 15.jpg'
import book16 from '../images/book 16.jpg'
import book17 from '../images/book 17.jpg'
import book18 from '../images/book 18.jpg'
import book19 from '../images/book 19.jpg'
import book20 from '../images/book 20.jpg'
const Samplebooks = ()=>{
    const hideBooks=()=>{
        document .body.classList.add("hidebooks")
        document.body.classList.remove("sample")
    }
    
    return(
        <>
        <div>
        <div className="carousel rounded-box " id="sample" onClick={hideBooks}>
  <div className="carousel-item w-100">
    <img
      src={book6}
      alt="book" />
  </div>
  <div className="carousel-item w-100 ">
    <img
      src={book5}
      alt="Book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book4}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book3}
      alt="Book" />
  </div>
  <div className="carousel-item w-300">
    <img
    className='w-300'
      src={book7}
      alt="Book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book8}
      alt="Book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book9}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book10}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book11}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book12}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book13}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book14}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book15}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book16}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book17}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book18}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book19}
      alt="book" />
  </div>
  <div className="carousel-item w-100">
    <img
      src={book20}
      alt="book" />
  </div>
</div>
        </div>
        </>
    )
}
export default Samplebooks

