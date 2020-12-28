import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {

  const [values, setValues]= useState({ email: '', password: '' });

  function handleChange(e) {
    const name= e.target.name.split('-').pop();
    setValues({...values, [name]: e.target.value });
  } 

  return (
    <form name="register-form" className="form">
        
      <h3 className="form__heading">Sign up</h3>

      <input onChange={handleChange} name="signup-email" id="signup-email" className="form__input" 
        aria-label="Email" placeholder="Email" type="email" minlength="5" maxlength="320" required />

      <input onChange={handleChange} name="login-password" id="login-password" className="form__input" 
        aria-label="Password" placeholder="Password" type="password" minlength="10" maxlength="256" required />
      
      <button type="submit" className="form__button" name="login-submit">Sign up</button>
      <Link to="/signin" className="form__text link">Already a member? Log in here!</Link>

    </form>
  );
  
}

export default Register;
