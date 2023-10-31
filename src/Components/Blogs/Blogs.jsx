import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({addToBookmark,handleMarkRead}) => {
    const[blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('./Blogs.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    }
        ,[])

    return (
        <div className='md:w-2/3'>
            <h1>Blogs:{blogs.length}</h1>
            {
                blogs.map(blog =><Blog key={blog.ID } blog={blog}
                    addToBookmark={addToBookmark}
                    handleMarkRead={handleMarkRead}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;