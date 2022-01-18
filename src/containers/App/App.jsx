// import cn from "classnames";
import styles from "./App.module.scss";
// import { getApiResource } from '../../utils/network';
import routerConfig from "../../routes/routesConfig";
import Header from "../../components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header/>
          <Routes>
            {routerConfig.map((route, index) => (
              <Route
                key={index}a
                path={route.path}
                exact={route.exact}
                element={route.Element}
              ></Route>
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </> 
  );
};

export default App;
