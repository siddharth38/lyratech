import React from 'react';
import Cards from '../../Components/Cards/Cards';
import { Container, Row, Col } from "reactstrap";
import './home.css'
import ChooseUs from '../../Components/Choose/Choose';
import Images from '../../Components/Images/Images';


const Home = () => {

 
  return <div>
<Images />

<hr/>
<ChooseUs/>

    <hr/>
<section>
      <Container>
<Row>
            <Col  className='  section'>
            <div className='mx-5 px-5  my-3 py-5 section' >
              <h2 style={{textAlign:"center"}}  className='  section'>About School</h2>
              <p className='  section' >
              schools have classrooms for core academic subjects such as English, math, science, and social studies. These classrooms may be equipped with desks, chairs, whiteboards, and projectors.

Specialty rooms: Many intermediate schools have specialty rooms for classes such as art, music, and physical education. These rooms may be equipped with instruments, art supplies, gym equipment, and more.

Technology: Most intermediate schools have computer labs, and many classrooms may have technology such as laptops or tablets for student use. The school may also have Wi-Fi access and other technology resources.

Library: An intermediate school will usually have a library or media center where students can check out books, use computers, and work on</p>
            </div>
            </Col>
        </Row>
      
      </Container>
      <hr />
    </section>
   
    <Cards />

  </div>;
}



export default Home;