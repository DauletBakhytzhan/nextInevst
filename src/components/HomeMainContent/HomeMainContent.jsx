import styles from "./HomeMainContent.module.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Cards from "../Cards/Cards";
import image1 from "../../static/img/Img.png";
import image2 from "../../static/img/Img (1).png";
import image3 from "../../static/img/Img (2).png";
import image4 from "../../static/img/Img (3).png";
import image5 from "../../static/img/Img (4).png";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomeMainContent = () => {
  const arr = [image1, image2, image3, image4, image5];

  return (
    <Box sx={{ flexGrow: 1 }} mt={5}>
      <Grid container justifyContent="center">
        <Grid item md={5}>
          <p className={styles.text1}>Offerings open for investment</p>
          <p className={styles.text2}>
            Explore pre-vetted investment opportunities available in a growing
            number of industry categories.
          </p>
        </Grid>
        <Grid md={8} mt={4}>
          <Grid
            container
            spacing={{ xs: 1, md: 9 }}
            columns={{ xs: 3, sm: 3, md: 6 }}
          >
            {Array.from(arr).map((_, index) => (
              <Grid item xs={2} sm={2} md={2} key={index}>
                <Cards
                  item
                  title="Oxalis"
                  address="Brooklyn, NY"
                  description="A recognized leader in language immersion & early education, opening second school."
                  allPrice="$1,000,000"
                  price="$574,920"
                  image={arr[index]}
                ></Cards>
              </Grid>
            ))}
          </Grid>{" "}
          <Grid  container justifyContent="center">
            <Grid item mt={8}>
            <div className={styles.btn__projects}>
                <NavLink
                  to="/register"
                  exact
                  className={styles.navbar}
                  undeline="none"
                >
                  <div className={styles.navbar__text2}>VIEW ALL PROJECTS</div>
                </NavLink>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeMainContent;
