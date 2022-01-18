import styles from "./NavBar.module.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/josefin-sans";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Josefin Sans"].join(","),
  },
});

const useStyles = makeStyles({
  selectBorder: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      width: 215,
    },
  },
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center">
        <Grid md={9} container>
          <Grid item md={3}>
            <div className={styles.navbar}>
              <ThemeProvider theme={theme}>
                <NavLink
                  to="/"
                  exact
                  className={styles.navbar}
                  undeline="none"
                  activeStyle={{ color: "#128C76", textDecoration: "none" }}
                >
                  <div>
                    {" "}
                    <Typography gutterBottom color="#128C76" fontSize="24px">
                      NEXT INVEST
                    </Typography>
                  </div>
                </NavLink>
              </ThemeProvider>
            </div>
          </Grid>
          <Grid container item md={9}>
            <Grid md={3.6}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  text-align="start"
                  padding="0"
                >
                  <ThemeProvider theme={theme}>
                    <Typography
                      gutterBottom
                      color="#333333"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      Investment Opportunities
                    </Typography>
                  </ThemeProvider>
                </InputLabel>
                <Select
                  className={classes.selectBorder}
                  border="none"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Investment Opportunities"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={2.2}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  text-align="start"
                  padding="0"
                >
                  <ThemeProvider theme={theme}>
                    <Typography
                      gutterBottom
                      color="#333333"
                      fontSize="16px"
                      fontWeight="bold"
                      align="start"
                    >
                      How it works
                    </Typography>
                  </ThemeProvider>
                </InputLabel>
                <Select
                  className={classes.selectBorder}
                  border="none"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Investment Opportunities"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={1.1}>
              <div>
                <NavLink
                  to="/AboutUs"
                  exact
                  className={styles.navbar}
                  undeline="none"
                >
                  <div className={styles.navbar__text3}>About us</div>
                </NavLink>
              </div>
            </Grid>
            <Grid md={0.3}></Grid>
            <Grid md={1.8}>
              <div className={styles.login}>
                <NavLink
                  to="/login"
                  exact
                  className={styles.navbar}
                  undeline="none"
                >
                  <div className={styles.navbar__text}>LOGIN</div>
                </NavLink>
              </div>
            </Grid>
            <Grid md={0.3}></Grid>
            <Grid md={2.3}>
              <div className={styles.register}>
                <NavLink
                  to="/register"
                  exact
                  className={styles.navbar}
                  undeline="none"
                >
                  <div className={styles.navbar__text2}>REGISTER</div>
                </NavLink>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBar;
