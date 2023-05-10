import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../models/useFetch";
import userdata from '../../constants/Constants'
import UserNavbar from "./UserNavbar";


const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, error, isPending } =
        useFetch('http://localhost:3000/api/home/blogs/' + id);
    //useFetch is used to get custom data of the particular blog
    return (
        <div className="blog-details">
            <UserNavbar/>
            <br/>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (//template containing information about blog is returned
                <article>
                    <h2>{blog.blog.title}</h2>
                    <p>Written by <Link to={`/profile/${blog.blog.username}`}>{blog.blog.username}</Link></p>
                    <div>{blog.blog.body}</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;