import React , { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../imgs/3.jpg'
import img2 from '../../imgs/1.jpg'
import img3 from '../../imgs/2.jpg'
import img4 from '../../imgs/4.jpg'
import data from '../../data.js';

function FeaturedArea() {
  const [items,setItems] = useState(data);
  return (
    <div className="featureArea">
      <div className="featureGallery">
        {items.map(item =>{
          return(
            <FeatureItem {...item} img={img1} key={item.id}/>
            )
          })}
      </div>
    </div>
  );
}

const FeatureItem = (props) =>{
  return(
    <div className="featureItem">
      <Link to={'/product'}>
        <img src={props.img} alt="" />
        <h5>{props.fullName}</h5>
      </Link>
      </div>
  )
}

export default FeaturedArea;
