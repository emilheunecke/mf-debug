import { lazy } from "react";
import { federated } from "./federated";

const Header = federated(lazy(() => import("slagtstra_nav/header")));

export { Header };
