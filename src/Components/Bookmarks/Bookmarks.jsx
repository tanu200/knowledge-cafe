import Bookmark from "../Bookmark/Bookmark";



const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/2 bg-gray-300 ml-4 mt-3">
            <div>
                <h3>Reading Time:{readingTime}min</h3>
            </div>
            <h2 className="">Book mark:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.ID} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;