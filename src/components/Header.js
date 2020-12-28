import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header() {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Around The U.S." />
      <div className="header__account-menu"> 
        <div className="header__account-item">mail@email.com</div>
        <button className="header__account-item header__account-item_logout button">Log out</button>
        <Link to="/signup" className="header__account-item link">Sign up</Link>
        <Link to="/signin" className="header__account-item link">Log in</Link>
        
      </div>     
    </header>   
  );
  
}

export default Header;
