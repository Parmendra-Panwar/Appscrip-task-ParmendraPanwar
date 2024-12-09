import React from "react";
import styling from "./TopHeading.module.css";

const TopHeading = () => {
  return (
    <div className={styling.scrollingWrapper}>
      <div className={styling.scrollingContent}>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        {/* Duplicate content for seamless scrolling */}
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default TopHeading;
