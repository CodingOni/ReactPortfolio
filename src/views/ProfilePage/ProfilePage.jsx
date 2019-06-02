import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Rowing from "@material-ui/icons/Rowing";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";

import profile from "assets/img/faces/christian.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <SectionNavbars />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer className="profileDiv">
                <GridItem className="profileDiv" xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={profile}
                        alt="Black Avatar"
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Tyrique Daniel</h3>
                      <h6>Front-End Developer</h6>
                      <Button
                        href="https://stackoverflow.com/users/11283278/codingoni"
                        target="_blank"
                        rel="noopener noreferrer"
                        justIcon
                        link
                        className={classes.margin5}
                        title="StackOverflow"
                        alt="StackOverflow"
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
                        title="LinkedIn"
                        alt="LinkedIn"
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
                        title="GitHub"
                        alt="GitHub"
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
                        title="SoloLearn"
                        alt="SoloLearn"
                      >
                        <i className={"fas fa-database"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  I have always been a computer guy I remember inspecting
                  elements in middle school and changing some text and thinking
                  I hacked the school website. To then creating my own website
                  with basic HTML and CSS in high school.I began going a bit
                  deeper and changing game files increase my health or in game
                  currency for fun. From there I decided to go to college for
                  Computer Science where I studied languages like C++ and
                  learned how to think like a programmer. The ability to create
                  things you think of into a real space fascinates me. I love
                  solving problems and being creative so programming is perfect
                  fit. Aspects of programming it has always been a part of my
                  life. Currently, I am learning more about React and next I
                  plan to learn back-end in a few years dive into machine
                  learning.
                </p>
                <SectionTabs />
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="warning"
                    tabs={[
                      {
                        tabButton: "Interests",
                        tabIcon: AssignmentInd,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <LazyLoadImage
                                alt="Artificial Intelligence"
                                src={
                                  "https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325374/Artificial_Intelligence_o3ft8u.jpg"
                                }
                                className={navImageClasses}
                              />
                              <LazyLoadImage
                                alt="Solar Energy"
                                src="https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325515/SolarEnergy_cwwh86.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <LazyLoadImage
                                alt="3D Printing"
                                src="https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325546/3dprinting_ssjgla.jpg"
                                className={navImageClasses}
                              />
                              <LazyLoadImage
                                alt="Save the earth"
                                src="https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325624/SaveEarth_m8nn1t.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Hobbies",
                        tabIcon: Rowing,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <LazyLoadImage
                                alt="Working Out"
                                src={
                                  "https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325723/WorkingOut_iftzl4.jpg"
                                }
                                className={navImageClasses}
                              />
                              <LazyLoadImage
                                alt="Festival"
                                src="https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325726/Festival_gpe5da.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <LazyLoadImage
                                alt="LongBoarding"
                                src="https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325720/LongBoarding_zg7liu.jpg"
                                className={navImageClasses}
                              />
                              <LazyLoadImage
                                alt="OutDoors"
                                src="https://res.cloudinary.com/dvqyek3sb/image/upload/v1559325725/OutDoors_bzhtob.jpg"
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
