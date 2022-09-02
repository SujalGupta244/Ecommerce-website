import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/img/12900KF.jpg'
import data from '../../data.js';
import {useGlobalContext} from '../../context'; 

function FeaturedArea() {
  const {prod} = useGlobalContext()

  const [filterData,setFilterData] = useState([]);
  const [category,setCategory] = useState('feature');

  
  useEffect(()=>{
    prod.register_get_all_product_items_callback(getAllItems)
    return ()=>{
    prod.unregister_get_all_product_items_callback()
    }
})

  const getAllItems = (items) =>{
    const filtercategories = Object.entries(items).map(([key,item]) =>{
            return {product_id : key,...item};
    })
    .filter((item) =>{
        if(item.category === category){
            return item;
        }
    })

    setFilterData(filtercategories);

  }
  return (
    <div className="featureArea">
      <div className="featureGallery">
        {filterData.map((item) =>{
          return(
            <FeatureItem {...item} key={item.product_id}/>
            )
          })}
      </div>
    </div>
  );
}

const FeatureItem = (props) =>{
  const {setProdId} = useGlobalContext()

  const {product_id,product_name,category,opening_stock, details ,imgUrl, rate} = props;

  // console.log(category);
  return(
    <div className="featureItem item" onClick={()=>setProdId(product_id)}>
      <Link to={`/featureProducts/${product_name}`}>
        <img src={imgUrl} alt={product_name} />
        <h5>{product_name}</h5>
      </Link>
    </div>
  )
}

export default FeaturedArea;
