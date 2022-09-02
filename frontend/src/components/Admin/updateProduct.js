import React, {useState, useEffect} from "react";
import {storage} from '../../firebase/firebase';
import {ref ,uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import { useGlobalContext } from "../../context";
import {useParams} from 'react-router-dom';

function UpdateProduct() {

  // const [productValue,setProductValue] = useState({})
  const {prodId} = useParams()
  const {prod} = useGlobalContext();
  const [product,setProduct] = useState({})

  useEffect(()=>{
    prod.register_get_product_item_callback(prodId, getProductDetails);
    
    return ()=>{
      prod.unregister_get_product_item_callback(prodId);
    }
  },[])

  const getProductDetails = (item) =>{
    setProduct(item);
    // console.log(product);
  };


  const handleChange = (e) =>{
      const {name,type ,value,files} = e.target;
      if(type === 'file'){
          setProduct({...product,[name]:files[0]})
          // console.log(files[0]);
      }else{
          setProduct({...product,[name]:value});
      }
  }
  const handleSubmit = (e) =>{
      e.preventDefault();


      if(product.imgFile || product.product_name){

        const imgRef = ref(storage,`product_images/${product.product_name}`);
        
        uploadBytes(imgRef,product.imgFile)
        .then((snapshot) =>{
            getDownloadURL(snapshot.ref)
            .then(url =>{
                // setImgList((prev)=> [...prev,url])
                product.imgUrl = url;
              })
        })
            
      }

      prod.update_product_item(prodId,product);
      // console.log(prodId);
      // setProduct({product_name : '',rate : '',opening_stock : '',imgFile: null, imgUrl : '' ,category: [], details: ''});
  }




return(
  <div className="container">
      <form className="product-form form">
          <h1>Enter Product Details</h1>
          <div className="form-group">
              <label htmlFor="full_name">Full Name</label>
              <input type="text"  id="full_name" name="product_name"value={product.product_name} onChange={handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="img">Img</label>
              <input type="file" id="img" name="imgFile" onChange={handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="category">Category</label>
              <input type="text" id="category" name="category" value={product.category} onChange={handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="rate">Rate</label>
              <input type="number" id="rate" name="rate" value={product.rate} onChange={handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="opening_stock">Stock</label>
              <input type="number" id="opening_stock" name="opening_stock" value={product.opening_stock} onChange={handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="details">Prdouct Details</label>
              <textarea id="details" name="details" value={product.details} onChange={handleChange}></textarea>
          </div>
          <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {/* {imgList.map(imgFile=>{
          return <imgFile src={imgFile} alt=''/>
      })} */}
  </div>
);
}


export default UpdateProduct;
