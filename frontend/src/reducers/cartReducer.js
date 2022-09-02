import {CLEAR_CART, DECREASE, GET_TOTAL, INCREASE, REMOVE} from '../actions/cartActions';

const initialCart = {
    cart: [],
    total: 0,
    amount : 0
}



const cartReducer = (state = initialCart,action)=>{
    let tempCart;
    // let total = 0;
    switch (action.type){
        case CLEAR_CART:
            // console.log("clear the cart");
            return {...state, cart: []};
        case DECREASE:
            if(action.payload.quantity === 1){
                tempCart = state.cart.filter(item => item.product_id !== action.payload.product_id);
            }else{
                tempCart = state.cart.map(item =>{
                    if(item.product_id === action.payload.product_id){
                        item = {...item,quantity:item.quantity - 1}
                    }
                })
                console.log(state.cart[0].quantity);
            }
            return {...state,cart: tempCart};
        case INCREASE:
            tempCart = state.cart.map(item =>{
                if(item.product_id === action.payload.product_id){
                    item = {...item,quantity:item.quantity + 1}
                }
            })
            return {...state, cart: tempCart};
        case GET_TOTAL:
            let{total, amount} = state.cart.reduce((total,item)=>{
                const {rate,quantity} = item;
                total.total += rate*quantity;
                total.amount += quantity;
                return total;
            },{total: 0,amount: 0})
            total = total.toFixed(2);
            // console.log("total");
            return {...state,total,amount};
            // break;
        case REMOVE:
            // console.log("remove");   
            return {...state, cart : state.cart.filter(item => item.product_id !== action.payload.product_id)};
            // break;
        default: 
            return {...state} 
    }

    // return state;
}

export default cartReducer;