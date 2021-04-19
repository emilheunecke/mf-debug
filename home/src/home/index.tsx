import React, { FC } from "react";
import ReactDOM from "react-dom";

import "./home.css";
import { Header } from "./remotes";

const mount = "home";

const App: FC = () => (
  <div>
    <Header error={<div>Header Error!</div>} />
    <div>Hi there, I'm React from React.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById(mount));
