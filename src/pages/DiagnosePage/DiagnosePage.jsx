import Searchbar from '../../components/Searchbar/Searchbar'
import './DiagnosePage.css'

function DiagnosePage() {
  return (
    <>
        <div className="search-box">
          <h2 className="search-title">What are the symptoms you are experiencing?</h2>
          <Searchbar />
        </div>
    </>
  )
}

export default DiagnosePage