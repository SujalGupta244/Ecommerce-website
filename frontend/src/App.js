import React, {useEffect} from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Home from './components/Home/home';
import Account from './components/User/Account';
import Login from './components/User/Login';
import SignUp from './components/User/Register';
import Nav from "./components/Layouts/nav";
import Dashboard from './components/Admin/Dashboard';
import AddUser from './components/Admin/addUser';
import UpdateUser from './components/Admin/updateUser';
import AddProduct from './components/Admin/addProduct';
import UpdateProduct from './components/Admin/updateProduct';
import Products from './components/Products/products';
import Product from './components/Products/product';
import Cart from './components/Cart/cart';
import Checkout from './components/Cart/checkout';
import Footer from './components/Layouts/footer';
import ProtectedRoute from './Routes/ProtectedRoute';
import ProtectedRoute2 from './Routes/ProtectedRoute2';
import NotFound from './components/NotFound';
import {useGlobalContext} from './context';

import './App.css';

// import * as backend from '../../backend/index'; 


function App() {
  
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  window.addEventListener("keydown", (e) => {
    // if (e.keyCode == 123) e.preventDefault();
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
  });
  
  const {isAdmin, isUser} = useGlobalContext()

  // document.addEventListener("keydown", function(event) {
  //   console.log(event.which);
  // })
  
  useEffect(()=>{
    document.title = "Ecommerce Website";
  })
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true} >
            <Dashboard/>
          </ProtectedRoute>
        }></Route>

        <Route path="/User/Account"element={
          <ProtectedRoute2 isUser={isUser}>
            <Account/>
          </ProtectedRoute2>
        }></Route>

        <Route path="/login"element={<Login/>}></Route>
        <Route path="/signup"element={<SignUp/>}></Route>
        <Route path="/admin/dashboard/addUser"element={<AddUser/>}></Route>
        <Route path="/admin/dashboard/updateUser"element={<UpdateUser/>}></Route>
        <Route path="/admin/dashboard/addProduct"element={<AddProduct/>}></Route>
        <Route path="/admin/dashboard/updateProduct"element={<UpdateProduct/>}></Route>
        <Route path="/products/:category" element={<Products/>}></Route>
        <Route path="/products/:category/:productId" element={<Product/>}></Route>
        <Route path="/featureProducts/:productId" element={<Product/>}></Route>

        <Route path="/cart" element={
          <ProtectedRoute2 isUser={isUser}>
            <Cart/>
          </ProtectedRoute2>
        }></Route>

        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;