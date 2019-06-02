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
                          Power Pumps and Moves
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
                        color="info"
                        size="sm"
                        justIcon
                        round
                        href="https://codingoni.github.io/2uper/"
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
                        <h3 className={classes.popoverHeader}>bCalculator</h3>
                        <div className={classes.popoverBody}>
                          <p>
                            Wanting to further my JavaScript knowledge I created
                            a basic calculator that performs equations. I also
                            made the keys accessible to the visually impaired
                            this was very important to me because my grandfather
                            is actually blind. Written with CSS3, HTML5 and
                            Javascript.
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
                        <h3 className={classes.popoverHeader}>Four In a Row</h3>
                        <div className={classes.popoverBody}>
                          <p>
                          I wanted to strengthen my JavaScript skills with
                            another game so I created a Four In a row game. Each
                            player is assigned a color and the first to get four
                            coins in a row win the game. The game uses arrow
                            keys to function correctly. Written with HTML5, CSS3 and Javascript
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
