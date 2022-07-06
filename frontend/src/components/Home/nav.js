import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <nav>
                <h2>Logo</h2>
                <div className="navInput">
                    <input type="text" />
                </div>

                <div className="acc">
                    <button id="login">Login</button>
                    <h5>Account</h5>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
