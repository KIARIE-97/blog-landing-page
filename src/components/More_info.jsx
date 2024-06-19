import React from 'react'
import './more_info.scss'
import image from '../assets/images/illustration-phones.svg'

function More_info() {
  return (
    <div className='moreInfo'>
      <div className="img">
        <img src={image} alt="phones" />
      </div>
        <div className="text">
            <h4> State of the Art Infrastructure</h4>
            <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
</p>
        </div>
    </div>
  )
} 

export default More_info