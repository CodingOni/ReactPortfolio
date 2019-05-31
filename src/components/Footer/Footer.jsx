/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          <Button
                        href="https://stackoverflow.com/users/11283278/codingoni"
                        target="_blank"
                        rel="noopener noreferrer"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className={"fab fa-stack-overflow"} />
                      </Button>
                      <Button
                        href="https://www.linkedin.com/in/tyrique-daniel-764586b5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button
                        href="https://github.com/CodingOni"
                        target="_blank"
                        rel="noopener noreferrer"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className={"fab fa-github"} />
                      </Button>
                      <Button
                        href="https://www.sololearn.com/User/Edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className={"fas fa-database"} />
                      </Button>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} View this sites code
          <Button
                        color= "info"
                        href="https://www.sololearn.com/User/Edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className="fas fa-code" />
                      </Button>
                      <Button
                        color= "info"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=tyriquedaniel14@gmail.com,tyrique1.daniel@gmail.com&su=Programming-Inquiry&body=BODY"
                        target="_blank"
                        rel="noopener noreferrer"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className="fas fa-envelope-square" />
                      </Button>
         
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
