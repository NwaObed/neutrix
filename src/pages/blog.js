import React from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from '../components/Blogs'
import blogsRepo from '../res/blog-repo';

const BlogPost = ()  => {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate('/construction');
    };

    return (
        <div className="blogpost">
            {/* <h1>Blog page</h1> */}
            {blogsRepo.map(blogItem => (
                <div key={blogItem.key} onClick={() => handleNavigate(blogItem.key)}>
                    <Blog
                        title={blogItem.title}
                        content={blogItem.content} />
                </div>
                ))
            }
        </div>
    )
}

export default BlogPost;