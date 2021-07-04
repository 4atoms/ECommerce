import React from "react";
import { LoginContent } from "./login.style";

const Login = () => {
  return (
    <>
      <form action="">
        <LoginContent>
          <label className="labelClass" htmlFor="email">
            Email
          </label>
          <input type="text" name="email" id="email" />
          <label className="labelClass" htmlFor="password">
            Password
          </label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
          Forgot Password?
        </LoginContent>
      </form>
    </>
  );
};

export default Login;
