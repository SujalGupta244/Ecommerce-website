import React , {useContext} from "react";
import {User, ProductCategory, ProductItem, ProductTransaction} from './backend/index'; 

const AppContext = React.createContext();

function AppProvider({children}) {
 
  const user = new User();
  const prod = new ProductItem();
  const productCategory = new ProductCategory();
  const productTransaction = new ProductTransaction();
  
  return (
    <AppContext.Provider value={{user,prod,productCategory,productTransaction}}>
        {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};
