import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./About.module.css";
import classnames from "classnames/bind";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";
import Button from "../../components/Button/Button";
import Achievement from "../../components/Achievement/Achievement";
import SectionBlock from "../../components/SectionBlock/SectionBlock";

import portfolio from "../../components/Achievement/img/portfolio.png";
import clock from "../../components/Achievement/img/clock.png";
import star from "../../components/Achievement/img/star.png";
import like from "../../components/Achievement/img/like.png";
import signature from "../../img/signature.png";

const cx = classnames.bind(styles);

export default class About extends Component {
   render() {
      return (
         <>
            <SectionBlock bgColor="dark-gray">
               <Container>
                  <Row>
                     <Col xs={12} sm={{ span: 6, offset: 3 }}>
                        <SectionTitle as="h1" color="white" textAlign="center">
                           Amelia Woods
                        </SectionTitle>
                        <SectionSubtitle color="white" textAlign="center" noMarginBottom>
                           I am a Graphic & Web Designer based in New York, specializing in User
                           Interface Design and Development
                        </SectionSubtitle>
                     </Col>
                  </Row>
               </Container>
            </SectionBlock>

            <SectionBlock bgColor="green">
               <Container>
                  <Row>
                     <Col xs={12} sm={6} lg={3}>
                        <Achievement
                           imgSrc={portfolio}
                           imgAlt="Portfolio"
                           count="132"
                           text="projects completed"
                        />
                     </Col>
                     <Col xs={12} sm={6} lg={3}>
                        <Achievement
                           imgSrc={clock}
                           imgAlt="Portfolio"
                           count="7465"
                           text="working hours"
                        />
                     </Col>
                     <Col xs={12} sm={6} lg={3}>
                        <Achievement
                           imgSrc={star}
                           imgAlt="Portfolio"
                           count="130"
                           text="positive feedbacks"
                        />
                     </Col>
                     <Col xs={12} sm={6} lg={3}>
                        <Achievement
                           imgSrc={like}
                           imgAlt="Portfolio"
                           count="130"
                           text="happy clients"
                        />
                     </Col>
                  </Row>
               </Container>
            </SectionBlock>

            <Container fluid>
               <Row noGutters>
                  <Col xs={12} lg={6}>
                     <div className={cx("about-img")}></div>
                  </Col>
                  <Col xs={12} lg={6}>
                     <SectionBlock bgColor="light-gray">
                        <SectionTitle color="black" textAlign="left">
                           About Me
                        </SectionTitle>
                        <SectionSubtitle textAlign="left">
                           Given let waters air sea had you'll, may seed abundantly fish. Were,
                           you'll earth forth winged above brought. Own darkness they're him can't
                           fourth sea place have.
                        </SectionSubtitle>
                        <SectionSubtitle textAlign="left">
                           So the above May stars cattle fruitful face shall. Tree it, winged. Every
                           signs male firmament us. Morning him.
                        </SectionSubtitle>
                        <img className={cx("signature-img")} src={signature} alt="Signature" />
                     </SectionBlock>
                  </Col>
               </Row>
            </Container>

            <SectionBlock textAlign="center">
               <Container>
                  <Row>
                     <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <SectionTitle textAlign="center"> Need a Project? </SectionTitle>
                        <SectionSubtitle textAlign="center">
                           Let us know what you're looking for in an agency. We'll take a look and
                           see if this could be the start of something beautiful.
                        </SectionSubtitle>
                        <Button> Let's Talk </Button>
                     </Col>
                  </Row>
               </Container>
            </SectionBlock>
         </>
      );
   }
}
