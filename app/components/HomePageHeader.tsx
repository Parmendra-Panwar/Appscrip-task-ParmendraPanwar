import styling from "./HomePageHeader.module.css";

const HomePageHeader = () => {
  return (
    <div className={styling.TitleSubHeader}>
      <h1>DISCOVER OUR PRODUCTS</h1>
      <h2 className={styling.headerText}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </h2>
    </div>
  );
};

export default HomePageHeader;
