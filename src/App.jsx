import "./App.css";
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from "./pages/Home/HomePage";
import SearchDoctorPage from "./pages/SearchDoctorPage/SearchDoctorPage";
import DiagnosePage from "./pages/DiagnosePage/DiagnosePage"
import AboutPage from "./pages/AboutPage/AboutPage";
import Heading from "./components/heading/Heading";



function App() {
  return (
    <>
      <Router>
        <Heading />
        <Navbar />

        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/search" exact Component={SearchDoctorPage} />
          <Route path="/diagnose" exact Component={DiagnosePage} />
          <Route path="/about" exact Component={AboutPage} />
          <Route path='/Medivault' element={<Navigate to='/' />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
