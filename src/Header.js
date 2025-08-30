import React, {useState} from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import MenuIcon from './assets/menu-icon.svg';

function Header({ menu }) {
  const [shwoMenu, setShowMenu] = useState(false);

  return (
    <header className="App-header">
        <nav>
          <Link aria-label='Home Page Link' to={'/'} className='logo-outer'>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <ul className={`${shwoMenu && 'active'}`}>
              {Object.entries(menu).map(([href, text], index) => (
                <Link key={index} to={href} onClick={() => {setShowMenu(false)}}>
                  {text}
                </Link>
              ))}
          </ul>
          <button aria-label='Menu Toggle' className='menu-btn' onClick={() => setShowMenu(!shwoMenu)}>
            <img src={MenuIcon} alt='Menu Icon' className='menu-icon' width={30} />
          </button>
        </nav>
    </header>

  );
}

export default Header;
