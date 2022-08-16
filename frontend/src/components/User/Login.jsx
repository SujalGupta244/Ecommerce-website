import React ,{ useState }  from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () =>{
    const [user,setUser] = useState({email:'',password:''});
    const [fail,setFail] = useState({fail: false, message : ''});
    const navigate = useNavigate()
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!user.email || !user.password){
            setFail({fail: true,message: "Please enter Your Details"})
            return;
        }
        console.log(user);
        navigate('/');
        setUser({email:'',password:''});
    }
    return (
        <div className="container">
            <div className="login">
                <form className="login-form form">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={user.email} id="email" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" minLength={8} value={user.password} id="password" onChange={handleChange}/>
                    </div>
                    {fail.fail && <h3 className="fail">{fail.message}</h3>}
                    <Link to={'/signup'}><h2>new user ? sign up</h2></Link>
                    <button className="login-btn btn" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login;
