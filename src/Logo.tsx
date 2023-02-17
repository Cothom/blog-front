import './Logo.css';
import './common.css';
import logo from './logo.svg';

function Logo() {
  return (
    <div>
        <img src={logo} className="App-logo debug" alt="logo" />
    </div>
  );
}

export default Logo;