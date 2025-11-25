import React from 'react'
import ipad from '../../assets/images/icons/new-ipad-logo.png'
import macbookBg from '../../assets/images/home/macbook-pro.jpg' // Import background images
import ipadBg from '../../assets/images/home/new-ipad.jpg'

function Macbook() {
  const leftSideStyle = {
    backgroundImage: `url(${macbookBg})`,
    backgroundSize: 'initial',
    backgroundColor: '#fafafa',
    backgroundPosition: 'bottom',
    height: '580px',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    width: '48.5%',
    margin: '1% 0.5% 0% 1%',
    paddingTop: '54px'
  }

  const rightSideStyle = {
    backgroundImage: `url(${ipadBg})`,
    height: '580px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    width: '48.5%',
    margin: '1% 1% 0% 0.5%',
    paddingTop: '54px'
  }

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#fff'
  }

  return (
    <div>
      <section className="sixth-heghlight-wrapper" style={wrapperStyle}>
        <div className="left-side-wrapper" style={leftSideStyle}>
          <div className="model">
            16-inch model
          </div>
          <div className="product-title-small">
            MacBook Pro
          </div>
          <div className="description-wraper">
            The best for the brightest.
          </div>
          <div className="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul> 
          </div>
        </div>
        <div className="right-side-wrapper" style={rightSideStyle}>
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={ipad} alt="New iPad" />
            </div>
          </div>
          <div className="description-wraper">
            Like a computer. Unlike any computer.
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

export default Macbook