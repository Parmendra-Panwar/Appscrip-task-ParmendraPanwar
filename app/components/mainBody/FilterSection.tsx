"use client";
import { useState } from "react";
import styling from "./FilterSection.module.css";

type FilterOption = {
  label: string;
  options: string[];
};

const filters: FilterOption[] = [
  { label: "IDEAL FOR", options: ["Men", "Women", "Kids"] },
  { label: "OCCASION", options: ["Casual", "Party", "Formal"] },
  { label: "WORK", options: ["Men", "Women", "Kids"] },
  { label: "FABRIC", options: ["Cotton", "Wool", "Polyester"] },
  { label: "SEGMENT", options: ["Men", "Women", "Kids"] },
  { label: "SUITABLE FOR", options: ["Casual", "Party", "Formal"] },
  { label: "RAW MATERIAL", options: ["Cotton", "Silk", "Linen"] },
  { label: "PATTERN", options: ["Plain", "Striped", "Checked"] },
];

const FilterSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string[]>
  >(
    filters.reduce((acc, filter) => {
      acc[filter.label] = [];
      return acc;
    }, {} as Record<string, string[]>)
  );

  const toggleDropdown = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  const handleSelectAll = (label: string) => {
    const filter = filters.find((f) => f.label === label);
    if (filter) {
      setSelectedOptions((prev) => ({ ...prev, [label]: filter.options }));
    }
  };

  const handleUnselectAll = (label: string) => {
    setSelectedOptions((prev) => ({ ...prev, [label]: [] }));
  };

  const handleOptionChange = (label: string, option: string) => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[label];
      const updatedOptions = currentOptions.includes(option)
        ? currentOptions.filter((o) => o !== option)
        : [...currentOptions, option];
      return { ...prev, [label]: updatedOptions };
    });
  };

  return (
    <div className={styling.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <input type="checkbox" className={styling.custmzButton} />
        <div className={styling.filterHeader}>Customizble</div>
      </div>
      <hr />
      {filters.map((filter) => (
        <div key={filter.label} className={styling.dropdownContainer}>
          <div
            className={styling.filterHeader}
            onClick={() => toggleDropdown(filter.label)}
          >
            {filter.label}
            <span
              className={`${styling.arrow} ${
                expanded === filter.label ? styling.arrowUp : ""
              }`}
            >
              ▼
            </span>
          </div>
          <div
            className={`${styling.dropdownContent} ${
              expanded === filter.label ? styling.expanded : ""
            }`}
          >
            <div className={styling.selectActions}>
              <span onClick={() => handleSelectAll(filter.label)}>
                Select All
              </span>
              <span onClick={() => handleUnselectAll(filter.label)}>
                Unselect All
              </span>
            </div>
            <div className={styling.radioGroup}>
              {filter.options.map((option) => (
                <div key={option} className={styling.radioOption}>
                  <input
                    type="checkbox"
                    id={`${filter.label}-${option}`}
                    checked={selectedOptions[filter.label]?.includes(option)}
                    onChange={() => handleOptionChange(filter.label, option)}
                  />
                  <label
                    htmlFor={`${filter.label}-${option}`}
                    className={styling.label}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
