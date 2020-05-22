import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle";
import Portfolio from "../../components/Portfolio/Portfolio";
import SectionBlock from "../../components/SectionBlock/SectionBlock.js";

export default class Home extends Component {
   render() {
      return (
         <>
            <SectionBlock className="color-gray" bgColor="light-gray">
               <Container>
                  <Row>
                     <Col sm={{ span: 6, offset: 3 }}>
                        <SectionTitle as="h1" textAlign="center">
                           UI/UX & Graphic Designer
                        </SectionTitle>
                        <SectionSubtitle textAlign="center" noMarginBottom>
                           I am a Graphic & Web Designer based in New York, specializing in User
                           Interface Design and Development.
                        </SectionSubtitle>
                     </Col>
                  </Row>
               </Container>
            </SectionBlock>
            <Portfolio />
         </>
      );
   }
}
