import ContentHome from "../components/Content";
import Libary from "../components/Libarys";
import Home from "../pages/clients/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <ContentHome />,
      },
      {
        path: "/mymusic",
        element: <Libary />,
      },
    ],
  },
];
