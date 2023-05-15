import React from 'react';
import { Container, Row, Col } from "reactstrap";
import './admission.css'
import { Link } from 'react-router-dom';
import Feestructure from '../../Components/Feesstructure/Feestructure';

const Admission = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
      }
      
    return <div>
  <Container>
        <Row className="my-3 py-2">
          <Col  className="my-3 py-2 ">
            <div className="choose__content">
              <h2 className='text-center'>ADMISSION PROCESS </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div>
          </Col>
          </Row>
          <Row>
          <Col  className="my-2 py-2   ">
          <div class="progressbar-wrapper ">
      <ul class="progressbar text-center">
          <li class="active">Apply Online</li>
          <li> Visit School</li>
          <li> Test</li>
          <li>  Done</li>
      </ul>
</div>
</Col>
          </Row>

          </Container>


 <Feestructure/>
 <hr/>
         
<div className='text-center'>
<Link to="/apply"  onClick={scrollToTop}   >
<button type="button" className="btn btn-primary " >Apply Online</button>
</Link>
</div>
<hr/>



    </div>;
}


export default Admission;