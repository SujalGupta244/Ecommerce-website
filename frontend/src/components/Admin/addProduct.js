import React, {useState} from "react";

function AddProduct() {
  const [product,setProduct] = useState({id:'', name: '', full_name: '',img: '',category: [],sub_category: '',amount : 0})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setProduct({...product,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(product);
        setProduct({id:'', name: '', full_name: '',img: '',category: [],sub_category: '',amount : 0});
    }
  return(
    <div className="container">
        <form className="product-form form">
            <h1>Enter Product Details</h1>
            <div className="form-group">
                <label htmlFor="id">Id</label>
                <input type="text" id="id" name="id" value={product.id} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="name">name</label>
                <input type="text" id="name" name="name"value={product.name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="full_name">Full Name</label>
                <input type="text"  id="full_name" name="full_name"value={product.full_name} onChange={handleChange}/>
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
                <label htmlFor="subCategory">Sub Category</label>
                <input type="text" id="subCategory" name="sub_category" value={product.sub_category} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" value={product.amount} onChange={handleChange}/>
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
