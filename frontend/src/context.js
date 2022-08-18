import React , {useContext, useState} from "react";
import {User, ProductCategory, ProductItem, ProductTransaction} from './firebase/firebase'; 

const AppContext = React.createContext();

function AppProvider({children}) {

  const [isUser,setIsUser] = useState({});
  const [isAdmin,setIsAdmin] = useState({});
 
  const user = new User();
  const prod = new ProductItem();
  const productCategory = new ProductCategory();
  const productTransaction = new ProductTransaction();
  
  return (
    <AppContext.Provider value={{
      user,
      prod,
      productCategory,
      productTransaction,
      isAdmin,
      isUser,
      setIsAdmin,
      setIsUser}}>
        {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};
