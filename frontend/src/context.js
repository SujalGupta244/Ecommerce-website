import React , {useContext, useEffect, useState} from "react";
import {User, ProductCategory, ProductItem, ProductTransaction} from './firebase/firebase'; 

const AppContext = React.createContext();

function AppProvider({children}) {

  // User details will be saved in isUser state variable 
  const [isUser,setIsUser] = useState({});
  
  // check the login status of the user 
  const [isLogin,setIsLogin] = useState(false);

  // Admin details will be saved in isAdmin state variable 
  const [isAdmin,setIsAdmin] = useState({});

  // Get the id of the product
  const [prodId,setProdId] = useState('');

  // products added to Cart
  const [cartList,setCartList] = useState([]);

  // total selling Value
  const [total,setTotal] = useState(0);
  
  // Initial values of Cart items 
  const initialCart = {
    cart: cartList,
    total: total,
    amount : 0
}
  const user = new User();
  const prod = new ProductItem();
  const productCategory = new ProductCategory();
  const productTransaction = new ProductTransaction();


  
  useEffect(()=>{
    if(localStorage.getItem('product_id') ){
      setProdId(JSON.parse(localStorage.getItem('product_id')))
    }
  },[])

  // useEffect(()=>{
  //   setCartList(JSON.parse(localStorage.getItem('cart')))
  //   console.log("cart change");
  // },[])

  const addUserDetails = ((val) =>{
    setIsUser(val);
    setIsLogin(true);
  })

  const removeUserDetails = ()=>{
    setIsUser({});
    setIsLogin(false);
  }

  const clearCartList = () =>{
    setCartList([]);
  }
  
  const addToCart = (value)=>{
    setCartList([...cartList,value]);
    // localStorage.setItem('cart', JSON.stringify(cartList))

  }

  const removeCartItem = (id) =>{
    const tempCart = cartList.filter(item => item.product_id !== id)
    // console.log(id);
    setCartList(tempCart);
    localStorage.setItem('cart', JSON.stringify(cartList))
  }



  return (
    <AppContext.Provider value={{
      user,
      prod,
      productCategory,
      productTransaction,
      isAdmin,
      isUser,
      isLogin,
      prodId,
      cartList,
      initialCart,
      setCartList,
      setTotal,
      addToCart,
      setProdId,
      setIsAdmin,
      addUserDetails,
      removeUserDetails,
      removeCartItem,
      clearCartList}}>
        {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};
