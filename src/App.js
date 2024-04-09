import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';
import SideBarMenu from './Components/SideBarMenu';

function App() {
  return (
  <div style={{width:"100%"}}>
  <div className='container'>
  <div className='sub_container_1'>
  <SideBarMenu/>
  </div>
  <div className='sub_container_2'>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
</div>
    </div>
  </div>
  );
}

export default App;
