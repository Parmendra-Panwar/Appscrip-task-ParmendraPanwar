import { useState } from "react";
import styling from "./TopSection.module.css";

type TopSectionProps = {
  itemCount: number;
  onFilterToggle: () => void;
  filtersVisible: boolean;
};

const TopSection: React.FC<TopSectionProps> = ({
  itemCount,
  onFilterToggle,
  filtersVisible,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styling.container}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styling.itemCount}>{itemCount} Items</div>

        <div
          style={{ marginLeft: "20px" }}
          className={styling.filterToggle}
          onClick={onFilterToggle}
        >
          {filtersVisible ? "HIDE FILTERS" : "SHOW FILTERS"}
          <span
            className={`${styling.arrow} ${filtersVisible ? styling.up : ""}`}
          >
            ◀
          </span>
        </div>
      </div>

      <div className={styling.dropdown}>
        <button className={styling.dropdownButton} onClick={toggleDropdown}>
          Recommended
          <span
            className={`${styling.arrow} ${dropdownOpen ? styling.up : ""}`}
          >
            ▼
          </span>
        </button>

        <div
          className={`${styling.dropdownMenu} ${
            dropdownOpen ? styling.open : ""
          }`}
        >
          <div className={styling.dropdownItem}>Recommended</div>
          <div className={styling.dropdownItem}>Newest First</div>
          <div className={styling.dropdownItem}>Popular</div>
          <div className={styling.dropdownItem}>Price: High to Low</div>
          <div className={styling.dropdownItem}>Price: Low to High</div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
