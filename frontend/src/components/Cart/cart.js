import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import data from "../../data";
import img1 from '../../assets/img/12900KF.jpg'
import { FaChevronDown, FaChevronUp, FaRupeeSign } from "react-icons/fa";
import {useGlobalContext} from '../../context';
import {createStore} from 'redux';
import { Provider } from "react-redux";
import cartReducer from "../../reducers/cartReducer";

import {CLEAR_CART, REMOVE, INCREASE, DECREASE, GET_TOTAL} from '../../actions/cartActions'
const list = [
    {
        category: "processor",
    details: "jlsdjfsljf fj wolfkjsd lksfjsl",
    img: "C:\\fakepath\\2.png",
    opening_stock: "5676",
    product_id: "-N9euyfBWgmdLwKJ50jA",
    product_name: "sdwew",
    quantity: 1,
    rate: "3242"},
    
    {
        category: "processor",
    details: "dfeweefw\n",
    img: "C:\\fakepath\\1.png",
    opening_stock: "2323",
    product_id: "-N9pj4mAPR7eNaym89Iu",
    product_name: "sujal gupta",
    quantity: 1,
    rate: "23423"}]


function Cart() {
    const {setCartList, cartList , clearCartList} = useGlobalContext()
    // const [cart,setCart] = useState([])
    const initialCart = {
        cart: list,
        total: 0,
        amount : 0
    }
    // const store = createStore(cartReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    const store = createStore(cartReducer,initialCart)
    const {total,amount} = store.getState()
    const {dispatch} = store;
    // useEffect(()=>{
    //     dispatch({type: GET_TOTAL})
    // },[cartList]);
      
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : cartList;
    // setCartList(cart)
//     useEffect(()=>{
//     let cart;
//     if(cartList !== []){
//     }
//     setCart(cart);
//   },[cartList])

    // console.log(cart);
    return (
    <Provider store={store}>
    <div className="container">
        <div className="cart">
            <h1>Your Cart </h1>
            {/* <h2>Your cart have {amount} items</h2> */}
            {cartList.map((item,index) =>{
                return <Item {...item} dispatch={dispatch} key={index}/>
            })}
            <h3>SubTotal : <FaRupeeSign/>{total}</h3>
            {cartList.length !== 0 && <button className="btn clear-cart" onClick={()=>{clearCartList(); dispatch({type:CLEAR_CART}) ;console.log(cartList);}}>Clear Cart</button>}
            {cartList.length === 0 && <h2>Cart is Empty</h2>}
            <button className="btn checkout"><Link to={'/checkout'}>Proceed to checkout</Link></button>
        </div>
    </div>
    </Provider>
);
}


const Item = React.memo((props) =>{
    const {removeCartItem, cartList} = useGlobalContext()

    const {product_id,product_name,category,opening_stock, details ,imgUrl, rate,quantity, dispatch} = props;
    // let qut = quantity;

    const removeItemLocal = (product_id) =>{
        removeCartItem(product_id);
        // localStorage.setItem('cart', JSON.stringify(cartList))
    }
    
    // console.log(dispatch);
    return(
    <div className="item cart-item">
        {/* <Link to={`/products/${id}`}> */}
            {/* <img src={imgUrl || img1} alt={product_name} /> */}
            <img src={imgUrl} alt={product_name} />
            <div className="item-details">
                <h2>{product_name}</h2>
                <h3><FaRupeeSign/>{rate}</h3>
                <p>{details.slice(0,80)}</p>
                <div className="qut">
                    <button className="inc" onClick={()=> { dispatch({type: INCREASE,payload: {product_id}}); }}><FaChevronUp/></button>
                    <p>quantity : {quantity}</p>
                    <button className="dec" onClick={()=> { dispatch({type: DECREASE,payload: {product_id, quantity}});}}><FaChevronDown/></button>
                </div>
                <button className="btn" onClick={()=>{removeItemLocal(product_id); dispatch({type: REMOVE, payload: {product_id}})}}>delete</button>
            </div>
        {/* </Link> */}
    </div>
    )
})


Item.propTypes = {
    product_id : PropTypes.string.isRequired,
    product_name : PropTypes.string.isRequired,
    imgUrl : PropTypes.string.isRequired,
    category : PropTypes.string.isRequired,
    // sub_category : PropTypes.string.isRequired,
    quantity : PropTypes.number.isRequired,
}

Item.defaultProps = {
category : "no category",
imgUrl: 'no image'
}


export default Cart;
