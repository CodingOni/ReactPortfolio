import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import SectionExamples from "./SectionExamples.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

class SectionNavbars extends React.Component {
  render() {
    const { classes, rest } = this.props;
    return (
      <Link to="/profile-page" className={classes.link}>
        <Header
          className="NavHeader"
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
      </Link>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
