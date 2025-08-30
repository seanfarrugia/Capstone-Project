import logo from './logo.svg';

function Header({ menu }) {
  return (
    <header className="App-header">
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                {menu.map((menuItem, index) => {
                    return <a key={index} href="/">{menuItem}</a>
                })}
            </ul>
        </nav>
    </header>

  );
}

export default Header;
