import './SearchDoctorPage.css'


function SearchDoctorPage() {
  return (
    <>
    <h2></h2>
    <form className="doctor-search">
      <input type='text' placeholder='Enter speciality' />
      <input type='text' placeholder='Enter location' />
      <button className="submit-doctor">Search</button>
    </form>
    </>
  )
}

export default SearchDoctorPage