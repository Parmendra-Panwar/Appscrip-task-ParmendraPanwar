import { IoReorderThreeOutline } from "react-icons/io5";
import { IoLogoDribbble, IoIosHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import styling from "./SiteHeader.module.css";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
const SiteHeader = () => {
  return (
    <div className={styling.Header}>
      <div className={styling.HeaderUpSec}>
        <div className={styling.HeaderLogo}>
          <IoLogoDribbble size={50} />
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
          <GiShoppingBag size={30} />
          <CgProfile
            className={`${styling.IconeSpace}, ${styling.ProfileIcone}`}
            size={30}
          />
          <h4 className={styling.DownIcone}>ENG</h4>
          <FaAngleDown className={styling.DownIcone} size={30} />
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
