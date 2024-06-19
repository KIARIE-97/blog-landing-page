import React from 'react'
import './header.scss'
import logo from '../assets/images/logo.svg'
import bgimage from '../assets/images/bg-pattern-intro-desktop.svg'

function Header() {
  return (
    <div style={{backgroundImage: 'url(${bgimage})', backgroundSize: 'stretch', backgroundPosition: 'centre'}}>
      <div className="app_header">
<div className="app_headerlinks">

  <div className="left_links">
 <img src={logo} alt="" />

 <div className="link">
 <a href="#">Product</a>
  <ul>
    <li>Overview</li>
  <li>Pricing</li>
  <li>Marketplace</li>
  <li>Features</li>
  <li>Integrations</li>
  </ul>
 </div>
 <div className="link"><a href="#">Company</a>
 <ul>
    <li>About</li>
  <li>Team</li>
  <li>Blog</li>
  <li>Careers</li>
  </ul>
 </div>
 <div className="link"><a href="#">Connect</a>
 <ul>
    <li>Contact</li>
  <li>Newsletter</li>
  <li>LinkedIn</li>
  </ul>
 </div>

  
  </div>
  
  <div className="right_links">
    <button>Login</button>
    <button>Sign Up</button>
  </div>
</div>

<div className="header_content">
  <h2> A modern publishing platform</h2>
  <p>Grow your audience and build your online brand</p>
  <div className="header_button">
    <button>Start for Free</button>
    <button>Learn More</button>
    </div>
</div>
</div>
    </div>
  )
}

export default Header