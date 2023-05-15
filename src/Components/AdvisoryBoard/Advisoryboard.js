import React from 'react';
import { Container, Row, Col } from "reactstrap";
import aboutImg from './customer-advisory-board.jpg'
const Advisoryboard = () => {
    return <div >

<Container >
<br/>

        <Row>
         
          <Col lg="6" md="6" >
            <div className="about__content">
              <h2>AdvisoryBoard</h2>
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
          <Col lg="6" md="6" >
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
          <hr></hr>
        </Row>
        </Container>
    </div>;
}


export default Advisoryboard;