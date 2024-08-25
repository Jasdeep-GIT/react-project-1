import '../css/footer-component.css';
import {Link} from 'react-router-dom';

function Footer() {
return(<>
<footer className="Footer">
<nav className="Footer-navigation">
<ul className="Footer-links-list">
<li> <Link to="/contact" >Contact</Link> </li>
<li> <Link to="/terms" >Terms of service</Link> </li>
<li> <Link to="/privacy-policy" >Privacy policy</Link> </li>
</ul>
</nav>
<p>
<a href="https://perficientmetalkraft.com/" target="_blank" >
Perficient Metal Kraft LLP&reg;
</a>
</p>
<p>&copy;2024 Jasdeep Kaur <i>All rights reserved</i>.</p>
</footer>
</>);
}
export default Footer;