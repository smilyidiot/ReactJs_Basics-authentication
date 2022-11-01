// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/" className="nav-link">
      Home
    </Link>
    <Link to="/about" className="nav-link">
      About
    </Link>
  </div>
)

export default Header
