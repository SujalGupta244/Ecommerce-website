import React ,{ useEffect } from 'react';


const Account = () =>{
    return(
        <div className="container">
            <h1>Your Account</h1>
            <div className="account">
                <div className="acc-left">
                    <h2>Manage Your Profile</h2>
                    <h6>Manage, add, or remove user profiles for personalized experiences</h6>
                </div>
                <div className="acc-right">
                    <h2>Your Orders</h2>
                    <h6>Track, return, or buy things again</h6>
                </div>
            </div>

            <div className="user-details">
                
            </div>
            <div className="order-details">

            </div>
        </div>
    )
}


export default Account;
