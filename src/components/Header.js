import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AccountContext } from '../contexts/AccountContext';
import logo from '../images/logo.svg';



function Header({handleLogout}) {

  const accountContext = useContext(AccountContext);



  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Around The U.S." />
      <div className="header__account-menu"> 
      <p>{accountContext.loggedIn ? 'logged in' : 'logged out'}</p>
        { accountContext.loggedIn === true && 
          <>
            <div className="header__account-item">{accountContext.accountData.email}</div>
            <button className="header__account-item header__account-item_logout button" onClick={handleLogout}>Log out</button>
          </>
        }
        { accountContext.loggedIn === false && 
          <>
            <NavLink activeStyle={{ display: 'none' }} to="/signup" className="header__account-item link">Sign up</NavLink>
            <NavLink activeStyle={{ display: 'none' }} to="/signin" className="header__account-item link">Log in</NavLink>
          </>
        }
      </div>     
    </header>   
  );
  
}

export default Header;
