import './ServiceSection.css';
function ServiceSection() {
    return (
        <div className="services-section">
          <h2 className='title-services'>Our Services</h2>
          <div className="service">
            {/* <img src={symptomIcon} alt="Symptom Analysis" /> */}
            <h3 className='subtitle-services'>Symptom Analysis</h3>
            <p className='desc-service'>Understand your symptoms and get preliminary insights into potential health conditions.</p>
          </div>
          <div className="service">
            {/* <img src={doctorIcon} alt="Find a Doctor" /> */}
            <h3 className='subtitle-services'>Find a Doctor</h3>
            <p className='desc-service'>Discover and connect with expert doctors in various medical specialties.</p>
          </div>
          <div className="service">
            {/* <img src={analyzeIcon} alt="Diagnose Me" /> */}
            <h3 className='subtitle-services'>Diagnose Me</h3>
            <p className='desc-service'>Use our advanced diagnostic tool to get a comprehensive understanding of your health.</p>
          </div>
        </div>
      );
}

export default ServiceSection