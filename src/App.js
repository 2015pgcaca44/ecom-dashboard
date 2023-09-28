import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Login from './Components/Login';
import Register from './Components/Register';
import GetUsers from './Components/GetUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/users' element={<GetUsers />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/add' element={<AddProduct />}></Route>
            <Route path='/update/:id' element={<UpdateProduct />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
