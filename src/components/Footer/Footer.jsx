import { Link, NavLink } from "react-router-dom";
import { USD, GPay, MasterCard, Amex, ApplePay, Pay, PayPal, Insta, LinkedIn } from "../../assets/js/Icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div class="footer-main">
          <div className="footer-header">
            <div class="footeritem">
              <h5>Be the first to know</h5>
              <ul>
                <li>Sign up for updates from mettā muse.</li>
                <li className="inputbox">
                  <input type="text" placeholder="Enter your e-mail" />
                  <button className="footerbtn">Subscribe</button>
                </li>
              </ul>
            </div>
            <div class="footeritem">
              <div>
                <h5>Contact Us</h5>
                <ul>
                  <li>+44 221 133 5360</li>
                  <li>customercare@mettamuse.com</li>
                </ul>
              </div>
              <div className="footer-div">
                <h5>Currency</h5>
                <ul>
                  <li>
                    <img src={USD} alt="" height="25px" />
                  </li>
                  <li>Transactions will be completed in Euros and a currency reference is available on hover.</li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <div className="footer-footer">
            <div class="footeritem">
              <h5>mettā muse</h5>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div class="footeritem">
              <h5>Quick Links</h5>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div class="footeritem">
              <div>
                <h5>Follow Us</h5>
                <ul>
                  <li className="iconsdiv">
                    <img src={Insta} alt="" height="30px" />
                    <img src={LinkedIn} alt="" height="30px" />
                  </li>
                </ul>
              </div>
              <div className="footer-div">
                <h5>mettā muse Accepts</h5>
                <ul>
                  <li className="iconsdiv">
                    <img src={GPay} alt="" height="30px" />
                    <img src={MasterCard} alt="" height="30px" />
                    <img src={PayPal} alt="" height="30px" />
                    <img src={Amex} alt="" height="30px" />
                    <img src={ApplePay} alt="" height="30px" />
                    <img src={Pay} alt="" height="30px" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footeritem">
            <ul>
              <li style={{ textAlign: "center", marginBottom: "0px", paddingBottom: "10px" }}>
                Copyright © 2023 mettamuse. All rights reserved.
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
