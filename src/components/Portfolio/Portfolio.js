import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Portfolio.module.css";
import classnames from "classnames/bind";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import project1 from "../../img/project1.jpg";
import project2 from "../../img/project2.jpg";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.png";

const cx = classnames.bind(styles);

export default function Portfolio() {
   return (
      <Container fluid className={cx("portfolio")}>
         <Row noGutters="true">
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project1} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project2} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project3} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project4} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project4} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project3} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project2} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project1} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project1} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project2} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project3} />
            </Col>
            <Col xs={12} sm={6} lg={3}>
               <PortfolioItem href="#" image={project4} />
            </Col>
         </Row>
      </Container>
   );
}
