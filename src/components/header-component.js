import '../css/header-component.css';
import logo from '../images/perficient-logo.png';
import {Link} from 'react-router-dom';

function Header() {
return(<>
<header className="Header">
<div>
<a href="#main-content">Skip to main content</a>
</div>
<div className="Header-flex">
<div className="Header-image">
<img src={logo} alt="Logo of Perficient Metal Kraft LLP" className="Header-logo" />
</div>
<div className="Header-company-name">
Perficient Metal Kraft &reg;
</div>
<div className="Header-navigation">
<nav className="Header-site-menu">
<ul className="Header-links-list">
<li> <Link to="/" >Home</Link> </li>
<li> <Link to="/login" >Login</Link> </li>
<li> <Link to="/dashboard" >Dashboard</Link> </li>
<li> <Link to="/admin-dashboard" >Admin</Link> </li>
</ul>
</nav>
</div>
</div>
</header>
</>);
}
export default Header;