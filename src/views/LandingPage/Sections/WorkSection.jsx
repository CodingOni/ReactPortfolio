import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer className="contactme" justify="center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe7ayyQgu-lZIJtu48Xu5lgKtlJka4yEXVnnMR_tLZOfaxu-Q/viewform?embedded=true"
            width="640"
            height="751"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>{" "}
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
