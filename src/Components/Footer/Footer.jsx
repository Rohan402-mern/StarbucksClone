import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-s1">
        <div className='footer-logo'>
        <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
        </div>
        <ul>
          <h1>About Us</h1>
          <li>Our Heritage</li>
          <li>Coffeehouse</li>
          <li>Our Company</li>
        </ul>
        <ul>
          <h1>Responsibility</h1>
          <li>Diversity</li>
          <li>Community</li>
          <li>Ethical Sourcing</li>
          <li>Enivronmental Stewardship</li>
          <li>Learn More</li>
        </ul>
        <ul>
          <h1>Quick Links</h1>
          <li>Privacy Policy</li>
          <li>FAQs</li>
          <li>Customer Service</li>
          <li>Delivery</li>
          <li>Loyalty Program Terms and Conditions</li>
          <li>Starbucks India Mobile App Terms of use</li>
          <li>Special Discount 25% Off Offer</li>
          <li>Get 2x Bonus Stars</li>
          <li>Starbucks@ Rewards Program</li>
          <li>Beverage Subscription</li>
        </ul>
        <ul>
          <h1>Legal</h1>
          <li>Disclaimer</li>
        </ul>
      </div>
      <div className="footer-s2">
        <div className='footer-social-media'>
          <h1>SOCIAL MEDIA</h1>
          <ul>
            <img src="https://www.starbucks.in/assets/icon/instagram.svg" alt="" />
            <img src="https://www.starbucks.in/assets/icon/facebook.svg" alt="" />
            <img src="https://www.starbucks.in/assets/icon/twitter.svg" alt="" />
          </ul>
        </div>
        <div className='footer-app'>
          <img src="https://www.starbucks.in/assets/images/appstoreiOS.png" alt="" />
          <img src="https://www.starbucks.in/assets/images/appstoreAndroid.png" alt="" />
        </div>
      </div>
      <div className="footer-s3">
        <hr />
        <div className='footer-div'>
          <ul>
            <li>Web Accessibility</li>
            <li>|</li>
            <li>Privacy Statement</li>
            <li>|</li>
            <li>Terms of use</li>
            <li>|</li>
            <li>Contact Us</li>
          </ul>
          <p>© 2025 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
