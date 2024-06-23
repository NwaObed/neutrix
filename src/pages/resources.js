import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogsRepo from '../res/blog-repo';
import Blog from '../components/Blogs'
import resourceRepo from '../res/resource-repo';

const ResourcePost = ()  => {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate('/construction');
    };
    return (
        <div className="blogpost">
            {resourceRepo.map(blogItem => (
                <div key={blogItem.key} onClick={() => handleNavigate(blogItem.key)}>
                    <Blog
                        title={blogItem.title}
                        content={blogItem.content} />
                    </div>))
            }
        </div>
    )
}



export default ResourcePost;






// {resourceRepo.map(resourceItem => (
//     <div onClick={handleNavigate} key={resourceItem.key}>
//         <Blog 
            
//             title={resourceItem.title}
//             content={resourceItem.content}/>
//     </div>
// ))}

// const navigate = useNavigate();

// const handleNavigate = () => {
//     // navigate('/mathematics')
//     console.log('I was clicked')
//     return (
//         <div className="blogpost">
//             {/* {resourceRepo.map(resourceItem => (
//             <Blog
//             key={resourceItem.key}
//             title={resourceItem.title}
//             content={resourceItem.content} />))
//         } */}

//             {blogsRepo.map(blogItem => (
//                 <Blog
//                 key={blogItem.key}
//                 title={blogItem.title}
//                 content={blogItem.content} />))
//             }
//         </div>
//     );
// }