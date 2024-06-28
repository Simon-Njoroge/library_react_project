import '../index.scss'
import me from '../images/meS.jpg'
import { FileQuestion , Trash2 , House,Plus,ThumbsUp , BookOpenText } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header =( )=>{
 
    const handleAdd=()=>{{
        document.body.classList.add("showA")
        document.body.classList.remove("Hinput")
    }}
    const [likeCount, setLikeCount] = useState<number>( () => parseInt(localStorage.getItem('likes') || '0')); 
    const handleLikes = () => {
      const liked:number =likeCount + 1; 
     localStorage.setItem('likes',liked.toString())
      setLikeCount(liked)
    };
  useEffect(()=>{
    handleLikes()
  },[])
  const showSample=()=>{
    document.body.classList.add("sample")
    document .body.classList.remove("hidebooks")
  }
  const darkness=()=>{
    document.body.classList.toggle("darkness")
  }
 return(
    <>
   
    <div className="navbar bg-base-100 flex-wrap">
  <div className="flex-none">
   
    <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1"> <button className="btn btn-square btn-ghost">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-5 shadow">
    <li className='my-1'><a href=""><House />Home</a></li>
    <li onClick={handleAdd}><a ><Plus />add A book</a></li>
    <li className='my-1'><a> <Trash2 />Delete a Book</a></li>
    <li className='my-1' onClick={showSample}><a> <BookOpenText />Sample Books</a></li>
    <li className='my-1'><a href='https://library-api-871a.onrender.com/' target='_blank'> <FileQuestion /> help</a></li>
    <li className='my-1'><button onClick={handleLikes}><ThumbsUp />Like<span>{localStorage.getItem("likes")}<span/></span></button></li>
  </ul>
</div>

  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Robosoft Books Library</a>
  </div>
  <div className="flex-none">
 
  <label className="swap swap-rotate">
 
  <input type="checkbox" className="theme-controller" value="synthwave" />

  
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  
  <svg onClick={darkness}
  id="moon"
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
      
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
<div className="avatar">
  <div className="ring-primary ring-offset-base-100  rounded-full ring ring-offset-2 w-10 mx-2 cursor-pointer">
    <img src={me} width='10px' />
  </div>
</div>
  </div>
</div>
    </>
 )
}
export default Header
