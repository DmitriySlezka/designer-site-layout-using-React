import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";
import logo from "../../img/logo.png";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Header = ({ className }) => {
   return (
      <>
         <header className={cx("header", className)}>
            <Container>
               <Row>
                  <Col xs={3} md={1}>
                     <a href="/">
                        <img src={logo} alt="Logo" />
                     </a>
                  </Col>
                  <Col xs={9} md={{ span: 3, offset: 8 }}>
                     <nav className={cx("nav")}>
                        <ul className={cx("links")}>
                           <li className={cx("link")}>
                              <a href="/">Home</a>
                           </li>
                           <li className={cx("link")}>
                              <a href="/about">About</a>
                           </li>
                           <li className={cx("link")}>
                              <a href="/contact">Contact</a>
                           </li>
                        </ul>
                     </nav>
                  </Col>
               </Row>
            </Container>
         </header>
      </>
   );
};

export default Header;
