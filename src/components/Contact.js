import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import GitHubIcon from "../assets/img/ICONS/github-01.svg";
import LinkedInIcon from "../assets/img/ICONS/linkedin-01.svg"
import WhatsAppIcon from "../assets/img/ICONS/whatsapp-01.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Contact = () => {
  useEffect(() => {
    AOS.init();
    }, [])

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col>
                <h2 data-aos="fade-in" data-aos-easing="linear"  data-aos-duration="1500">Find Me Here</h2>
                <ul id="list-icon">
                  <li><a href="https://github.com/shaniaakhan21"><img data-aos="fade-left" data-aos-anchor-placement="top-center"  data-aos-duration="1000" src={GitHubIcon}></img></a></li>
                  <li><a href="https://www.linkedin.com/in/codewithshaniya/"><img data-aos="fade-up" data-aos-anchor-placement="top-center"  data-aos-duration="1000" src={LinkedInIcon}></img></a></li>
                  <li><a href="https://wa.me/9710567445877"><img data-aos="fade-right" data-aos-anchor-placement="top-center"  data-aos-duration="1000" src={WhatsAppIcon}></img></a></li>
                </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}