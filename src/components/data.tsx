// import { useEffect, useState } from "react"
import React ,{useEffect, useState}from 'react'
import axios from "axios"
import { Tbook } from './Input'
const Books=()=>{
    const [books,setBooks]=useState<Tbook[]>([])
    const [searchTerm,setTerm]=useState<string>("")
  const fetchBooks=async()=>{
        await axios.get("https://library-api-871a.onrender.com/api/book")
        .then(res=>setBooks(res.data))
        .catch(error=>console.log(error))
    }
    useEffect(()=>{
        fetchBooks()
    },[])

    const searchedData = books.filter((book)=>
        book.Title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
    return(
 <>
        <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" value ={searchTerm} onChange={(e)=>{setTerm(e.target.value)}}/>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
   <div className="overflow-x-auto display: table-row-group, display: table-cell,object-fit: contain">
  <table className="table">
    <thead>
      <tr>
        <th>ref</th>
        <th>Title</th>
        <th>Author</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      
      {
        searchedData && searchedData.map((bok:Tbook)=>{
            return(
                <>
                <tr key={bok.id} style={{}}>
                <td>{bok.id}</td>
               <td className='text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"'>{bok.Title}</td>
               <td>{bok.Author}</td>
               <td>{bok.Year}</td>
               </tr>
                </>
            )
        })
      }
    </tbody>
  </table>
</div>
        </>
    )
}
export default Books