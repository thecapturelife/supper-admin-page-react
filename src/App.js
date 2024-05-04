import './App.css';
import Signup from './Components/Signup';
import Home from './Components/Home';

import { Route, Routes } from 'react-router-dom';
import AddData from './Components/AddData';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element ={<Signup />} />
        <Route path='/home' element={<Home /> } />
        <Route path='/adddata' element={<AddData />} />
     
       
    </Routes>
    </div>
  );
}

export default App;
