import './NavbarItem.css';
import './common.css';

interface NavbarItemProps {
  name: string;
}

function NavbarItem({ name }: NavbarItemProps) {
  return (
    <div className="App-navbar-item debug">
      <p>{name}</p>
    </div>
  );
}

export default NavbarItem;
