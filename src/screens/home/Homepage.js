import BlogList from './BlogList';
import useFetch from '../../models/useFetch';
// import React from 'react';
// import ReactDOM from 'react-dom';
import userdata from '../../constants/Constants';
import AuthNavbar from '../auth/AuthNavbar';
import UserNavbar from './UserNavbar';

const Homepage = () => {
    const {data : blogs, isPending, error} = useFetch('http://localhost:3000/api/home/blogs')
    return (
        <div className="home">
            <UserNavbar/>
            {console.log(blogs)}
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            <br/>
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Homepage;