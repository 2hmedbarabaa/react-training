import {Link} from 'react-router-dom';

const BlogList = ({blogs, title}) => {

    return ( 
       <div className="blog-list">
        <h2>{title}</h2>
         {blogs.map((blog) => (
            <div className="blog-preview" key = {blog.id}>
              <link to= {`/blogs/${blog.id}`}>

              <h2>{blog.title}</h2>
              <p>Written By: {blog.author}</p>

              </link>
                   
                   
            </div>
        ))}
       </div>
     );
}
 
export default BlogList;