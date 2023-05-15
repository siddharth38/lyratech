import React from "react"; 
import { Container, Row, Col } from "reactstrap";
import { contactConfig } from "./Contactoption"
import './contact.css'

export default function ContactUs() {
  

  return (
      <Container className="cnt">
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              <strong>Website:</strong>{" "}
              <a href={`${contactConfig.WEBSITE}`}
              rel="noopener"
              target="_blank">
                {contactConfig.WEBSITE}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row className="my-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.10117209515!2d78.2439903739888!3d29.132206175395563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b96ff929daa1b%3A0x6f84c5006226847c!2sRajkiya%20Engineering%20College%20Bijnor!5e0!3m2!1sen!2sin!4v1683062790861!5m2!1sen!2sin" width="50" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Row>
      </Container>
  );
}
