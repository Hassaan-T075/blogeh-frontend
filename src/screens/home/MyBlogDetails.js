import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../models/useFetch";
import userdata from "../../constants/Constants";
import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";

const MyBlogDetails = () => {
  const { id } = useParams();
  // const { data: blog, error, isPending } =
  //     useFetch('http://localhost:3000/api/home/blogs/' + id);
  // //useFetch is used to get custom data of the particular blog

  // return (
  //     <div className="blog-details">
  //         <UserNavbar/>
  //         <br/>
  //         {isPending && <div>Loading...</div>}
  //         {error && <div>{error}</div>}
  //         {blog && (//template containing information about blog is returned
  //             <article>
  //                 <h2>{blog.blog.title}</h2>
  //                 <p>Written by {blog.blog.username}</p>
  //                 <div>{blog.blog.body}</div>
  //                 <button onClick={handleClick}>delete</button>
  //             </article>
  //         )}
  //     </div>
  // );

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const username = userdata.username;

  //make post request here
  useEffect(() => {
    fetch("http://localhost:3000/api/home/blogs/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${userdata.token}`,
      },
      // 'stringify' converts 'blog object' into 'json string'
    })
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.blog.title);
        setBody(data.blog.body);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleClick = () => {
    fetch("http://localhost:3000/api/home/blogs/" + id, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userdata.token}` },
    }).then(() => {
      navigate("/home");
    });
  };

    const onUpdate = (e) => {
      e.preventDefault();

      const update = { title: title, body: body };

      //make post request here
      fetch("http://localhost:3000/api/home/blogs/" +id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Request-Method': 'PATCH',
          Authorization: `Bearer ${userdata.token}`,
        },
        body: JSON.stringify(update),
      })
        .then((data) => {
          console.log(userdata.token);
          console.log("profile updated");
          navigate("/home");
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

  return (
    <div className="blog-details">
      <UserNavbar />
      <br />
      {isLoading && <div>Loading...</div>}

      {!isLoading && ( //template containing information about blog is returned
        <article>
          <label>Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Body</label>
          <input
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={handleClick}>delete</button>
          &nbsp;
         
          <button onClick={onUpdate}>update</button>
        </article>
      )}
    </div>
  );
};

export default MyBlogDetails;
