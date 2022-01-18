import styles from "./HomePage.module.scss";
import NavBar from "../../components/Navbar/NavBar";
import HomePageHero from "../../components/HomePageHero";
import HomeMainContent from "../../components/HomeMainContent"
const HomePage = () => {
  return (
    <>
      <div>
        <HomePageHero/>
        <HomeMainContent/>
      </div>
    </>
  );
};

export default HomePage;
