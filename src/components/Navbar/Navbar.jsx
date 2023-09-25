import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" className='nav-link'>Home</Link>
      <Link to="/search" className='nav-link'>Search Doctor</Link>
      <Link to="/diagnose" className='nav-link'>Diagnose</Link>
      <Link to="/about" className='nav-link'>About</Link>

    </nav>
  )
}

export default Navbar