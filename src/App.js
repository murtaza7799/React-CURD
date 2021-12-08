import React from 'react'
import { Link, BrowserRouter, Routes, Route, Switch} from 'react-router-dom';


import NotFound from './Component/NotFound';
import NavBar from './Component/NavBar';
import ProductForm from './Component/Products/ProductForm';
import ProductDetails from './Component/ProductDetails';
import Login from './Component/Auth/login';
import SignUp from './Component/Auth/signup';

function App() {
  return (
    <div >
      
      <Routes>
      <Route path="/" element={<Login />}>
      </Route>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="*" element={<NotFound />}/>
      <Route  path="/Home" element={<NavBar />}/>

    </Routes>
    </div>
  );
}

export default App;
