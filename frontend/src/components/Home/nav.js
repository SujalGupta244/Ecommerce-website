import React ,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Nav() {

    const [isLogin,setIsLogin] = useState(false);
    return (
        <div className="nav">
            <nav>
                <div id='logo'>Logo</div>
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
                    <h5><Link to={"/User/Account"} >Account</Link></h5>
                </div>
            </nav>
        </div>

    );
}

export default Nav;
