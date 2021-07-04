import React from "react";
import { LoginContent, InputTypes, ButtonBlock } from "./login.style";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form action="">
        <LoginContent>
          <h3>Login</h3>
          <label className="labelClass" htmlFor="email">
            Email
          </label>
          <InputTypes>
            <input type="text" name="email" id="email" />
          </InputTypes>
          <label className="labelClass" htmlFor="password">
            Password
          </label>
          <InputTypes>
            <input type="password" name="password" id="password" />
          </InputTypes>
          <ButtonBlock>
            <button type="submit">Login</button>
            <h4>Forgot Password?</h4>
            <h4>
              <Link to="/signin">New? Sign In</Link>
            </h4>
          </ButtonBlock>
        </LoginContent>
      </form>
    </>
  );
};

export default Login;
