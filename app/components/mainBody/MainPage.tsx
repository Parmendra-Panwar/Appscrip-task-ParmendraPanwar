// "use client";
// import { useState } from "react";
// import styling from "./MainPage.module.css";
// import TopSection from "./TopSection";
// import FilterSection from "./FilterSection";
// import CardSection from "./CardSection";

// const MainPage: React.FC = () => {
//   const [filtersVisible, setFiltersVisible] = useState(true);

//   const toggleFilters = () => {
//     setFiltersVisible((prev) => !prev);
//   };

//   return (
//     <div className={styling.GrendContainer}>
//       <TopSection
//         itemCount={3425}
//         onFilterToggle={toggleFilters}
//         filtersVisible={filtersVisible}
//       />

//       <div className={styling.mainContainer}>
//         <div className={filtersVisible ? "" : styling.hidden}>
//           <FilterSection />
//         </div>
//         <CardSection />
//       </div>
//     </div>
//   );
// };

// export default MainPage;

"use client";
import { useState } from "react";
import styling from "./MainPage.module.css";
import TopSection from "./TopSection";
import FilterSection from "./FilterSection";
import CardSection from "./CardSection";

const MainPage: React.FC = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);

  const toggleFilters = () => {
    setFiltersVisible((prev) => !prev);
  };

  return (
    <div className={styling.GrendContainer}>
      <TopSection
        itemCount={3425}
        onFilterToggle={toggleFilters}
        filtersVisible={filtersVisible}
      />

      <div className={styling.mainContainer}>
        {/* Conditionally render the FilterSection */}
        <div
          className={`${styling.FilterSection} ${
            filtersVisible ? "" : styling.hidden
          }`}
        >
          <FilterSection />
        </div>
        <div className={styling.CardSection}>
          <CardSection />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
