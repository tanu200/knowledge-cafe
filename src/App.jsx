
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const[bookmarks, setBookmarks]=useState([]);
  const[readingTime, setreadingtime]=useState(0)
  const addToBookmark=blog=>{
const newBookmark =[...bookmarks,blog ];
setBookmarks(newBookmark);
  }

  const handleMarkRead=time=>{
    setreadingtime(readingTime + time)
  }


  return (
    <>
<Header></Header>
<div className='md:flex'>
<Blogs handleMarkRead={handleMarkRead} addToBookmark={addToBookmark}></Blogs>
<Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
</div>
    </>
  )
}

export default App
