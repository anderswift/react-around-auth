import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Header from './Header';
import AroundTheUS from './AroundTheUS';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';



function App() {

  return (
    
      <div className="container">

        <Header />

        <Switch>
          <ProtectedRoute exact path="/" loggedIn={false} component={AroundTheUS} />

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

        </Switch>

        <Footer />

      </div>
  );

}

export default App;

