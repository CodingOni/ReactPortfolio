import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Explore from "@material-ui/icons/Explore";
import AccountCircle from "@material-ui/icons/AccountCircle";

// core components
import Button from "components/CustomButtons/Button.jsx";
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Link to="/" className={classes.link}>
          <Button
            className={classes.navLink + " " + classes.navLinkActive}
            color="transparent"
          >
            <Explore className={classes.icons} /> <li className="NavLink3">Home</li>
          </Button>
        </Link>
        <Link to="/profile-page" className={classes.link}>
          <Button
            className={classes.navLink + " " + classes.navLinkActive}
            color="transparent"
          >
            <AccountCircle className={classes.icons} /> <li className="NavLink3">Profile</li>
          </Button>
        </Link>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(SectionExamples);
