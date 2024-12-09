import Image from "next/image";
import logoImg from "../../public/Logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import styling from "./SiteHeader.module.css";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
const SiteHeader = () => {
  return (
    <div className={styling.Header}>
      <div className={styling.HeaderUpSec}>
        <div className={styling.HeaderLogo}>
          <Image src={logoImg} alt="Apple Pay" width={40} height={40} />

          <IoReorderThreeOutline size={50} className={styling.threeLine} />
        </div>
        <div className={styling.HeaderTitle}>
          <h1>LOGO</h1>
        </div>
        <div className={styling.HeaderIcos}>
          <CiSearch className={styling.SearchIcon} size={30} />
          <IoIosHeartEmpty
            className={`${styling.IconeSpace} , ${styling.HeartIcone}`}
            size={30}
          />
          <IoBagHandleOutline size={30} />
          <CgProfile
            className={`${styling.IconeSpace}, ${styling.ProfileIcone}`}
            size={30}
          />
          <h4 className={styling.DownIcone} style={{ fontSize: "25px" }}>
            ENG
          </h4>
          <FaChevronDown className={styling.DownIcone} size={18} />
        </div>
      </div>
      <div className={styling.HeaderLowSec}>
        <header className={styling.navbar}>
          <ul className={styling.navMenu}>
            <li>
              <a
                href="#"
                className={`${styling.navLink} , ${styling.activeNavLink} , ${styling.forMobileOnly}`}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styling.navLink} , ${styling.activeNavLink}`}
              >
                SHOP
              </a>
            </li>
            <li>
              <a href="#" className={styling.navLink}>
                SKILLS
              </a>
            </li>
            <li>
              <a href="#" className={styling.navLink}>
                STORIES
              </a>
            </li>
            <li>
              <a href="#" className={styling.navLink}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className={styling.navLink}>
                CONTACT US
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default SiteHeader;
