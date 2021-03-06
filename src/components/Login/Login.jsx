import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Login.module.css";
// import style from "./RankInfo.module.css";

const Login = () => {
  return (
    <div className={style.form_container}>
      <form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
      <label for="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <NavLink to={'/main'}>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </NavLink>
    </form>
    </div>
  );
};

export default Login;

const testFunc = (string) => {
  let evenNums = [];
   for(let i = 1; i <= string.length; i++) {
    if(!(i % 2)) {
      evenNums = evenNums.push(string[i]);
    }
  }
  console.log(evenNums); 
};
