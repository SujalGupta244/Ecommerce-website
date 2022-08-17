import React, { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import data from "../../data";
import img1 from '../../assets/img/12900KF.jpg'
import {useGlobalContext} from '../../context'; 

// register_get_all_product_items_callback

function Products() {

    const {prod} = useGlobalContext()
    const [filterData,setFiltrData] = useState([]);
    const {category} = useParams();
    const filtercategories = data.filter((item) =>{
        if(item.category.includes(category)){
            return item;
        }
    });

    const show = (items) =>{
        console.log(items);
    }
    prod.register_get_all_product_items_callback(show)

    console.log();

    // console.log(filtercategories);
    useEffect(() => {
        setFiltrData(filtercategories)
    }, [data]);
    

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
    const {category} = useParams();
    const {id,full_name,img, price} = props;
    return(
    <div className="item">
                <Link to={`/products/${category}/${id}`}>
                    <img src={img || img1} alt={full_name} />
                    <h5>{full_name}</h5>
                    <h4>{price}</h4>
                </Link>
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
  
export default Products;
