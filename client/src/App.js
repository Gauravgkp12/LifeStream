import {Route,Routes} from 'react-router-dom'
import Homepage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';

function App() {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>

            <Homepage/>
          </ProtectedRoute>
          
          }/>
        <Route path='/login' element={
          <PublicRoute>

            <Login/>
          </PublicRoute>
          }/>

        <Route path='/register' element={
          <PublicRoute>

            <Register/>
          </PublicRoute>
          }/>
      </Routes>
    </>
  );
}

export default App;
