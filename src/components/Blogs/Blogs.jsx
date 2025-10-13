import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddtoBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs: {blogs.length}</h2>
            {blogs.map(blog => <Blog
                 key={blog.id} blog={blog}
                 handleAddtoBookmark={handleAddtoBookmark}
                 handleMarkAsRead={handleMarkAsRead}
                 ></Blog>)
            }
        </div>
    );
}; 

Blogs.prototype = {
    handleAddtoBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};

export default Blogs;