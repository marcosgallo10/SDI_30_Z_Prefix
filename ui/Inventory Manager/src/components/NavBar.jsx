import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {

  return (
    <nav className = "navbar">
      <div className="logo">SDI-30 Inventory Manager</div>
        <ul className = "nav-links">
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/inventory">Inventory</Link></li>
          <li><Link to = "/login">Login</Link></li>
        </ul>
    </nav>
  )
}

