import { Grid } from "@mui/material";
import styles from "./HomePageHero.module.scss";
import { ReactComponent as Logo } from "/Users/dauletbakhytzhan/Desktop/react/giphy-guf/src/static/img/Img.svg";
import { ReactComponent as Shape } from "/Users/dauletbakhytzhan/Desktop/react/giphy-guf/src/static/img/Shape (1).svg";

const HomePageHero = () => {
    const hoverHandler =() =>{
        console.log("in")
    }
  return (
    <>
      <div className={styles.img}>
        <Logo width="100%" height="100%" />
        
        <span className={styles.img__shape}></span>
        <div className={styles.img__shape2}>
          <p className={styles.img__shape2__text1}>
            Meaningful investments in Main Street businesses
          </p>
          <p className={styles.img__shape2__text2}>
            Browse vetted investment offerings in communities all over the US.
          </p>
          <div onMouseOver={hoverHandler}>
            <button className={styles.button}>
              <p className={styles.button__text}>GET STARTED</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
