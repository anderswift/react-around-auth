import { useState, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AccountContext } from '../contexts/AccountContext.js';
import ProtectedRoute from './ProtectedRoute';

import Header from './Header';
import AroundTheUS from './AroundTheUS';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import Footer from './Footer';



function App() {

  const [loggedIn, setLoggedIn]= useState(false);
  const [accountData, setAccountData]= useState({ _id: '', email: 'test@gmail.com'});

  const [isLoading, setIsLoading]= useState(false);

  const [isTooltipSuccessOpen, showTooltipSuccess]= useState(false);
  const [isTooltipErrorOpen, showTooltipError]= useState(false);
  const [isTooltipInvalidOpen, showTooltipInvalid]= useState(false);



  const closeAllTooltips= () => {
    showTooltipSuccess(false);
    showTooltipError(false);
    showTooltipInvalid(false);
  }

  const handleRegister= () => {
    showTooltipSuccess(true);
  }

  const handleRegistrationError= () => {
    showTooltipError(true);
  }

  const handleLogin= () => {
    setLoggedIn(true);
  }

  const handleInvalidLogin= () => {
    showTooltipInvalid(true);
  }

  const handleLogout= () => {
    console.log('LOGOUT');
    setLoggedIn(false);
  }



  return (
    <AccountContext.Provider value={{ loggedIn, accountData }}>
      <div className="container">

        <Header handleLogout={handleLogout} />

        <Switch>
          <ProtectedRoute exact path="/" component={AroundTheUS} />

          <Route path="/signin">
            <Login onLogin={handleLogin} onError={handleInvalidLogin} />
          </Route>

          <Route path="/signup">
            <Register onRegister={handleRegister} onError={handleRegistrationError} />
          </Route>

          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>

        </Switch>

        <InfoTooltip type="success" isOpen={isTooltipSuccessOpen} onClose={closeAllTooltips}>
          Success! You have now been registered.
        </InfoTooltip>

        <InfoTooltip type="error" isOpen={isTooltipErrorOpen} onClose={closeAllTooltips}>
          Oops, something went wrong! Please try again.
        </InfoTooltip>

        <InfoTooltip type="error" isOpen={isTooltipInvalidOpen} onClose={closeAllTooltips}>
          Oops, your email or password was incorrect! Please try again.
        </InfoTooltip>

        <Footer />

      </div>
    </AccountContext.Provider>
  );

}

export default App;

