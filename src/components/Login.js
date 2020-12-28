import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const [values, setValues]= useState({ email: '', password: '' });

  function handleChange(e) {
    const name= e.target.name.split('-').pop();
    setValues({...values, [name]: e.target.value });
  } 

  return (
    <form name="login-form" className="form">
        
      <h3 className="form__heading">Log in</h3>

      <input onChange={handleChange} name="login-email" id="login-email" className="form__input" 
        aria-label="Email" placeholder="Email" type="email" required />

      <input onChange={handleChange} name="login-password" id="login-password" className="form__input" 
        aria-label="Password" placeholder="Password" type="password" required />
      
      <button type="submit" className="form__button" name="login-submit">Log in</button>
      <Link to="/signup" className="form__text link">Not a member yet? Sign up here!</Link>

    </form>
  );
  
}

export default Login;
