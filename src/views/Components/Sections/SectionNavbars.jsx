import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SectionExamples from "./SectionExamples.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

class SectionNavbars extends React.Component {
  render() {
    const { classes, rest } = this.props;
    return (
      <Header
        brand="Tyrique Daniel"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <SectionExamples />
            </ListItem>
          </List>
        }
      />
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
