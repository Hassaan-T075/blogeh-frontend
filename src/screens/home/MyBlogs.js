import BlogList from './BlogList';
import useFetch from '../../models/useFetch';
import MyComponent from './temp';
// import React from 'react';
// import ReactDOM from 'react-dom';
import userdata from '../../constants/Constants';
import AuthNavbar from '../auth/AuthNavbar';
import UserNavbar from './UserNavbar';
import MyBlogList from './MyBlogList';

const MyBlogs = () => {
    
    // const root = ReactDOM.createRoot(
    //     document.getElementById('root')
    //   );

    const {data : blogs, isPending, error} = useFetch('https://blogeh.herokuapp.com/api/home/my-blogs')
    //this.setState({ state: this.state });
    return (
        <div className="home">
            <UserNavbar/>
            {console.log(blogs)}
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            <br/>
            {blogs && <MyBlogList blogs={blogs} title="All Blogs" />}
            {/* <MyComponent></MyComponent> */}
            {/* {root.render()} */}
        </div>
    );
}

export default MyBlogs;