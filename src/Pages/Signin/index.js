import React from "react";
import {
  SigninContent,
  InputTypes,
  ButtonBlock,
  FormStyle,
} from "./signin.style";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <FormStyle>
        <SigninContent>
          <h3>Sign In</h3>
          <label className="labelClass" htmlFor="email">
            Email*
          </label>
          <InputTypes>
            <input type="text" name="email" id="email" />
          </InputTypes>
          <label className="labelClass" htmlFor="password">
            Password*
          </label>
          <InputTypes>
            <input type="password" name="password" id="password" />
          </InputTypes>
          <label className="labelClass" htmlFor="password">
            Re-Enter Password*
          </label>
          <InputTypes>
            <input type="password" name="password" id="password" />
          </InputTypes>
          <ButtonBlock>
            <button type="submit">Sign In</button>
            <h4>
              <Link to="/login">Click to Login</Link>
            </h4>
          </ButtonBlock>
        </SigninContent>
      </FormStyle>
    </>
  );
};

export default Signin;
