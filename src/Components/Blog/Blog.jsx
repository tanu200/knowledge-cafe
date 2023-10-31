import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,addToBookmark,handleMarkRead}) => {
const{Title,CoverImage,Author,AuthorImage,ReadingTime ,PostedDate,Hashtags}=blog;
    return (
        <div className='mb-20 space-y-4 '>
            <img className='w-full mb-8 h-1/2' src={CoverImage} alt="" />
            <div className='flex justify-between '>
                <div className='flex '>
                <img className='w-14 rounded-full' src={AuthorImage} alt=""  />
                 <div>
               <h5 className='text-2xl'>{Author}</h5>
               <h5>{PostedDate}</h5>
               </div>
                </div>
                <div>
                   <span>{ReadingTime} min read</span>
                   <button onClick={()=>addToBookmark(blog)} className='ml-2 text-red-300'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{Title}</h2>
            <h3>{Hashtags}</h3>
            <button onClick={()=>handleMarkRead(ReadingTime)} className='text-purple-500 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    addToBookmark:PropTypes.func
}
export default Blog;