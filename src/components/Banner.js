import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/earth.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Chief Operating Officer","Web Developer", "Full Stack Developer", "Django Developer" , "WordPress Developer","Flutter Developer"];
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  useEffect(() => {
    AOS.init();
    }, [])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline" data-aos="fade-in">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Shaniya Khan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Chief Operating Officer", "Web Developer", "Full Stack Developer", "Django Developer" , "WordPress Developer","Flutter Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Blend of Technical & Management Skills with experience in both fields.As a full-stack web developer with over 1 year of professional experience, I possess a unique set of technical and management skills that make me a valuable asset to any team.
                  I am confident that my technical skills and management experience make me a great fit for any organization looking for a developer who can not only code but also lead and manage a team.
                  </p>
                  <a href="#connect"><button  data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine">Let’s Connect <ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}