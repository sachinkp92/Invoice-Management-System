import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState({ email: "", password: "" });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setLogin({ email, password });

    if (password.length < 8) {
      setError("Password must be 8 characters long");
      return;
    }

    setEmail("");
    setPassword("");
    setError("");
    alert(`Login successfully`);
  };
  return (
    <div className="d-flex justify-content-center align-items-center form-container">
      <div className="signup-container bg-white">
        <h2 className="text-center mb-3">Login</h2>
        <form
          action="#"
          method="post"
          className="signup-form"
          onSubmit={onFormSubmit}
        >
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
          </div>
          {error && <p className="text-danger text-center">{error}</p>}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
