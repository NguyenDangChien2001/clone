import DefaultLayout from "../layout/DefaultLayout";
//pages
import Home from "../page/Home";
import MyList from "../page/MyList";

const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout, name: "Home" },
  {
    path: "/my-list",
    component: MyList,
    layout: DefaultLayout,
    name: "My List",
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
