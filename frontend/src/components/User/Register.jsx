import React , { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {User} from '../../backend/index'; 
// import { useId } from "react-id-generator";
// import nextId from "react-id-generator";

function SignUp() {
    const [userDetail,setUserDetail] = useState({first_name : '',last_name : '',address : '',city : '',country : '',contact_no : 0 ,email : '',password : ''})
    const [id,setId] =  useState(Math.random().toString().slice(2));
    const [fail,setFail] = useState({fail: false, message : ''});
    
    const navigate = useNavigate();
    
    // const idList = useId(1);
    const user = new User();
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUserDetail({...userDetail,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(userDetail);
        if(!userDetail.first_name || !userDetail.last_name || !userDetail.email || !userDetail.password || !userDetail.contact_no){
            setFail({fail: true,message: "Please enter Your Details"})
            return;
        }
        setId(Math.random().toString().slice(2));
        user.add_user(id,userDetail);
        navigate('/')
        setUserDetail({first_name : '',last_name : '',address : '',city : '',country : '',contact_no : 0 ,email : '',password : ''});
    }

    // console.log(user.add_user);

  return (
    <div className="container">
        <form className="user-form form">
            <h1>Sign Up</h1>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="first_name" value={userDetail.first_name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="last_name"value={userDetail.last_name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text"  id="address" name="address"value={userDetail.address} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" value={userDetail.city} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" value={userDetail.country} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="contactNo">Contact No.</label>
                <input type="number" id="contactNo" name="contact_no" min={10} max={10} value={userDetail.contact_no} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={userDetail.email} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={userDetail.password} onChange={handleChange}/>
            </div>
            {fail.fail && <h3 className="fail">{fail.message}</h3>}
            <button className="btn" type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
    </div>
  );
}

export default SignUp;
