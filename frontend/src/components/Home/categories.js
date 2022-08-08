import React , {useState} from "react";
import data from '../../data.js';
import {Link} from 'react-router-dom';

import {FaChevronDown} from 'react-icons/fa'

const allMainCategories = [...new Set(data.map(item => item.category))];
const homeCategories = [...new Set(data.map(item => item.category))].slice(0,9);
function Categories() {

  const [show,setShow] = useState(true);
  // console.log(allMainCategories);
  return (
    <div className="categories">
      {homeCategories.map(category =>{
        return (
         <Category category={category} key={category}/> 
        )
      })}
      <Others show={show} setShow={setShow}/>
    </div>
  );
}

const Category = (props) =>{
  return (
      <div className="category" >
          <h4><Link to={`/products/${props.category}`}>{props.category}</Link></h4>
        </div>
  )
}

const Others = (props) =>{
  const {show,setShow} = props;
  return(
    <>
      <div className="other">
        <h4>Others</h4>
        <FaChevronDown/>
      </div>
      {show &&
        <div className="all-category">
          {allMainCategories.map(category =>{
            return (
            <h4 key={category}>{category}</h4> 
            )
          })}
        </div>
      }
    </>
  )
}


export default Categories;
