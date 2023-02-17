import './Header.css';
import './common.css';
import Banner from './Banner';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="App-header debug">
        <Banner />
        <Navbar />
    </header>
  );
}

export default Header;