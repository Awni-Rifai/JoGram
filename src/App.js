import logo from './logo.svg';
import './App.css';
import SignupForm from './components/form/SignupForm';
import Home from './components/Home/Home';
import Navbar from './components/Navabar/Navabr';
import { Route, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import { useState } from 'react/cjs/react.development';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  const navigate=useNavigate();
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  console.log(isLoggedIn);
  const loggedIn=()=>{
    
    //verify and login the user
    setIsLoggedIn(true)
    navigate("/");
  }
  
  return (
   
    <AuthContext.Provider
    value={{
      isLoggedIn:isLoggedIn,
    }}
    >
    <Navbar/>
    <Routes>

      <Route path="/" element={ <Home/>}/>
      <Route path="register" element={ <SignupForm loggedIn={loggedIn}/>}/>
      <Route
            path="/:id"
            element={<SinglePost/>}
          />
      
    
   
    </Routes>
    </AuthContext.Provider>
  

  )
}

export default App;
