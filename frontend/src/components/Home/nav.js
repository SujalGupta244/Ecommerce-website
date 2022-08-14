import React ,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import {GrCart} from 'react-icons/gr'
import {Link} from 'react-router-dom';

function Nav() {

    const [isLogin,setIsLogin] = useState(false);
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
                    <button id="login">
                        {!isLogin && <Link to={"/login"}>Login</Link>}
                        {isLogin && <Link to={"/logout"}>Logout</Link>}
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
