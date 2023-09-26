import { Link } from 'react-router-dom';
import './Footer.css';  // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2 className='title-footer'>MediVault</h2>
          <h3 className='subtitle-footer'>Your Health, Our Priority</h3>
        </div>
        <div className="footer-desc">
          <div className="footer-links">
            <h3 className='link-title-footer'>Quick Links</h3>
            <ul>
              <li><Link className='link-footer' to="/">Home</Link></li>
              <li><Link className='link-footer' to="/search">Search Doctor</Link></li>
              <li><Link className='link-footer' to="/diagnose">Diagnose Me</Link></li>
              <li><Link className='link-footer' to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@medivault.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 MediVault. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
