import React, {useState} from "react";

function AddUser() {
    const [user,setUser] = useState({first_name : '',last_name : '',address : '',city : '',country : '',contact_no : 0 ,email : '',password : ''})

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user);
        setUser({first_name : '',last_name : '',address : '',city : '',country : '',contact_no : 0 ,email : '',password : ''});
    }

  return (
    <div className="container">
        <form className="user-form form">
            <h1>Enter User Details</h1>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="first_name" value={user.first_name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="last_name"value={user.last_name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text"  id="address" name="address"value={user.address} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={user.city} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" value={user.country} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="contactNo">Contact No.</label>
                <input type="number" id="contactNo" name="contact_no" min={10} max={10} value={user.contact_no} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={user.email} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={user.password} onChange={handleChange}/>
            </div>
            <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default AddUser;

// first_name,
// last_name,
// address,
// city,
// country,
// contact_no,
// email,
// password
