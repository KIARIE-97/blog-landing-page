import React from 'react'
import './info.scss'
import imfoimg from '../assets/images/illustration-laptop-desktop.svg'

function Info() {
  return (
    <div>
      <div className="info">
      <div className="product_img">
  <img src={imfoimg} alt="editor" />
  </div>
<div className="info_text">
<div className="info1">
  <h4>Free, open, simple</h4>
  <p>  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
</p>
</div>

<div className="info2">
  <h4> Powerful tooling</h4>
  <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
</p>
</div>
</div>
</div>
    </div>
  )
}

export default Info