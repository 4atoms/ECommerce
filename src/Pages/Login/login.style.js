import styled from "styled-components";

export const LoginContent = styled.div`
  border: 1px solid;
  text-align: left;
  height: 300px;
  font-family: "Helvetica";
  font-size: 18px;
  width: 30%;
  height: 350px;
  vertical-align: middle;
  margin: auto;
  background-color: #2874f0;
  color: white;
  border-color: #add8e6;
  display: block;
  padding-left: 30px;

  & > h3 {
    text-align: center;
    margin-right: 30px;
  }
  margin-top: 100px & > htmlFor {

  }
  & > form {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  & > label {
    padding: 0px 0px 0px 0px;
  }
`;

export const InputTypes = styled.div`
  & > input {
    border-radius: 3px;
    border: 0.5px;
    padding: 5px;
    width: 70%;
    margin: 10px 10px 10px 0px;
  }
`;

export const ButtonBlock = styled.div`
  margin: 0px 30px 0px 0px;
  & > button {
    color: white;
    padding: 10px 20px 10px 20px;
    border-radius: 3px;
    border-color: darkgrey;
    background-color: darkgrey;
    border-style: solid;
    align-items: center;
    margin: 10px 0px 0px 160px;
  }
  & > h4 {
    font-weight: normal;
    text-align: center;
    text-decoration: none;
  }
`;

export const FormStyle = styled.form`
  margin: 20px 0px 20px 0px;
`;
