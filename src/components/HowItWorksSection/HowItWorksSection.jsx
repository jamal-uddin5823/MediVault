import './HowItWorksSection.css';  // Import your CSS file for styling

const HowItWorksSection = () => {
  return (
    <div className="how-it-works-section">
      <h2 className='title-howitworks'>How It Works</h2>
        <div className="steps-howitworks">
        <div className="step">
          <div className="step-description">
            <h3 className='subtitle-howitworks'>1.Create an Account</h3>
            <p>Sign up for an account on our platform to access all the features and services.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-description">
            <h3 className='subtitle-howitworks'>2.Explore Services</h3>
            <p>Browse through our services like symptom analysis, finding doctors, and diagnostics.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-description">
            <h3 className='subtitle-howitworks'>3.Interact and Analyze</h3>
            <p>Engage with our tools to analyze symptoms or connect with medical professionals.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-description">
            <h3 className='subtitle-howitworks'>4.Stay Informed</h3>
            <p>Receive insights, recommendations, and stay informed about your health journey.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HowItWorksSection;
