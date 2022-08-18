import React ,{ useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Login = () =>{
    const {isUser,user, setIsUser} = useGlobalContext()

    const [loginDetails,setLoginDetails] = useState({email:'',password:''});
    const [fail,setFail] = useState({fail: false, message : ''});
    const navigate = useNavigate()
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setLoginDetails({...loginDetails,[name]:value});
    }


    const getUser = (users) =>{
        let use = (Object.values(users)).find(user =>{
            if(user.email === loginDetails.email && user.password === loginDetails.password){
                return user;
            }
        })
        if(use){
            setIsUser(use);
        }else{
            setFail({fail: true,message : "No User Found"});
            setIsUser({});
        }
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!loginDetails.email || !loginDetails.password){
            setFail({fail: true,message: "Please enter Your Details"})
            return;
        }
        
        // Find the user from Database
        user.register_get_all_users_callback(getUser);
        
        
        if(isUser === {}){
            setFail({fail: true,message : "No User Found"});
            return;
        }

        console.log(isUser);
        // setIsUser(user.register_get_all_users_callback(getUser));
        // navigate('/');
        setLoginDetails({email:'',password:''});
    }
    return (
        <div className="container">
            <div className="login">
                <form className="login-form form">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={loginDetails.email} id="email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" minLength={8} value={loginDetails.password} id="password" onChange={handleChange}/>
                    </div>
                    {fail.fail && <h3 className="fail">{fail.message}</h3>}
                    <Link to={'/signup'}><h2>new loginDetails ? sign up</h2></Link>
                    <button className="login-btn btn" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login;
