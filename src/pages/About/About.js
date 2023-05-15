import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "./school-emblem.jpg";
import "./about.css";
import { AiFillSketchCircle} from "react-icons/ai";
import Advisoryboard from "../../Components/AdvisoryBoard/Advisoryboard";
import Message from "../../Components/Message/Message";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Our Vision</h2>
              <p>
              <br></br>
            
              A vision of  school is  to empower students to become lifelong learners who are curious, engaged, and self-directed in their learning. The school  aim to provide a learning environment that fosters a love of learning, promotes intellectual curiosity, and encourages students to take ownership of their learning.
              <br></br>
              <br></br>
              The school could aim to provide opportunities for students to develop their analytical skills, evaluate information, and make informed decisions. The goal could be to equip students with the skills they need to navigate a complex and rapidly changing world.
              <br></br>
              <br></br>
              </p>

             
              </div>
            
          </Col>
          <hr></hr>
        </Row>
        <Row>
            <Col >
            <div >
              <h2 style={{textAlign:"center"}} >THE VALUES WE CHERIS </h2>
              <p>
              A vision of  school is  to empower students to become lifelong learners who are curious, engaged, and self-directed in their learning. The school  aim to provide a learning environment that fosters a love of learning, promotes intellectual curiosity, and encourages students to take ownership of their learning.
              </p>
            </div>
            </Col>
            </Row>
            <Row>
            <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <AiFillSketchCircle/>Learning
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
             <AiFillSketchCircle/>Compassion
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <AiFillSketchCircle/>love
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">

              <AiFillSketchCircle/> Respect
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <AiFillSketchCircle/>Kindness
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <AiFillSketchCircle/>Integrity
            </h2>
          </Col>
         
        </Row>
        </Container>
        <Advisoryboard/>
        <Message />

    </section>
  );
};

export default AboutUs;
