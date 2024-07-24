import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="file" placeholder="file" required />
          <button type="submit">Sign up</button>
        </form>
        <p>You already have account? <Link>login</Link></p>
      </div>
    </div>
  );
};

export default Register;
