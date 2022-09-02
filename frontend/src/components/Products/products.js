import React, { useState, useEffect, useCallback } from "react";
import {useParams, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import data from "../../data";
import img1 from '../../assets/img/12900KF.jpg'
import {useGlobalContext} from '../../context'; 

// register_get_all_product_items_callback

function Products() {

    const {prod} = useGlobalContext()
    const [filterData,setFilterData] = useState([]);
    const {category} = useParams();
    
    useEffect(()=>{
        prod.register_get_all_product_items_callback(getAllItems)
        return ()=>{
        prod.unregister_get_all_product_items_callback()
        }
    },[])
    // console.log();
    
    // Get all products from the database and also setting their product_id property
    const getAllItems = (items) =>{
        const filtercategories = Object.entries(items).map(([key,item]) =>{
                return {product_id : key,...item};
        })
        .filter((item) =>{
            if(item.category === category){
                return item;
            }
        })

        // Set all product according to their categories 
        setFilterData(filtercategories);

    };

    return (
    <>
    <div className="container">
        <h1>{category}</h1>
        <div className="products">
            {filterData.map((item,index) =>{
                return (
                    <Item {...item} key={index}/>
                )
            })}
        </div>
    </div>
    </>
    );
}

const Item = React.memo((props) =>{
    const {setProdId} = useGlobalContext()

    // const {category} = useParams();
    const {product_id,product_name,category,opening_stock, details ,imgUrl, rate} = props;
    return(
    <div className="item" onClick={()=>setProdId(product_id)}>
                <Link to={`/products/${category}/${product_name}`}>
                    <img src={imgUrl || img1} alt={product_name} />
                    <h5>{product_name}</h5>
                    <h4>{rate}</h4>
                </Link>
            </div>
    )
})

Item.propTypes = {
    product_id : PropTypes.string.isRequired,
    product_name : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    category : PropTypes.string.isRequired,
    rate : PropTypes.string.isRequired,
}

Item.defaultProps = {
category : ["no category"],
img: 'no image'
}
  
export default Products;
