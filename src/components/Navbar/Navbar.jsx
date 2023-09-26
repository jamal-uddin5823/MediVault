import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const location = useLocation();
  return (
    <nav className='navbar'>
      <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
      <Link to="/search" className={`nav-link ${location.pathname.startsWith('/search') ? 'active' : ''}`}>Search Doctor</Link>
      <Link to="/diagnose" className={`nav-link ${location.pathname === '/diagnose' ? 'active' : ''}`}>Diagnose</Link>
      <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>

    </nav>
  )
}

export default Navbar