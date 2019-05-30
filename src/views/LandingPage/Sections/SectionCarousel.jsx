import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import image4 from "assets/img/bg4.jpg";
import image5 from "assets/img/bg5.jpg";
import image6 from "assets/img/bg6.jpg";

import Button from "components/CustomButtons/Button.jsx";

class SectionCarousel extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }

  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    
    return (
      <div className={classes.section}>
        <div className={classes.container} >
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://github.com/CodingOni/Blog-SiteW"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code" />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://codingoni.github.io/Blog-SiteW/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                buttonRef={node => {
                  this.anchorElTop = node;
                }}
                onClick={() => this.handleClickButton("openTop")}
                color="info"
                size="sm"
                justIcon
                round
                
              />
                                      

              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openTop")}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://github.com/CodingOni/2uper"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code" />
                      </Button>
                      <Button
                buttonRef={node => {
                  this.anchorElTop = node;
                }}
                onClick={() => this.handleClickButton("openTop")}
                color="info"
                        size="sm"
                        justIcon
                        round
              >
                        <i className="fas fa-file" />
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openTop")}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
                    </div>
                  </div>

                  <div>
                    <img
                      src={image3}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://github.com/CodingOni/PrecisionCutz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code" />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://codingoni.github.io/PrecisionCutz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://github.com/CodingOni/Catharsis-LLC"                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code" />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://mycatharsis.000webhostapp.com/CatharsisLLC/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image5}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code" />
                      </Button>
                      <Button
                        color="info"
                        className="fadein"
                        size="sm"
                        justIcon
                        round
                        href="https://codingoni.github.io/bCalculator/calc.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        className="fadein"
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image6}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://github.com/CodingOni/FourInARowGame"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code" />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://codingoni.github.io/FourInARowGame/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-file" />
                      </Button>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
