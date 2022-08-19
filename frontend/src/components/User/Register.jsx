import React , { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {User} from '../../firebase/firebase'; 
import {registerWithEmailAndPassword} from '../../firebase/firebase'
import { signUpWithGoogle, logInWithEmailAndPassword } from "../../firebase/firebase";
import GoogleButton from 'react-google-button';
// import {useGlobalContext} from '../../context';

function SignUp() {

    // const {addUserDetails} = useGlobalContext()

    const [userDetail,setUserDetail] = useState({first_name : '',last_name : '' ,email : '',password : ''})
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
        if(!userDetail.first_name || !userDetail.last_name || !userDetail.email || !userDetail.password ){
            setFail({fail: true,message: "Please enter Your Details"})
            return;
        }
        setId(Math.random().toString().slice(2));
        
        // Add User to the Database

        registerWithEmailAndPassword(`${user.first_name} ${user.last_name}`,userDetail.email,userDetail.password);
        // user.add_user(id,userDetail);
        // navigate('/')
        setUserDetail({first_name : '',last_name : '' ,email : '',password : ''});
    }

    
    const handleGoogleSignup = () =>{
        signUpWithGoogle()
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
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={userDetail.email} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={userDetail.password} onChange={handleChange}/>
            </div>
            {fail.fail && <h3 className="fail">{fail.message}</h3>}
            <button className="btn" type="submit" onClick={handleSubmit}>Sign Up</button>
            <h2 style={{paddingBottom: '2rem',fontSize: '2rem'}}>or</h2>
            <GoogleButton label='Sign Up with Google' className='signup' onClick={signUpWithGoogle} type='light'/>
        </form>

    </div>
  );
}

export default SignUp;
