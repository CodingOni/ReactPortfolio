import React from "react";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
var hist = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  render() {
    return (
      <>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
        />
        <Router history={hist}>
          <Switch>
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </>
    );
  }
}
