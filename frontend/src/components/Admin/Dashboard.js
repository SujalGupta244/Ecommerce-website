import React from "react";
import {Link} from 'react-router-dom';
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="adminLeft">
        <div className="admImg">
          <img src="" alt="admin Img" />
        </div>
        <h1>Admin Page</h1>
      </div>
      <div className="adminRight">
        <button className="btn"><Link to='/admin/dashboard/addProduct'>Add Product</Link></button>
        <button className="btn"><Link to='/admin/dashboard/addUser'>Add User</Link></button>
        <button className="btn"><Link to='/admin/dashboard/updateProduct'>Update Product</Link></button>
        <button className="btn"><Link to='/admin/dashboard/updateUser'>Update User</Link></button>

        <div className="product-list"></div>
      </div>
    </div>
  )
}

export default Dashboard;
