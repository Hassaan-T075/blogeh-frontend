import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userdata from "../../constants/Constants";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    //const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault() //prevents poge from refreshing
        const blog = { title, body }

        setIsLoading(true)

        //make post request here
        fetch('https://blogeh.herokuapp.com/api/home/new-blog', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                headers: { 'Authorization': `Bearer ${userdata.token}` }
            },
            body: JSON.stringify(blog) // 'stringify' converts 'blog object' into 'json string'
        }).then(() => {
            console.log(userdata.token);
            console.log('new blog added');
            setIsLoading(false);
            //navigate(-1) //goes on step back
            navigate('/');
        })

    }

    return (
        <div className="content">
            <h2>Add a New Blog</h2>
            <form
                onSubmit={handleSubmit}
            > {/*clicking on 'add' button fires a submit event, we can listen to that submit event in form and react to it*/}
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // we are binding state and value. onChange attribute fires a
                //function which updates state with 'e.target.value' 
                />
                <label>Blog body:</label>
                <textarea rows='10'
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {/* <br/> */}
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

//Programmatic Redirects: after clicking on 'add' button, we need to redirect on another page
//this can be done using the hook called useHistory

export default Create;