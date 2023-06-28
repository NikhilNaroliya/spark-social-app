import React, { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
function Login() {
  //   <h1> Login page</h1>;
 
   const {login}=useContext(AuthContext);
   const handleLogin=()=>{
    login();
   }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1 className="hello">Sparkies</h1>
      

          <p>
            {" "}
            lorem ispus dsf sdf fdfdsfdsfsf fsdfs fsdfs sfsf fsa lorem lorems
            asj sf ajasdkfhk sf sf sfd d ds rririii sdf s f sdf ddfdf{" "}
          </p>
          <span>Dont you have an account ?</span>
          <Link id="register-btn" to="/register">
            Register
          </Link>
        </div>
        <div className=" right">
          <h4>Login</h4>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button
            onClick={handleLogin} 
            id="right-login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
