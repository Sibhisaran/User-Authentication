import React, { useState } from 'react';
import './Loginsignup.css';

import email from '../Assests/email.png';
import pass from '../Assests/password.png';
import person from '../Assests/person.png';

const Loginsignup = () => {
    const [action, setAction] = useState("Login");
    
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs"> 
            {action==="Login"?<div></div>:<div className="input">
                    <img src={person} alt="person" />
                    <input type="text" placeholder='Name'/>
                </div>}
                
                <div className="input">
                    <img src={email} alt="Email" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={pass} alt="password" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
};

export default Loginsignup;