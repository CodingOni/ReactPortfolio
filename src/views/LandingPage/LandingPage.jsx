import React from "react";
// nodejs library that concatenates classes
import ScrollableAnchor from "react-scrollable-anchor";

import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

// eslint-disable-next-line
const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    // eslint-disable-next-line
    const { classes, ...rest } = this.props;
    return (
      <div>
        <SectionNavbars />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Tyrique Daniel</h1>
                <h4>
                  I'm a Front-End Developer currently looking to join a new team
                  and willing to relocate. I have serious passion for UI
                  effects, animations and creating intuitive, dynamic user
                  experiences. Let's make something special.
                </h4>
                <br />
                <Button
                  color="info"
                  size="lg"
                  href="https://drive.google.com/drive/u/0/my-drive?ths=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file" />
                  My Resume
                </Button>
                <Button color="info" size="lg">
                  <i className="fas fa-book" />
                  <a href="#Projects">Projects</a>
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <ScrollableAnchor id={"Projects"}>
              <SectionCarousel />
            </ScrollableAnchor>
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
