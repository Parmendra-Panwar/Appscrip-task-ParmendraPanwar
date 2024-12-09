import styling from "./TopHeading.module.css";

const TopHeading = () => {
  return (
    <div className={styling.asa}>
      <div>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
      </div>
      <div>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
      </div>
      <div>
        <p className={styling.loremTitle}>🟥 Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default TopHeading;
