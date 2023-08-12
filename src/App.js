import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Discovery from './pages/Discovery';
import AddNewCar from './pages/AddNewCar';
import ProtectedRouteV1 from './hoc/ProtectedRouteV1';
import ProtectedRoutesV2 from './hoc/ProtectedRouteV2';
import EditCar from './pages/EditCar';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/> } />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route element={<ProtectedRouteV1 />}>
          <Route path='/discovery' element={<Discovery/>} />
          <Route path='/addcar' element={<AddNewCar />} />
          <Route path='/edit/:id' element={<EditCar />} />
      </Route>
      {/* Above how to use ProtectedRoutev1 */}
      {/* Below how to use ProtectedRouteV2 */}
      {/* <Route 
        path='/discovery' 
        element={
          <ProtectedRoutesV2>
              <Discovery />
          </ProtectedRoutesV2>
        }
        ></Route> */}
    </Routes>
  );
}

export default App;
