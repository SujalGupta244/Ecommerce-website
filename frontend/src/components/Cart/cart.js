import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import data from "../../data";
import img1 from '../../assets/img/12900KF.jpg'
import { FaRupeeSign } from "react-icons/fa";


function Cart() {
    const [selectedProducts,setSelectedProducts] = useState(data);  
    
    useEffect(()=>{
        setSelectedProducts(data);
    },[data])
    
    return (
    <div className="container">
        <div className="cart">
            <h1>Your Cart</h1>
            {selectedProducts.map((item,index) =>{
                return <Item {...item} key={index}/>
            })}
            <h3>SubTotal : <FaRupeeSign/>0</h3>
            <button className="btn checkout"><Link to={'/checkout'}>Proceed to checkout</Link></button>
        </div>
    </div>
);
}


const Item = React.memo((props) =>{
    const {id, name,full_name,img, price} = props;
    return(
    <div className="cart-item item">
                {/* <Link to={`/products/${id}`}> */}
                    <img src={img || img1} alt={full_name} />
                    <div className="item-details">
                        <h2>{full_name} ({name})</h2>
                        <h3><FaRupeeSign/>{price}</h3>
                        <div className="qut">
                            <select name="qut" id="qut">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <h3>subtotal : <FaRupeeSign/> 0</h3>
                        <button className="btn">delete</button>
                    </div>
                {/* </Link> */}
            </div>
    )
})

Item.propTypes = {
    id : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    category : PropTypes.array.isRequired,
    sub_category : PropTypes.string.isRequired,
    amount : PropTypes.number.isRequired,
}

Item.defaultProps = {
category : ["no category"],
img: 'no image'
}


export default Cart;
