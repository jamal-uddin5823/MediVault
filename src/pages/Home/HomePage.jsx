import Footer from "../../components/FooterSection/Footer"
import HeroSection from "../../components/HeroSection/HeroSection"
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection"
import ServiceSection from "../../components/ServiceSection/ServiceSection"


function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <HowItWorksSection />
      <Footer />
    </>
  )
}

export default HomePage