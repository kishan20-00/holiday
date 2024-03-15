import React from 'react';
import img1 from '../../../assets/Hsllogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={img1} alt="Tourly logo" />
            </a>
            <p className="footer-text">
              Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia at perferendis, pretium, aenean aut ultrices.
            </p>
          </div>
          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>
            <p className="contact-text">
              Feel free to contact and reach us !!
            </p>
            <ul>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="#" className="contact-link">+01 (112) 0000 90</a>
              </li>
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="#" className="contact-link">info.holiday.com</a>
              </li>
              <li className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <address>Colombo, Sri Lanka</address>
              </li>
            </ul>
          </div>
          <div className="footer-form">
            <p className="form-text">
              Subscribe our newsletter for more update & news !!
            </p>
            <form action="" className="form-wrapper">
              <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required />
              <button type="submit" className="btn btn-secondary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="">Holiday-Sri</a>. All rights reserved
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">Term & Condition</a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
