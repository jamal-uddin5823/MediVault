import { Link } from 'react-router-dom'
import './Heading.css'
function Heading() {
  return (
    <>
    <div className="heading">
        <Link to='/' className="title">MediVault</Link>
        <div className="buttons-div">
            <button className="signup button">Signup</button>
            <button className="login button">Login</button>
        </div>
    </div>
    </>
  )
}

export default Heading