import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer text-white text-center py-4 mt-5" style={{ backgroundColor :'#0077B5' }}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <h6 className="me-2">Contact Me : </h6>
            <a
              href="https://www.linkedin.com/in/mutia-sakinah-731b992a6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
              style={{ textDecoration: 'underline' }}
            >
              <FaLinkedin size={18} className="me-2" />
              Mutia Sakinah
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
