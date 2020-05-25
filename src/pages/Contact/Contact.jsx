import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Contact.module.css";
import Button from "../../components/Button/Button.jsx";
import SectionBlock from "../../components/SectionBlock/SectionBlock.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle.jsx";
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export default class Contact extends Component {
   render() {
      return (
         <SectionBlock bgColor="light-gray">
            <Container>
               <Row>
                  <Col xs={12} md={4}>
                     <SectionTitle>Contact Info:</SectionTitle>
                     <SectionSubtitle>
                        To give beginning divide, cattle. Give moving won't, there the abundantly
                        she'd brought air upon. Light hath subdue. Life days creature upon first
                        heaven gathering dry.
                     </SectionSubtitle>
                     <div className={cx("item")}>
                        <span className={cx("item-header")}>Adress:</span>
                        <span className={cx("item-text")}>10111 Santa Monica Boulevard, LA</span>
                     </div>
                     <div className={cx("item")}>
                        <span className={cx("item-header")}>Phone:</span>
                        <span className={cx("item-text")}>+44 987 065908</span>
                     </div>
                     <div className={cx("item")}>
                        <span className={cx("item-header")}>Email:</span>
                        <span className={cx("item-text")}>hello@pirolltheme.com</span>
                     </div>
                     <div className={cx("item")}>
                        <span className={cx("item-header")}>Fax:</span>
                        <span className={cx("item-text")}>+44.987.065908</span>
                     </div>
                  </Col>
                  <Col xs={12} md={{ span: 7, offset: 1 }}>
                     <form className={cx("form")}>
                        <input placeholder="Your Name" className={cx("form-name")}></input>
                        <input placeholder="Your Email" className={cx("form-email")}></input>
                        <input placeholder="Title" className={cx("form-title")}></input>
                        <textarea
                           placeholder="Comment"
                           className={cx("form-comment")}
                           rows={8}></textarea>
                     </form>
                     <Button> Send Message </Button>
                  </Col>
               </Row>
            </Container>
         </SectionBlock>
      );
   }
}
