import './header.scss'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'
import { useState } from 'react'

const Header =()=>{
    const [isMoon, setIsMoon] = useState(true); 

    const darkLight = () => {
        setIsMoon(!isMoon); 
        document.body.classList.toggle("back")
    };

 return(
    <>
    <div className='header' >
        <h1 className=''>Robososoft Books Library</h1>
        <img src={isMoon? moon:sun} alt="" onClick={darkLight}/>
    </div>
    </>
 )
}
export default Header