import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import UserDetails from './Components/UserDetails/UserDetails';
import UserForm from './Components/User_Form/UserForm';
function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="navbar">
      <Link to='/'>Add Student</Link>
      <Link to='/userdetails'>Student Details</Link>
      </div>
      <Routes>
        <Route path='/' element={<UserForm/>}/>
        <Route path='/userdetails' element={<UserDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
