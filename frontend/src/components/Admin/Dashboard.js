import React, {useState ,useEffect} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import userImg from '../../assets/img/user.png';
// import data from "../../data";
import {useGlobalContext} from '../../context';
import { MdDelete } from 'react-icons/md' 
import { FiEdit } from 'react-icons/fi'

function Dashboard() {

  const {prod} = useGlobalContext()
  const [data,setData] = useState([]);

  
  useEffect(()=>{
    prod.register_get_all_product_items_callback(getAllItems)
    return ()=>{
    prod.unregister_get_all_product_items_callback()
    }
  },[])
  // console.log();

  // Get all products from the database and also setting their product_id property
  const getAllItems = (items) =>{
      const products = Object.entries(items).map(([key,item]) =>{
        return {product_id : key,...item};
      })

      // Set all product according to their categories 
      setData(products);

  };

  return (
    <div className="dashboard container">
      <div className="adminLeft">
        <div className="admImg">
          <img src={userImg || "not Found"} alt="admin Img" />
        </div>
        <h1>Admin Page</h1>
      </div>
      <div className="adminRight">
        <button className="btn"><Link to='/admin/dashboard/addProduct'>Add Product</Link></button>
        <button className="btn"><Link to='/admin/dashboard/addUser'>Add User</Link></button>
        <button className="btn"><Link to='/admin/dashboard/updateProduct'>Update Product</Link></button>
        <button className="btn"><Link to='/admin/dashboard/updateUser'>Update User</Link></button>

        <div className="product-list">
          <h1>Products List</h1>
          {data.map((item,index) =>{
            return <ProductItem key={index} {...item}/>
          })}
        </div>
      </div>
    </div>
  )
}


const ProductItem = (props) =>{
  const {prod} = useGlobalContext()
  const {product_id,product_name,category,opening_stock, details ,imgUrl, rate} = props;
  return(
    <div className="product-item">
      <h4>{product_name}</h4>
      <div className="category-item">
        <p>{category}</p>
      </div>
      <p>rate : {rate}</p>
      <p>stock: {opening_stock}</p>
      <button className="btn" onClick={()=> prod.remove_product_item(product_id)}><MdDelete/></button>
      <button className="btn" ><Link to={`/admin/dashboard/updateProduct/${product_id}`}><FiEdit/></Link></button>
    </div>
  )
}


ProductItem.propTypes = {
  product_id : PropTypes.string.isRequired,
  product_name : PropTypes.string.isRequired,
  category : PropTypes.string.isRequired,
  rate : PropTypes.string.isRequired,
  opening_stock : PropTypes.string.isRequired,
}

ProductItem.defaultProps = {
  category : "no category",
}


export default Dashboard;
