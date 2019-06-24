import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.png";
import image3 from "assets/img/bg3.png";
import image4 from "assets/img/bg4.png";
import image5 from "assets/img/bg5.gif";
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
      openRight: false,
      openTop2: false,
      openTop3: false
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
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <LazyLoadImage
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
                        aria-label="Open"
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
                        aria-label="open"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        buttonRef={node => {
                          this.anchorElTop = node;
                        }}
                        onClick={() => this.handleClickButton("openBottom")}
                        color="info"
                        size="sm"
                        justIcon
                        round
                      >
                        <i className="fas fa-info" />
                      </Button>
                      <Popover
                        classes={{
                          paper: classes.popover
                        }}
                        open={this.state.openBottom}
                        anchorEl={this.anchorElBottom}
                        anchorReference={"anchorEl"}
                        onClose={() => this.handleClosePopover("openBottom")}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                      >
                        <h3 className={classes.popoverHeader}>
                          Power Moves and Pumps
                        </h3>
                        <div className={classes.popoverBody}>
                          <p>
                            {" "}
                            I noticed this website needed a rehaul. So we
                            implement some new designs and update the overall
                            feel of the site. I Gave it a more light and
                            interactive feel. Catering to the clients needs to
                            the teeth. This required a lot of using the same
                            components so I think the next time I do a blog like
                            a website I will use React. Written in HTML5, CSS3,
                            JavaScript and Bootstrap4.
                          </p>
                        </div>
                      </Popover>
                    </div>
                  </div>
                  <div>
                    <LazyLoadImage
                      src={image2}
                      alt="First slide"
                      className="slick-image img-fluid"
                    />
                    <div className="slick-caption">
                      <Button
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://github.com/CodingOni/Ecommerce-Store"
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
                        href="https://e-spot.netlify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        buttonRef={node => {
                          this.anchorElTop = node;
                        }}
                        onClick={() => this.handleClickButton("openLeft")}
                        color="info"
                        size="sm"
                        justIcon
                        round
                      >
                        <i className="fas fa-info" />
                      </Button>
                      <Popover
                        classes={{
                          paper: classes.popover
                        }}
                        open={this.state.openLeft}
                        anchorEl={this.anchorElLeft}
                        anchorReference={"anchorEl"}
                        onClose={() => this.handleClosePopover("openLeft")}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                      >
                        <h3 className={classes.popoverHeader}>2Uper</h3>
                        <div className={classes.popoverBody}>
                          <p>
                            I noticed many local barbershops do no have websites
                            in my area. So I decided to take advantage of this
                            and create a simple website for new customers to see
                            available barbers and easily book them. This site
                            has a book me a button that would direct users to
                            their Booksy profile to book an appointment from the
                            first page customers can see the barbers experience
                            and when they work. I also added a page that shows
                            the pricing for each service with a brief
                            description. Knowing this place is Hard to find I
                            included a Google Map API that in oneclick from the
                            homepage gives you directions to the barbershop.
                            Written with HTML5, CSS3 and BootStrap4
                          </p>
                        </div>
                      </Popover>
                    </div>
                  </div>

                  <div>
                    <LazyLoadImage
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
                        buttonRef={node => {
                          this.anchorElTop = node;
                        }}
                        onClick={() => this.handleClickButton("openRight")}
                        color="info"
                        size="sm"
                        justIcon
                        round
                      >
                        <i className="fas fa-info" />
                      </Button>
                      <Popover
                        classes={{
                          paper: classes.popover
                        }}
                        open={this.state.openRight}
                        anchorEl={this.anchorElRight}
                        anchorReference={"anchorEl"}
                        onClose={() => this.handleClosePopover("openRight")}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                      >
                        <h3 className={classes.popoverHeader}>PrecisionCutz</h3>
                        <div className={classes.popoverBody}>
                          <p>
                            I noticed many local barbershops do no have websites
                            in my area. So I decided to take advantage of this
                            and create a simple website for new customers to see
                            available barbers and easily book them. This site
                            has a book me a button that would direct users to
                            their Booksy profile to book an appointment from the
                            first page customers can see the barbers experience
                            and when they work. I also added a page that shows
                            the pricing for each service with a brief
                            description. Knowing this place is Hard to find I
                            included a Google Map API that in oneclick from the
                            homepage gives you directions to the barbershop.
                            Written with HTML5, CSS3 and BootStrap4.
                          </p>{" "}
                        </div>
                      </Popover>
                    </div>
                  </div>
                  <div>
                    <LazyLoadImage
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
                        href="https://github.com/CodingOni/Catharsis-LLC"
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
                        href="https://mycatharsis.000webhostapp.com/CatharsisLLC/index.html"
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
                      >
                        <i className="fas fa-info" />
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
                        <h3 className={classes.popoverHeader}>MyCatharsis</h3>
                        <div className={classes.popoverBody}>
                          <p>
                            This is a rework of a clients massage business. She
                            attempted to create this site on her own using a
                            third-party site. This site was clunky , was not
                            optimized for mobile phones and had way too many
                            pages. My first step was making this site mobile
                            responsive. And instead of their being a separate
                            page for each service I was able to fit everything
                            onto one simple screen with nothing further than a
                            hover and a click away. Written with HTML5 and CSS3
                          </p>
                        </div>
                      </Popover>
                    </div>
                  </div>
                  <div>
                    <LazyLoadImage
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
                        href="https://github.com/CodingOni/VoiceRecBot"
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
                        href=" https://codingoni.github.io/VoiceRecBot/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        buttonRef={node => {
                          this.anchorElTop = node;
                        }}
                        onClick={() => this.handleClickButton("openTop2")}
                        color="info"
                        size="sm"
                        justIcon
                        round
                      >
                        <i className="fas fa-info" />
                      </Button>
                      <Popover
                        classes={{
                          paper: classes.popover
                        }}
                        open={this.state.openTop2}
                        anchorEl={this.anchorElTop22}
                        anchorReference={"anchorEl"}
                        onClose={() => this.handleClosePopover("openTop2")}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                      >
                        <h3 className={classes.popoverHeader}>Jeffrey</h3>
                        <div className={classes.popoverBody}>
                          <p>
                            I came across this cool feature on Mozilla Developer
                            netework. It allows you to access someones
                            microphone through the browser and have a voice
                            respond to what you say. I thought this was cool and
                            it would be useful i could somehow put this into a
                            smaller device for blind people in my family to save
                            information, get the time weather and google
                            results. This Site Uses HTML CSS JavaScript and
                            Bootstrap.This is experimental and may not work on
                            all browsers.
                          </p>
                        </div>
                      </Popover>
                    </div>
                  </div>
                  <div>
                    <LazyLoadImage
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
                        href="https://github.com/CodingOni/Tools"
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
                        href="https://drive.google.com/file/d/1T8LRanlw1vFLVGyM6OGczSjLkSaCF-EM/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-eye" />
                      </Button>
                      <Button
                        buttonRef={node => {
                          this.anchorElTop = node;
                        }}
                        onClick={() => this.handleClickButton("openTop3")}
                        color="info"
                        size="sm"
                        justIcon
                        round
                      >
                        <i className="fas fa-info" />
                      </Button>
                      <Popover
                        classes={{
                          paper: classes.popover
                        }}
                        open={this.state.openTop3}
                        anchorEl={this.anchorElTop3}
                        anchorReference={"anchorEl"}
                        onClose={() => this.handleClosePopover("openTop3")}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                      >
                        <h3 className={classes.popoverHeader}>
                          InstaGram Automation
                        </h3>
                        <div className={classes.popoverBody}>
                          <p>
                            Wanting to automate my workflow and practice some
                            DOM manipulation, I created this Bot that likes
                            posts and can be extended to follow people as well.
                            I had a blast making this and troubleshooting it. I
                            became disappointed as I learned I could not
                            navigate web pages with Chrome Dev Tools, but i
                            developed some other features if I somehow found a
                            way to do this.
                          </p>
                        </div>
                      </Popover>
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
