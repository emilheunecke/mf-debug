import React from "react";
import ReactDOM from "react-dom";

import "./home.css";

const mount = "home"

const App = () => <div>Hi there, I'm React from Webpack 5.</div>;

ReactDOM.render(<App />, document.getElementById(mount));
