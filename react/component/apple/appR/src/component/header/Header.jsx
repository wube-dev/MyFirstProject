import React from 'react';
import logo from '../../assets/images/icons/logo.png';
import search from '../../assets/images/icons/search-icon.png';
import cart from '../../assets/images/icons/cart.png';


function Header() {
  return (
    <header className="header-wrapper">
      <div className="internal-wrapper"> 
        <div className="header-links-wrapper">
          <ul>
            <li className="logo-link"><a href="/"><img src={logo} alt="Apple" /></a></li>
            <li><a href="/mac/">Mac</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Support</a></li>
            <li className="search-link"><a href="/search/"><img src={search} alt="Search" /></a></li>
            <li className="cart-link"><a href="/cart/"><img src={cart} alt="Cart" /></a></li>
          </ul>					
        </div>
      </div>
    </header>
  );
}

export default Header;