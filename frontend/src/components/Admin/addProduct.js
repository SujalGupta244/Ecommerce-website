import React, {useState} from "react";
import { useGlobalContext } from "../../context";

// 'category_id',
// 'product_name',
// 'rate',
// 'unit',
// 'opening_stock'

function AddProduct() {
    const {prod} = useGlobalContext();
    const [product,setProduct] = useState({product_name : '',rate : '',opening_stock : '',img: '',category: [], details: ''})

    // const [id,setId] =  useState(Math.random().toString().slice(2));


    const handleChange = (e) =>{
        const {name,value} = e.target;
        setProduct({...product,[name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!product.product_name || !product.rate || !product.opening_stock || !product.img || !product.category || !product.details) return;
        
        // setId(Math.random().toString().slice(2));
        // product.product_id = id;
        // product.category = product.category.match(/\w+/g);
        
        // setProduct({...product,product_id: id})
        // setProduct({...product,[product.category]: product.category});
        console.log(product);
        prod.add_product_item(product);
        setProduct({product_name : '',rate : '',opening_stock : '',img: '',category: [], details: ''});
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
                <input type="file" id="img" name="img" value={product.img} onChange={handleChange}/>
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
    </div>
  );
}

export default AddProduct;

// first_name,
// last_name,
// address,
// city,
// country,
// contact_no,
// email,
// password
