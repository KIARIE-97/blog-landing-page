import React from 'react'
import './product.scss'
import image from '../assets/images/illustration-editor-desktop.svg'

function Product() {
  return (
    <div>
 
<div className="tittle">
  <p>Designed for the future</p>
</div>
<div className="product">

  <div className="product_text">
  <div className="product1">
    <h4>Introducing an extensible editor</h4>
    <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
  </div>

  <div className="product2">
    <h4>Robust content management</h4>
    <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
</p>
  </div>
  </div>
  <div className="product_img">
    <img src={image} alt="" />
    
    </div>
</div>

    </div>
  )
}

export default Product