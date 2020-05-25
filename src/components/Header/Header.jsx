import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import About from "../../pages/About/About.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import logo from "../../img/logo.png";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default class Header extends Component {
   render() {
      return (
         <>
            <header className={cx("header")}>
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

            <Router>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
               </Switch>
            </Router>
         </>
      );
   }
}
