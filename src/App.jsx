import React, { useContext } from "react";
import { createBrowserHistory } from "history";
import {
  Route,
  Switch,
    __RouterContext,
  BrowserRouter
} from "react-router-dom";
import ReactDOM from "react-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

// First way to import
import { useTransition, animated } from "react-spring";

var hist = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
// eslint-disable-next-line to
// pages for this product
const LandingPage1 = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};
// eslint-disable-next-line to
const ProfilePage1 = () => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

const Home = () => {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: "absolute",
      width: "100%",
      opacity: 0,
      transform: "translate(100%,0)"
    },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-50%,0)" }
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
