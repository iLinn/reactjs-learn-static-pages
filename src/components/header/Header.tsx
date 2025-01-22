import reactLogo from '/src/assets/react.svg'
import './Header.css';

function Header() {
  return (
    <header>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a> 
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;