import React, {useState, useEffect, useCallback} from "react";
import { useParams , Link } from "react-router-dom";
import PropTypes from 'prop-types';
import data from "../../data";
import img1 from '../../assets/img/12900KF.jpg'
import { FaRupeeSign } from "react-icons/fa";
import {useGlobalContext} from '../../context';

function Product() {
  const {prod, prodId, setProdId, addToCart, cartList} = useGlobalContext();
  const [productValue,setProductValue] = useState({})
  const {productName} = useParams();

  useEffect(()=>{
    if(prodId){
      localStorage.setItem('product_id', JSON.stringify(prodId));
    }
  },[prodId])


  useEffect(()=>{
    const id = localStorage.getItem('product_id') && localStorage.getItem('product_id') !== prodId ? JSON.parse(localStorage.getItem('product_id')): prodId;
    setProdId(id);
    console.log("helo");
    // get product according to its Id 
    // Get all details of product from the database 
    prod.register_get_product_item_callback(id, getProductDetails);

    return ()=>{
      prod.unregister_get_product_item_callback(id);
    }
  },[])
  // console.log();

  // Get all details of product 
  const getProductDetails = (item) =>{
    setProductValue({product_id:prodId,...item});
    // console.log(productValue);
  };

  const addCartToLocal = (productValue) => {
    addToCart({...productValue, quantity: 1}) 
    console.log(productValue);
    localStorage.setItem('cart', JSON.stringify(cartList))
  }


  const {product_id,product_name,category,opening_stock, details ,imgUrl, rate} = productValue;

  return (
    <div className="container">
      <div className="product">
        <div className="product-left">
          <img src={imgUrl} alt={product_name} />
        </div>
        <div className="product-right">
          <h1>{product_name}</h1>
          {/* <h2>{sub_category}</h2> */}
          <hr />
          <h3>About this item</h3>
          <p>{details}</p>
          <h5><FaRupeeSign/>{rate}</h5>
          <div className="product-btns">
            <button className="cart-btn btn" onClick={()=>addCartToLocal(productValue)}>Add to Cart</button>
            <button className="buy-btn btn">
              <Link to={`/checkout`}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



Product.propTypes = {
  // product_id : PropTypes.string.isRequired,
  category : PropTypes.array.isRequired,
  product_name : PropTypes.string.isRequired,
  sub_category : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  imgUrl : PropTypes.string.isRequired,
  amount : PropTypes.string.isRequired,
  rate : PropTypes.string.isRequired,
  details : PropTypes.string.isRequired,
}

Product.defaultProps = {
  category : ["no category"],
  imgUrl: 'no image',
  product_name : 'default name',
  sub_category : 'no category',
  name : 'no name',
  amount : 'not available',
  rate : 'not available',
  details : 'no information given',
}


export default Product;
