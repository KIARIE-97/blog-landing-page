import React from 'react'
import './footer.scss'
import logo from '../assets/images/logo.svg'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="category">
          <h4>Product</h4>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="category">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
          </div>
        <div className="category">
          <h4>Connect</h4>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer

