import { lazy } from "react";
import LoadingGif from "../components/loading/LoadingGif";

const Home = LoadingGif(lazy(() => import("../pages/Home")));
const UserInfo = LoadingGif(lazy(() => import("../pages/UserInfo")));
const NotFound = LoadingGif(lazy(() => import("../pages/NotFound")));

export { Home, UserInfo, NotFound};