import Footer from "./components/Footer";
import HomePageHeader from "./components/HomePageHeader";
import SiteHeader from "./components/SiteHeader";
import TopHeading from "./components/TopHeading";
import MainPage from "./components/mainBody/MainPage";

export default function Home() {
  return (
    <>
      <TopHeading />
      <SiteHeader />
      <HomePageHeader />
      <MainPage />
      <Footer />
    </>
  );
}
