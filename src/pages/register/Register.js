import React from "react";
import './register.css'
import { Link } from "react-router-dom";
function Register() {
//   <h1> Login page</h1>;
  return (
    <div className="login">
      <div className="card">
        <div className="register-left">
            
            <h1 className="hello">Sparkies</h1>
           
                <h4 id="account"> Have an account ?</h4>
                 <Link id="login-btn" to='/login'>
                   Login
                </Link>
        </div>
        <div className=" right">
            <h4>Register</h4>
            <form>
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email"/>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button >Register</button>
            </form>

        </div>
      </div>
    </div>
  );
}
export default Register;
