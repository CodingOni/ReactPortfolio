import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Rowing from "@material-ui/icons/Rowing";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";

import profile from "assets/img/faces/christian.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
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
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
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
                      
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Hello, and thank you for visiting my website. I have always
                  been a computer guy I remember inspecting elements in middle
                  school and changing some text and thinking I hacked the school
                  website. To then creating my own website with basic HTML and
                  CSS in high school. From there I decided to go to college for
                  Computer Science where I studied languages like C++ and
                  learned how to think like a programmer.
                  <a href="#pablo">links</a> for people to be able to follow
                  them outside the site. The ability to create things you think
                  of into a real space fascinates me. I love solving problems
                  and being creative so programming is perfect for me it seems
                  as it has always been a part of my life. Currently, I am
                  learning more frameworks next I plan to learn back-end and in
                  a few years delv into machine learning.
                </p>
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
                            <GridItem xs={12} sm={12} md={4} >
                            <img
                                alt="..."
                                src={
                                  "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                                }
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1549563316-5384a923453e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1507745512299-8bd0e0b3380f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
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
                              <img
                                alt="..."
                                src={
                                  "https://images.unsplash.com/photo-1500411215320-ad9acc940360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80"
                                }
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
                <SectionTabs />
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
