import DefaultLayout from "../layout/DefaultLayout";
//pages
import Home from "../page/Home";
import MyList from "../page/MyList";
import Movie from "../page/Movie";
import Lander from "../page/Lander";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout, name: "Trang chủ" },
  {
    path: "/my-list",
    component: MyList,
    layout: DefaultLayout,
    name: "Phim của tôi",
  },
  {
    path: "/movie/:id",
    component: Movie,
    layout: DefaultLayout,
  },
  {
    path: "/lander",
    component: Lander,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
