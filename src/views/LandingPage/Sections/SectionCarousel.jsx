import React from "react";
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
                            overall feel of the site.I Gave it a more light and
                            interactive feel. And catered to the clients needs
                            to the teeth. This required alot of using the same
                            components so i think the next time i do a blog like
                            website i will use React.
                          </p>
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
                            This site is a rework of a clients attempt at
                            creating their website. The website looked like it
                            was from the early 2,000's ran at a snail's pace and
                            had a way to many pages, in fact, it is still up
                            right now 2uper.com. I began with modernizing the
                            website with a moving carousel and a shop button
                            that grabs the attention of the user. Then I broke
                            the pages down to two pages and a drop-down of shop
                            classes. The less clicks the better. I also added a
                            contact page so the client can be easily contacted
                            and improved overall performance. The client is
                            still gathering information for the store.
                          </p>
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
                            included a Google Map API that in two clicks from
                            the homepage gives you directions to the barbershop
                          </p>{" "}
                        </div>
                      </Popover>
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
                            This is a rework of a clients massage bussiness. She
                            also attempted to create this site on her own using
                            a third-party site. This site was clunky and
                            unresponsive, with too many pages. My first step was
                            making this site mobile responsive. And instead of
                            their being a separate page for each service I was
                            able to fit everything onto one simple screen with
                            nothing further than a hover and a click away.
                          </p>
                        </div>
                      </Popover>
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
                            is actually blind.
                          </p>
                        </div>
                      </Popover>
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
                            keys to function correctly.
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
