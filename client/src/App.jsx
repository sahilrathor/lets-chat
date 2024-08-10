import {Routes, Route, Navigate} from 'react-router-dom'
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import LogoutButton from "./components/sidebar/LogoutButton";
import { Toaster } from "react-hot-toast";
import {useAuthContext} from './components/context/authContext.jsx'


function App() {

  const {authUser} = useAuthContext();

    return (
        <div className="flex h-screen justify-center items-center p-4 relative">
          <Routes>
            <Route path='/signup' element={authUser ? <Navigate to="/" /> : <Signup />}/>
            <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />}/>
            <Route path='/' element={authUser ? <><Home /><LogoutButton /></> : <Navigate to="/login" />}/>
          </Routes>
          <Toaster />
        </div>
    );
}

export default App;
