import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Contact.module.css";
import Button from "../../components/Button/Button.jsx";
import SectionBlock from "../../components/SectionBlock/SectionBlock.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle.jsx";
import Input from "../../components/Input/Input";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Contact = () => {
   return (
      <SectionBlock bgColor="light-gray">
         <Container>
            <Row>
               <Col xs={12} md={4}>
                  <SectionTitle>Contact Info:</SectionTitle>
                  <SectionSubtitle>
                     To give beginning divide, cattle. Give moving won't, there
                     the abundantly she'd brought air upon. Light hath subdue.
                     Life days creature upon first heaven gathering dry.
                  </SectionSubtitle>
                  <div className={cx("item")}>
                     <span className={cx("item-header")}>Adress:</span>
                     <span className={cx("item-text")}>
                        10111 Santa Monica Boulevard, LA
                     </span>
                  </div>
                  <div className={cx("item")}>
                     <span className={cx("item-header")}>Phone:</span>
                     <a className={cx("item-text")} href="tel:+44987065908">
                        +44 987 065908
                     </a>
                  </div>
                  <div className={cx("item")}>
                     <span className={cx("item-header")}>Email:</span>
                     <a
                        className={cx("item-text")}
                        href="mailto:+44 987 065908">
                        hello@pirolltheme.com
                     </a>
                  </div>
                  <div className={cx("item")}>
                     <span className={cx("item-header")}>Fax:</span>
                     <a className={cx("item-text")} href="fax:+44987065908">
                        +44.987.065908
                     </a>
                  </div>
               </Col>
               <Col xs={12} md={{ span: 7, offset: 1 }}>
                  <form className={cx("form")}>
                     <Input
                        className={cx("input", "input-name")}
                        placeholder="Your Name"
                        id="input-name"
                     />
                     <Input
                        placeholder="Your Email"
                        className={cx("input", "input-email")}
                        id="input-email"
                     />
                     <Input
                        placeholder="Title"
                        className={cx("input", "input-title")}
                        id="input-title"
                     />
                     <Input
                        textarea
                        placeholder="Comment"
                        className={cx("input", "input-comment")}
                        rows={8}
                        id="input-comment"
                     />
                     <Button className={cx("contact-button")} type="submit">
                        {" "}
                        Send Message{" "}
                     </Button>
                  </form>
               </Col>
            </Row>
         </Container>
      </SectionBlock>
   );
};

export default Contact;
