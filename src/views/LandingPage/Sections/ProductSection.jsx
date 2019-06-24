import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Fade from "react-reveal/Fade";

// @material-ui/icons
import Chat from "@material-ui/icons/TouchApp";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import MemoryIcon from "@material-ui/icons/Memory";
import BugReport from "@material-ui/icons/BugReport";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem
              className="greetingicon Interactive"
              xs={12}
              sm={12}
              md={4}
            >
              <Fade>
                <InfoArea
                  title="Dynamic"
                  description="Websites don't have to be static, I love making pages come to life."
                  icon={Chat}
                  iconColor="info"
                  vertical
                />
              </Fade>
            </GridItem>

            <GridItem
              className="greetingicon Responsive"
              xs={12}
              sm={12}
              md={4}
            >
              {" "}
              <Fade>
                <InfoArea
                  title="Responsive & Intuitive"
                  description="My layouts will work well on all screens big or small and are intuitive UX/UI making navigation seamless"
                  icon={ImportantDevices}
                  iconColor="success"
                  vertical
                />
              </Fade>
            </GridItem>
            <GridItem className="greetingicon Optimized" xs={12} sm={12} md={4}>
              <Fade>
                <InfoArea
                  title="Optimized"
                  description="Fast load times and lag free interaction are one of the most important things to me."
                  icon={MemoryIcon}
                  iconColor="danger"
                  vertical
                />
              </Fade>
            </GridItem>
            <GridItem className="greetingicon Bug" xs={12} sm={12} md={4}>
              <Fade>
                <InfoArea
                  title="Bug Eliminator"
                  description="Expert in Problem Solving and Computer Knowledge according to assesment provided by Linked In"
                  icon={BugReport}
                  iconColor="danger"
                  vertical
                />
              </Fade>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
