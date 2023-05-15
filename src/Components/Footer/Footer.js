import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FaFacebookF , FaTwitter ,FaLinkedin ,FaInstagram} from "react-icons/fa";

import "./footer.css";
import { Link } from "react-router-dom";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About US",
    url: "/about",
  },


  {
    display: "Apply Online ",
    url: "/apply",
  },
  {
    display: "Fee structure ",
    url: "/admission",
  }
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

 

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  
  return (
    <footer className="footer">
      <Container className="py-5 mx-5">
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> School
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://www.facebook.com"  rel="noopener"
              target="_blank">
                <FaFacebookF/>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://twitter.com"  rel="noopener"
              target="_blank">
               <FaTwitter/>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://linkedin.com"  rel="noopener"
              target="_blank">
              <FaLinkedin/>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://instagram.com"  rel="noopener"
              target="_blank">
                <FaInstagram/>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                    
                  <Link to={item.url}  onClick={scrollToTop} >{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: New Delhi, India</p>
            <p> Phone: +919935221471</p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
