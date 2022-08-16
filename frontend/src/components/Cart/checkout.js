import React from "react";



function Checkout() {
    const handleChange =()=>{}
  return (
      <div className="container">
        <h1>Billing Details</h1>
        <form className="product-form form">
            <h1>Enter Your Details</h1>
            <div className="form-group">
                <label htmlFor="name">name</label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">address</label>
                <input type="text" id="address" name="address" onChange={handleChange}/>
            </div>
            <button className="btn" type="submit" >Place Order</button>
        </form>
    </div>
  );
}

export default Checkout;
