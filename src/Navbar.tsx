import './Navbar.css';
import './common.css';
import NavbarItem from './NavbarItem';

function Navbar() {
  return (
    <div className="App-navbar debug">
      <NavbarItem name="Blog"/>
      <NavbarItem name="About"/>
    </div>
  );
}

export default Navbar;
