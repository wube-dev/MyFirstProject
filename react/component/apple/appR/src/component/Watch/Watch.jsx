import React from 'react'
import watch from '../../assets/images/icons/watch-series5-logo.png'
import apple from '../../assets/images/icons/apple-card-logo.png'
import watchBg from '../../assets/images/home/watch-series-5.jpg' // Import background images
import appleCardBg from '../../assets/images/home/apple-card.jpg'

function Watch() {
  const leftSideStyle = {
    backgroundImage: `url(${watchBg})`,
    height: '580px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    width: '48.5%',
    margin: '1% 0.5% 0% 1%',
    paddingTop: '54px'
  }

  const rightSideStyle = {
    backgroundImage: `url(${appleCardBg})`,
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
      <section className="fourth-heghlight-wrapper" style={wrapperStyle}>
        <div className="left-side-wrapper" style={leftSideStyle}>
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={watch} alt="Watch Series 5" />
            </div>
          </div>
          <div className="description-wraper">
            With the new Always-On Retina display.<br/>
            You've never seen a watch like this.
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
              <img src={apple} alt="Apple Card" />
            </div>
          </div>
          <div className="description-wraper">
            Get 3% Daily Cash on purchases from Apple using Apple Card.
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

export default Watch