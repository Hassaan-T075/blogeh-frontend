import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../models/useFetch";
import userdata from '../../constants/Constants'
import UserNavbar from "./UserNavbar";


const MyBlogDetails = () => {

    const { id } = useParams()
    const { data: blog, error, isPending } =
        useFetch('https://blogeh.herokuapp.com/api/home/blogs/' + id);
    //useFetch is used to get custom data of the particular blog

    const navigate = useNavigate()

    const handleClick = () => {
        fetch('https://blogeh.herokuapp.com/api/home/blogs/' + id, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${userdata.token}` }
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="blog-details">
            <UserNavbar/>
            <br/>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (//template containing information about blog is returned
                <article>
                    <h2>{blog.blog.title}</h2>
                    <p>Written by {blog.blog.username}</p>
                    <div>{blog.blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default MyBlogDetails;