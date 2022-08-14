import React, {useState, useEffect, useCallback} from "react";
import { useParams , Link } from "react-router-dom";
import PropTypes from 'prop-types';
import data from "../../data";
import img1 from '../../assets/img/1.jpg'
import { FaRupeeSign } from "react-icons/fa";

function Product() {
  const [productValue,setProductValue] = useState({})
  const {productId} = useParams();

  const productData = useCallback(data.find(item =>{
      if(item.id === productId){
          return item;
      }
  }));

  useEffect(()=>{
    setProductValue(productData)
  },[data]);

  const {id,name, full_name, sub_category, img, price, details} = productValue;

  return (
    <div className="container">
      <div className="product">
        <div className="product-left">
          <img src={img || img1} alt={full_name} />
        </div>
        <div className="product-right">
          <h1>{full_name} ({name})</h1>
          <h2>{sub_category}</h2>
          <hr />
          <h3>About this item</h3>
          <p>{details}</p>
          <h5><FaRupeeSign/>{price}</h5>
          <div className="product-btns">
            <button className="cart-btn btn">Add to Cart</button>
            <button className="buy-btn btn">
              <Link to={`/buy/${id}`}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



Product.propTypes = {
  id : PropTypes.string.isRequired,
  category : PropTypes.array.isRequired,
  full_name : PropTypes.string.isRequired,
  sub_category : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  amount : PropTypes.number.isRequired,
  price : PropTypes.number.isRequired,
  details : PropTypes.string.isRequired,
}

Product.defaultProps = {
  category : ["no category"],
  img: 'no image',
  full_name : 'default name',
  sub_category : 'no category',
  name : 'no name',
  amount : 'not available',
  price : 'not available',
  details : 'no information given',
}


export default Product;
