import { useState } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Header from './Header';
import AroundTheUS from './AroundTheUS';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import Footer from './Footer';



function App() {

  const [isTooltipSuccessOpen, showTooltipSuccess]= useState(false);
  const [isTooltipErrorOpen, showTooltipError]= useState(false);
  

  const closeAllTooltips= () => {
    showTooltipSuccess(false);
    showTooltipError(false);
  }

  return (
    
      <div className="container">

        <Header />

        <Switch>
          <ProtectedRoute exact path="/" loggedIn={true} component={AroundTheUS} />

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
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
  );

}

export default App;

