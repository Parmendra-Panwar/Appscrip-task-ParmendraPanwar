"use client";
import Image from "next/image";
import imgg1 from "../../public/AEPAY.png";
import imgg2 from "../../public/APAY.png";
import imgg3 from "../../public/GPAY.png";
import imgg4 from "../../public/MPAY.png";
import imgg5 from "../../public/OPAY.png";
import imgg6 from "../../public/PPAY.png";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

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
            <div className={styling.socialIconsIcon}>
              <PiInstagramLogoFill size={30} />
            </div>
            <div className={styling.socialIconsIcon}>
              <FaLinkedin size={30} />
            </div>
          </div>
          <h5>mettà muse ACCEPTS</h5>
          <div className={styling.paymentIcons}>
            <Image src={imgg1} alt="Apple Pay" width={40} height={40} />
            <Image src={imgg2} alt="PayPal" width={40} height={40} />
            <Image src={imgg3} alt="Google Pay" width={40} height={40} />
            <Image src={imgg4} alt="MasterCard" width={40} height={40} />
            <Image src={imgg5} alt="Other Pay" width={40} height={40} />
            <Image src={imgg6} alt="Payment Platform" width={40} height={40} />
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
