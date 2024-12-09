"use client";

import { useState } from "react";
import styling from "./Footer.module.css";

const Footer: React.FC = () => {
  const [isMuseOpen, setIsMuseOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <footer className={styling.footer}>
      <div className={styling.topSection}>
        <div className={styling.newsletter}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettà muse.</p>
          <div className={styling.subscribe}>
            <input type="email" placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styling.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 123 5680</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <div className={styling.bottomSection}>
        <div className={`${styling.info} ${isMuseOpen ? styling.open : ""}`}>
          <h5 onClick={() => setIsMuseOpen(!isMuseOpen)}>
            mettà muse {isMuseOpen ? "▲" : "▼"}
          </h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={`${styling.info} ${isLinksOpen ? styling.open : ""}`}>
          <h5 onClick={() => setIsLinksOpen(!isLinksOpen)}>
            QUICK LINKS {isLinksOpen ? "▲" : "▼"}
          </h5>
          <ul>
            <li>Order & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styling.social}>
          <h5>FOLLOW US</h5>
          <div className={styling.socialIcons}>
            <span className={styling.icon}>📷</span>
            <span className={styling.icon}>🔗</span>
          </div>
          <h5>mettà muse ACCEPTS</h5>
          <div className={styling.paymentIcons}>
            <img src="https://via.placeholder.com/150" alt="Apple Pay" />
            <img src="https://via.placeholder.com/150" alt="Mastercard" />
            <img src="https://via.placeholder.com/150" alt="Amex" />
            <img src="https://via.placeholder.com/150" alt="Paypal" />
          </div>
        </div>
      </div>

      <div className={styling.copyright}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
