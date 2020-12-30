import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import FormField from './FormField';



function Register({onSubmit}) {

  const [values, setValues]= useState({ email: '', password: '' });
  const [errors, setErrors]= useState({});
  const [submitReady, setSubmitReady]= useState(false);



  function handleChange(e) {
    const name= e.target.name.split('-').pop();
    setValues({...values, [name]: e.target.value });
    
    if(e.target.validity.valid) {
      const updatedErrors= {...errors, [name]: '' };
      setErrors(updatedErrors);
      const errorValues= Object.values(updatedErrors);
      if(errorValues.length === 2) setSubmitReady(!errorValues.some(i => i)); // enable submit if both fields checked and no error messages
    } else {
      setErrors({...errors, [name]: e.target.validationMessage });
      setSubmitReady(false);
    }
  } 

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }



  return (
    <form name="register-form" className="form" onSubmit={handleSubmit}>
        
      <h3 className="form__heading">Sign up</h3>

      <FormField name="signup-email" type="email" label="Email" minMax={[5, 320]} 
        handleChange={handleChange} value={values.email} error={errors.email} />

      <FormField name="signup-password" type="password" label="Password" minMax={[10, 256]} 
        handleChange={handleChange} value={values.password} error={errors.password} />
      
      <button type="submit" className={`form__button${submitReady ? '' : ' form__button_disabled'}`} name="login-submit">Sign up</button>
      <Link to="/signin" className="form__text link">Already a member? Log in here!</Link>

    </form>
  );
  
}

export default Register;
