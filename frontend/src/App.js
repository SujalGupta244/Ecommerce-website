import React, {useEffect} from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Home from './components/Home/home';
import Account from './components/User/Account';
import Login from './components/User/Login';
import Nav from "./components/Home/nav";
import Dashboard from './components/Admin/Dashboard';
import AddUser from './components/Admin/addUser';
import UpdateUser from './components/Admin/updateUser';
import AddProduct from './components/Admin/addProduct';
import UpdateProduct from './components/Admin/updateProduct';
import Products from './components/Products/products';
import Product from './components/Products/product';
import Cart from './components/Cart/cart';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  useEffect(()=>{
    document.title = "Ecommerce Website";
  })
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
          <Route path="/User/Account"element={<Account/>}></Route>
          <Route path="/login"element={<Login/>}></Route>
          <Route path="/admin/dashboard/addUser"element={<AddUser/>}></Route>
          <Route path="/admin/dashboard/updateUser"element={<UpdateUser/>}></Route>
          <Route path="/admin/dashboard/addProduct"element={<AddProduct/>}></Route>
          <Route path="/admin/dashboard/updateProduct"element={<UpdateProduct/>}></Route>
          <Route path="/products/:category" element={<Products/>}></Route>
          <Route path="/featureProducts/:productId" element={<Product/>}></Route>
          <Route path="/products/:category/:productId" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;