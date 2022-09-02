import React , {useEffect, useState} from "react";
import data from '../../data.js';
import {Link} from 'react-router-dom';
import { useGlobalContext } from "../../context.js";
import {FaChevronDown} from 'react-icons/fa'


// const allcategories = data.reduce((array,item) =>{
//   item.category.forEach(cat =>{
//     array.push(cat);
//   })
//   return array;
// },[]);

// const allMainCategories = [...new Set(allcategories.map(item => item))];
// const homeCategories = [...new Set(allcategories.map(item => item))].slice(0,8);


function Categories() {
  const {prod} = useGlobalContext();
  const [show,setShow] = useState(false);
  // console.log(allMainCategories);
  
  const [allMainCategories,setAllMainCategories] = useState([]);
  const [homeCategories,setHomeCategories] = useState([]);
  
  const getAllItems = (items) =>{
    const all = Object.entries(items).map(([key,item]) =>{
      return {product_id : key,...item};
    })
    setAllMainCategories([...new Set(all.map(item => item.category))]);
    setHomeCategories([...new Set(all.map(item => item.category))].slice(0,8));
    // console.log(allMainCategories, homeCategories);
  }
  
  useEffect(()=>{
    prod.register_get_all_product_items_callback(getAllItems)
    // console.log(prod);
    return ()=>{
      prod.unregister_get_all_product_items_callback()
    }
  },[prod])

  return (
    <div className="categories">
      {homeCategories.map((category,index) =>{
        return (
         <Category category={category} key={index}/> 
        )
      })}
      <Others show={show} allMainCategories={allMainCategories} setShow={setShow}/>
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
  const {show,setShow, allMainCategories} = props;
  return(
    <>
      <div className="other" onClick={()=>setShow(!show)}>
        <h4>Others</h4>
        <FaChevronDown/>
      </div>
      {show &&
        <div className="all-category">
          {allMainCategories.map(category =>{
            return (
              <div className="category">
                <h4 key={category}>
                <Link to={`/products/${category}`}>{category}</Link>
                </h4> 
              </div>
            )
          })}
        </div>
      }
    </>
  )
}


export default Categories;
