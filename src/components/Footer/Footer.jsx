import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import classnames from "classnames/bind";
import SectionBlock from "../SectionBlock/SectionBlock.jsx";
import FooterLink from "../FooterLink/FooterLink.jsx";

const cx = classnames.bind(styles);

const Footer = ({ className }) => {
   return (
      <SectionBlock
         as="footer"
         className={cx("footer", className)}
         bgColor="black">
         <Container>
            <Row>
               <Col xs={12} md={2}>
                  <div className={cx("info")}>
                     <h4>Piroll Design, Inc.</h4>
                     <p>
                        © 2017 Piroll.
                        <br />
                        All rights reserved.
                        <br />
                        Designed by robirurk.
                     </p>
                  </div>
               </Col>
               <Col xs={12} md={{ span: 3, offset: 1 }}>
                  <nav className={cx("contacts")}>
                     <FooterLink
                        href="mailto: hello@pirolltheme.com"
                        className={cx("links-item")}>
                        hello@pirolltheme.com
                     </FooterLink>
                     <FooterLink
                        href="tel: +44987065908"
                        className={cx("links-item")}>
                        +44 987 065908
                     </FooterLink>
                  </nav>
               </Col>
               <Col xs={6} md={2}>
                  <nav className={cx("links")}>
                     <FooterLink href="#" className={cx("links-item")}>
                        Projects
                     </FooterLink>
                     <FooterLink href="/about" className={cx("links-item")}>
                        About
                     </FooterLink>
                     <FooterLink href="#" className={cx("links-item")}>
                        Services
                     </FooterLink>
                     <FooterLink href="#" className={cx("links-item")}>
                        Career
                     </FooterLink>
                  </nav>
               </Col>
               <Col xs={6} md={2}>
                  <nav className={cx("links")}>
                     <FooterLink href="#" className={cx("links-item")}>
                        News
                     </FooterLink>
                     <FooterLink href="#" className={cx("links-item")}>
                        Events
                     </FooterLink>
                     <FooterLink href="/contact" className={cx("links-item")}>
                        Contact
                     </FooterLink>
                     <FooterLink href="#" className={cx("links-item")}>
                        Legals
                     </FooterLink>
                  </nav>
               </Col>
               <Col xs={12} md={2}>
                  <nav className={cx("social-links")}>
                     <FooterLink href="#" className={cx("links-item")}>
                        Facebook
                     </FooterLink>
                     <FooterLink href="#" className={cx("links-item")}>
                        Twitter
                     </FooterLink>
                     <FooterLink href="/contact" className={cx("links-item")}>
                        Instagram
                     </FooterLink>
                     <FooterLink href="#" className={cx("links-item")}>
                        Dribble
                     </FooterLink>
                  </nav>
               </Col>
            </Row>
         </Container>
      </SectionBlock>
   );
};

export default Footer;
