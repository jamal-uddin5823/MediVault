import './Heading.css'
function Heading() {
  return (
    <>
    <div className="heading">
        <h1 className="title">MediVault</h1>
        <div className="buttons-div">
            <button className="signup button">Signup</button>
            <button className="login button">Login</button>
        </div>
    </div>
    </>
  )
}

export default Heading