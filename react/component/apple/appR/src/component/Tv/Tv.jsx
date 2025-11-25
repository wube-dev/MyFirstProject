import React from 'react'
import appleTv from '../../assets/images/icons/apple-tv-logo.png'
import servant from '../../assets/images/icons/servant-logo.png'

function Tv() {
  return (
    <div>
      	<section class="fifth-heghlight-wrapper"> 
			<div class="left-side-wrapper">
				<div class="top-logo-wrapper">
					<div class="logo-wrapper">
              <img src={ appleTv} />
					</div>
				</div>

				<div class="tvshow-logo-wraper">
            <img src={servant } />
				</div>

				<div class="watch-more-wrapper">
					<a href="#">Watch the trailer</a>
				</div>
			</div>
			<div class="right-side-wrapper">
				<div class="top-logo-wrapper">
					<div class="logo-wrapper">
						AirPods Pro
					</div>
				</div>

				<div class="description-wraper">
					Magic like you’ve never heard.
				</div>

				<div class="links-wrapper">
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

export default Tv
