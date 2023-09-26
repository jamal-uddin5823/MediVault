import { useState } from 'react'
import './SearchDoctorPage.css'


function SearchDoctorPage() {
  const [doctorSpeciality,setDoctorSpeciality] = useState('');
  const [doctorLocation,setDoctorLocation] = useState('');
  const [showValues,setShowValues] = useState(false);

  const handleSpecialityChange = (event) => {
    setDoctorSpeciality(event.target.value);
  }

  const handleLocationChange = (event) => {
    setDoctorLocation(event.target.value);
  }
  const handleShowValues = (event) => {
    event.preventDefault();
    setShowValues(!showValues);
  }

  return (
    <>
    <h2></h2>
    <form className="doctor-search">
      <input 
        type='text' 
        placeholder='Enter speciality'
        value={doctorSpeciality}
        onChange={handleSpecialityChange} />
      <input 
        type='text' 
        placeholder='Enter location'
        value={doctorLocation}
        onChange={handleLocationChange}
         />
      <button className="submit-doctor" onClick={handleShowValues}>Search</button>
    </form>

    {showValues && (
      <>
      <p>{doctorSpeciality}</p>
      <p>{doctorLocation}</p>
      </>
    )}
    </>
  )
}

export default SearchDoctorPage