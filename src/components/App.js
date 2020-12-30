import { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { auth } from '../utils/authApi.js';
import { AccountContext } from '../contexts/AccountContext.js';
import ProtectedRoute from './ProtectedRoute';

import Header from './Header';
import AroundTheUS from './AroundTheUS';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import Footer from './Footer';



function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn]= useState(false);
  const [accountData, setAccountData]= useState({ _id: '', email: ''});

  const [isLoading, setIsLoading]= useState(false);

  const [isTooltipSuccessOpen, showTooltipSuccess]= useState(false);
  const [isTooltipErrorOpen, showTooltipError]= useState(false);
  const [isTooltipInvalidOpen, showTooltipInvalid]= useState(false);



  const closeAllTooltips= () => {
    if(isTooltipInvalidOpen) {
      showTooltipInvalid(false);
      // focus cursor on password field if credentials incorrect
      document.getElementById('login-password').focus();
    }
    showTooltipSuccess(false);
    showTooltipError(false);
    
  }

  const handleRegister= (credentials) => {
    setIsLoading(true);
    auth.register(credentials)
      .then((res) => {
        showTooltipSuccess(true);
        setLoggedIn(true);
        setAccountData(res.data);
        history.push('/');
        setIsLoading(false);
      })
      .catch(() => {
        showTooltipError(true);
        setIsLoading(false);
      });
  }

  const handleLogin= (credentials) => {
    setIsLoading(true);
    return auth.login(credentials)
      .then((res) => {
        setLoggedIn(true);
        setAccountData(res.data);
        history.push('/');
        setIsLoading(false);
      })
      .catch(() => {
        showTooltipInvalid(true);
        setIsLoading(false);
        return Promise.reject();
      });
  }

  const handleLogout= () => {
    setLoggedIn(false);
  }



  return (
    <AccountContext.Provider value={{ loggedIn, accountData }}>
      <div className="container">

        <Header handleLogout={handleLogout} />

        <Switch>
          <ProtectedRoute exact path="/" component={AroundTheUS} />

          <Route path="/signin">
            <Login handleLogin={handleLogin} isLoading={isLoading} />
          </Route>

          <Route path="/signup">
            <Register handleRegister={handleRegister} isLoading={isLoading} />
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

