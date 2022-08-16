import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import img1 from '../../assets/img/12900KF.jpg';
import data from "../../data";
function Dashboard() {
  return (
    <div className="dashboard container">
      <div className="adminLeft">
        <div className="admImg">
          <img src={img1 || "not Found"} alt="admin Img" />
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
  const {id, name, full_name,category,amount} = props;
  return(
    <Link to={'/'}>
    <div className="product-item">
      <h4>{id}</h4>
      <p>{name}</p>
      <p>{full_name}</p>
      <div className="category-item">
        {category.map((cat,index) =>{
          return <p key={index}>{cat}</p>
        })}
      </div>
      <p>{amount}</p>
    </div>
    </Link>
  )
}


ProductItem.propTypes = {
  id : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  category : PropTypes.array.isRequired,
  sub_category : PropTypes.string.isRequired,
  amount : PropTypes.number.isRequired,
}

ProductItem.defaultProps = {
  category : ["no category"],
  img: 'no image'
}


export default Dashboard;
