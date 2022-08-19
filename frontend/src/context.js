import React , {useContext, useState} from "react";
import {User, ProductCategory, ProductItem, ProductTransaction} from './firebase/firebase'; 

const AppContext = React.createContext();

function AppProvider({children}) {

  // User details will be saved in isUser state variable 
  const [isUser,setIsUser] = useState({});
  
  // check the login status of the user 
  const [isLogin,setIsLogin] = useState(false);

  // Admin details will be saved in isAdmin state variable 
  const [isAdmin,setIsAdmin] = useState({});
 
  const user = new User();
  const prod = new ProductItem();
  const productCategory = new ProductCategory();
  const productTransaction = new ProductTransaction();

  const addUserDetails = ((val) =>{
    setIsUser(val);
    setIsLogin(true);
  })

  const removeUserDetails = ()=>{
    setIsUser({});
    setIsLogin(false);
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
      setIsAdmin,
      addUserDetails,
      removeUserDetails}}>
        {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};
