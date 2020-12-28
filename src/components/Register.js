import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField';

function Register() {

  const [values, setValues]= useState({ email: '', password: '' });

  function handleChange(e) {
    const name= e.target.name.split('-').pop();
    setValues({...values, [name]: e.target.value });
  } 

  return (
    <form name="register-form" className="form">
        
      <h3 className="form__heading">Sign up</h3>

      <FormField name="signup-email" type="email" label="Email" minMax={[5, 320]} handleChange={handleChange} />
      <FormField name="signup-password" type="password" label="Password" minMax={[10, 256]} handleChange={handleChange} />
      
      <button type="submit" className="form__button" name="login-submit">Sign up</button>
      <Link to="/signin" className="form__text link">Already a member? Log in here!</Link>

    </form>
  );
  
}

export default Register;
