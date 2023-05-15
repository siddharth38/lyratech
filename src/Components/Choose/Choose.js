import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {AiFillPlayCircle } from "react-icons/ai";

import chooseImg from "./chooseus.jpg";
import "./choose.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row className="my-3 py-5 ">
          <Col lg="6" md="6" className="my-3 py-2 ">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
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

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=stv4wJaFLwM&ab_channel=TheInfinitySchool"
                  controls
                  width="90%"
                  height="300px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
            
              )}

              {!showVideo && (
                <span className="play__icon ">
                 <svg className="button  play__icon1" viewBox="0 0 60 60" onClick={() => setShowVideo(!showVideo)}>
        <polygon points="0,0,40 ,30 0,60" />
      </svg>
                {/* <AiFillPlayCircle   > */}
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
