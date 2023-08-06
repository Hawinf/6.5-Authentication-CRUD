import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Discovery from './pages/Discovery';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/> } />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/discovery' element={<Discovery/>} />
    </Routes>
  );
}

export default App;
