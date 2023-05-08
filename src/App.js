import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import AuthNavbar from './screens/auth/AuthNavbar';
import UserNavbar from './screens/home/UserNavbar';
import Homepage from './screens/home/Homepage';
import MyProfile from './screens/profile/MyProfile';
import BlogDetails from './screens/home/BlogDetails';
import userdata from './constants/Constants'
import MyBlogs from './screens/home/MyBlogs';
import MyBlogDetails from './screens/home/MyBlogDetails';
import Create from './screens/home/Create';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/home" element={<Homepage />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="/myblogs/:id" element={<MyBlogDetails />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/profile" element={<MyProfile />}></Route>
            <Route exact path="/favorites" element={<MyBlogs />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;