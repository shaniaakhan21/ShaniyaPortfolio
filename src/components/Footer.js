import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/ICONS/whatsapp-01.svg";
import navIcon2 from "../assets/img/ICONS/github-01.svg";
import navIcon3 from "../assets/img/ICONS/linkedin-01.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://wa.me/9710567445877"> <img id="icon" src={navIcon1} alt="Icon"/></a>
              <a href="https://github.com/shaniaakhan21"> <img id="icon" src={navIcon2} alt="Icon"/></a>
              <a href="https://www.linkedin.com/in/codewithshaniya/"><img id="icon" src={navIcon3} alt="Icon"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <h6><b>Email: </b>shaniaakhan21@gmail.com</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}