import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SectionSubtitle from "../../components/SectionSubtitle/SectionSubtitle.jsx";
import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import SectionBlock from "../../components/SectionBlock/SectionBlock.jsx";

const Home = () => {
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
                        I am a Graphic & Web Designer based in New York,
                        specializing in User Interface Design and Development.
                     </SectionSubtitle>
                  </Col>
               </Row>
            </Container>
         </SectionBlock>
         <Portfolio />
      </>
   );
};

export default Home;
