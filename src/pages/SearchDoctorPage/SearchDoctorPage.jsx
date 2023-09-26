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
    <div className="doctor-search">
      <h2 className='doctor-title'>Enter doctor details</h2>
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
    </div>

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