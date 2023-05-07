import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import AuthNavbar from './screens/auth/AuthNavbar';

function App() {
  return (
    <Router>
      <AuthNavbar/>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/register" element={<Register />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
