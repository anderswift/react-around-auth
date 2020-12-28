import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField';

function Login() {

  const [values, setValues]= useState({ email: '', password: '' });

  function handleChange(e) {
    const name= e.target.name.split('-').pop();
    setValues({...values, [name]: e.target.value });
  } 

  return (
    <form name="login-form" className="form">
        
      <h3 className="form__heading">Log in</h3>

      <FormField name="login-email" type="email" label="Email" handleChange={handleChange} />
      <FormField name="login-password" type="password" label="Password" handleChange={handleChange} />
      
      <button type="submit" className="form__button" name="login-submit">Log in</button>
      <Link to="/signup" className="form__text link">Not a member yet? Sign up here!</Link>

    </form>
  );
  
}

export default Login;
