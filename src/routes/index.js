import DefaultLayout from "../layout/DefaultLayout";
import MovieLayout from "../layout/MovieLayout/MovieLayout";
//pages
import Home from "../page/Home";
import MyList from "../page/MyList";
import Movie from "../page/Movie";
import Lander from "../page/Lander";
import Search from "../page/Search";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout, name: "Trang chủ" },
  {
    path: "/my-list",
    component: MyList,
    layout: DefaultLayout,
    name: "Phim của tôi",
  },
  {
    path: "/movie/:id/:episode",
    component: Movie,
    layout: DefaultLayout,
  },
  {
    path: "/lander",
    component: Lander,
    layout: DefaultLayout,
  },
  {
    path: "/search/:title",
    component: Search,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
