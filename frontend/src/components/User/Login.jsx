import React ,{ useEffect, useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { logInWithEmailAndPassword, signUpWithGoogle } from "../../firebase/firebase";
// import GoogleButton from 'react-google-button'
// import firebase from './firebase'

const Login = () =>{
    const {isUser, addUserDetails} = useGlobalContext()

    const [loginDetails,setLoginDetails] = useState({email:'',password:''});
    const [fail,setFail] = useState({fail: false, message : ''});

    const navigate = useNavigate()
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setLoginDetails({...loginDetails,[name]:value});
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        logInWithEmailAndPassword(loginDetails.email,loginDetails.password)
        .then(res =>{
            addUserDetails(res.user);
            setLoginDetails({email:'',password:''});
            navigate('/');
        })
        .catch(err => {
            setFail({fail: true,message: `${err}`})
        })
        console.log(isUser);
    }

    const handleLoginGoogle = (e) =>{
        e.preventDefault()
        // signUpWithGoogle()
    }
    return (
        <div className="container">
            {/*  */}
            <div className="login">
                <form className="login__container login-form">
            <h1 style={{margin: '2rem auto'}}>Login</h1>
                    <input
                    type="text"
                    name="email"
                    className="login__textBox"
                    value={loginDetails.email}
                    onChange={handleChange}
                    placeholder="E-mail Address"
                    />
                    <input
                    type="password"
                    name="password"
                    className="login__textBox"
                    value={loginDetails.password}
                    onChange={handleChange}
                    placeholder="Password"
                    />
                    {fail.fail && <h3 className="fail">{fail.message}</h3>}
                    <button className="login__btn" onClick={handleLogin}>Login</button>
                    {/* <button className="login__btn login__google"onClick={handleLoginGoogle} >Login with Google</button> */}
                    <h3><Link to="/reset">Forgot Password</Link></h3>
                    <h2>Don't have an account? <Link to="/signup">Register</Link> now.</h2>
                </form>
                </div>
            </div>
    )
}

export default Login;


