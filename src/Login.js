import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleclick() {
    console.log("Fazer login");
    navigate('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleclick}>Login</button>
    </div>
  );
};

export default Login;
