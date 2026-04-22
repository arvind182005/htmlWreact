import './App.css'
import { CgAdidas } from "react-icons/cg";

function App() {
  
  return (
        <div className="navbar-container">
      <div className="logo">LOGO</div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Testimonials</li>
        </ul>
         
      </div>
      <div>
        <CgAdidas />
      </div>
    </div>
  )
}

export default App
