import React ,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import {GrCart} from 'react-icons/gr'
import {Link} from 'react-router-dom';
import {useGlobalContext} from '../../context';
import {logout} from '../../firebase/firebase'

function Nav() {
    const {isUser, removeUserDetails ,isLogin} = useGlobalContext()
    // const [isLogin,setIsLogin] = useState(false);

    const handleLogout = () => {
        logout();
        removeUserDetails();
        // console.log(isUser);
    }
    console.log(isUser);
    return (
        <div className="nav">
            <nav>
                <div id='logo'><Link to={"/"}>LOGO</Link></div>
                <div className="navInput">
                    <input type="text" placeholder="Search Your Product"/>
                    <span className="search">
                        <FaSearch/>
                    </span>
                </div>

                <div className="acc">
                    <button id="login" >
                        {!isLogin ? <Link to={"/login"} >Login</Link> : <span onClick={handleLogout}><Link to={'/'}>Logout</Link></span>}
                        {/* {isUser && } */}
                    </button>
                </div>
                    <h5><Link to={"/User/Account"} >Account</Link></h5>
                    <h5><Link to={"/admin/dashboard"} >Admin</Link></h5>
                    <h3 className="cart-logo"><Link to={"/cart"} ><GrCart/>0 Cart</Link></h3>
            </nav>
        </div>

    );
}

export default Nav;
