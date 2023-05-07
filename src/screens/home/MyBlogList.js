import { Link } from 'react-router-dom';

const MyBlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id} >
          <Link to={`/myblogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.username}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MyBlogList;