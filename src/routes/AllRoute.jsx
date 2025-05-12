import { useRoutes } from "react-router-dom";
import { routes } from ".";

export default function AllRoute() {
  const allRoutes = useRoutes(routes);
  return <>{allRoutes}</>;
}
