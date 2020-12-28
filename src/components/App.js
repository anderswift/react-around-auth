import { useState, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AccountContext } from '../contexts/AccountContext.js';

import Header from './Header';
import AroundTheUS from './AroundTheUS';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import Footer from './Footer';



function App() {

  const [loggedIn, setLoggedIn]= useState(true);
  const [accountData, setAccountData]= useState({ _id: '', email: 'test@gmail.com'});

  const [isTooltipSuccessOpen, showTooltipSuccess]= useState(false);
  const [isTooltipErrorOpen, showTooltipError]= useState(false);
  

  const closeAllTooltips= () => {
    showTooltipSuccess(false);
    showTooltipError(false);
  }

  return (
    <AccountContext.Provider value={{ loggedIn, accountData }}>
      <div className="container">

        <Header />

        <Switch>
          <ProtectedRoute exact path="/" component={AroundTheUS} />

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>

        </Switch>

        <InfoTooltip type="success" isOpen={isTooltipErrorOpen} onClose={closeAllTooltips}>
          Success! You have now been registered.
        </InfoTooltip>

        <InfoTooltip type="error" isOpen={isTooltipSuccessOpen} onClose={closeAllTooltips}>
          Oops, something went wrong! Please try again.
        </InfoTooltip>

        <Footer />

      </div>
    </AccountContext.Provider>
  );

}

export default App;

