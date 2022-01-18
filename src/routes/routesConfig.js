import HomePage from "../containers/HomePage";
// import { ApiManga } from "../../constants/api";

const routerConfig = [
  {
    path: "/",
    exact: true,
    Element: <HomePage/>,
  },
];

export default routerConfig;
