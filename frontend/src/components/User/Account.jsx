import React ,{ useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Account = () =>{
    const {isUser , addUserDetails, isLogin} = useGlobalContext();

    const [user, loading, error] = useAuthState(auth);

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        addUserDetails(...data);
        console.log(data);
        } catch (err) {
        console.error(err);
        // alert(err);
        }
    };

    useEffect(() => {
        // if (loading) return;
        // if (!user) return navigate("/");
        // console.log(isUser.displayName);
        fetchUser();
    }, [user]);

    // console.log(isUser);
    return(
        <div className="container">
            <h1>Your Account</h1>
            <div className="account">
                <div className="acc-left">
                    <h2>Manage Your Profile</h2>
                    <h6>Manage, add, or remove user profiles</h6>
                </div>
                <div className="acc-right">
                    <h2>Your Orders</h2>
                    <h6>Track, return, or buy things again</h6>
                </div>
            </div>

            <div className="user-details">
                {isLogin && 
                <>
                <div>{name}</div>
                <div>{isUser?.email}</div>
                <button className="btn" onClick={logout}>Logout</button>
                </>
                }
            </div>
            <div className="order-details">

            </div>
        </div>
    )
}


export default Account;
