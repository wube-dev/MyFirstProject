import React from 'react'
import iphoneBg from '../../assets/images/home/iphone11-bg.jpg' // Import the image

function IPhone() {
  const sectionStyle = {
    backgroundImage: `url(${iphoneBg})`,
    height: '580px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: '65px 20px',
    color: '#fff'
  }

  return (
    <div>
      <section className="third-highlight-wrapper" style={sectionStyle}>
        <div className="internal-wrapper">
          <div className="title-wraper">
            iPhone 11 
          </div> 
          <div className="description-wrapper">
            Just the right amount of everything.
          </div>
          <div className="price-wrapper">
            From $16.62/mo. or $399 with trade‑in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default IPhone