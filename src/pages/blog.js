import React from 'react';

import Blog from '../components/Blogs'
import blogsRepo from '../res/blog-repo';

const BlogPost = ()  => {
    return (
        <div className="blogpost">
            {/* <h1>Blog page</h1> */}
            {blogsRepo.map(blogItem => (
                <Blog
                key={blogItem.key}
                title={blogItem.title}
                content={blogItem.content} />))
            }
        </div>
    )
}

export default BlogPost;