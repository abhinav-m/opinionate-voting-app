import React from 'react';

const Login = () => (
  <form className="form-control form__login">
    <p>Login</p>
    <div className="form-group">
      <label htmlFor="email">
        Email address
        <input type="email" className="form-control" id="email" />
      </label>
    </div>
    <div className="form-group">
      <label htmlFor="password">
        Password
        <input type="password" className="form-control" id="pwd" />
      </label>
    </div>
    <button type="submit" className="btn btn-default">
      Submit
    </button>
  </form>
);

export default Login;
