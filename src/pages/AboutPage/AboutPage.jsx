
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className='title-about'>About Us</h1>
      <div className="section-about">
        <p className='p-about'>
          Welcome to our symptom analysis website! We are dedicated to providing a platform that helps users analyze symptoms and find appropriate medical advice.
        </p>
      </div>
      <div className="about-wrapper">
        <div className="section-about">
          <h2 className='subtitle-about'>Our Mission</h2>
          <p className='desc-about'>
            Our mission is to make healthcare information accessible, understandable, and actionable for everyone. We strive to empower individuals to make informed decisions about their health.
          </p>
        </div>
        <div className="section-about">
          <h2 className='subtitle-about'>Developers</h2>
          <ul className='devs'>
            <li className='devname'>Jamal Uddin Mallick
              <p className='devrole'>Frontend Developer & UI/UX Designer</p>
            </li>

            <li className='devname'>Tasnia Iffat
              <p className='devrole'>Backend Developer</p>
            </li>
          </ul>
        </div>
        <div className="section-about">
          <h2 className='subtitle-about'>Contact Us</h2>
          <p className='desc-about'>
            If you have any questions or feedback, feel free to reach out to us at <a href="mailto:info@example.com">info@example.com</a>.
          </p>
        </div>
      </div>
      
      
    </div>
  );
}

export default AboutPage;
