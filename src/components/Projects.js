import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/real-estate-01.svg";
import projImg2 from "../assets/img/twitter-01.svg";
import projImg3 from "../assets/img/pp-01.svg";
import projImg4 from "../assets/img/movie-01.svg";
import projImg5 from "../assets/img/ergo-01.svg";
import projImg6 from "../assets/img/bulk-01.svg";
import projImg7 from "../assets/img/tesla-01.svg";
import projImg8 from "../assets/img/portfolio.svg";
import DjangoIcon from "../assets/img/ICONS/django.svg";
import HTMLIcon from "../assets/img/ICONS/html.svg";
import CSSIcon from "../assets/img/ICONS/css.svg";
import JavaScriptIcon from "../assets/img/ICONS/javascript.svg";
import PythonIcon from "../assets/img/ICONS/python.svg";
import BootstrapIcon from "../assets/img/ICONS/bootstrap.svg";
import MySQLIcon from "../assets/img/ICONS/mysql.svg";
import ReactIcon from "../assets/img/ICONS/react.svg";
import NodejsIcon from "../assets/img/ICONS/node-js.svg";
import WordpressIcon from "../assets/img/ICONS/wordpress.svg";
import ElementorIcon from "../assets/img/ICONS/elementor.svg";
import PhpIcon from "../assets/img/ICONS/php.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Real Estate Website",
      description: "Design & Development",
      imgUrl: projImg1,
      heading01: "Technologies Used",
      LogoIcon1: DjangoIcon,
      LogoIcon2: HTMLIcon,
      LogoIcon3: CSSIcon,
      LogoIcon4: JavaScriptIcon,
      LogoIcon5: PythonIcon,
      LogoIcon6: MySQLIcon,
      LogoIcon7: BootstrapIcon,
      LINK2SITE:"https://web-production-3130.up.railway.app/" ,
      LINK2CODE: "https://github.com/shaniaakhan21/real-estate-website",
      BTNTWO:"Looking for Code?",
      BTNONE:"Looking for Site?",
    },
    {
      title: "The Twitter Clone",
      description: "Design & Development",
      imgUrl: projImg2,
      heading01: "Technologies Used",
      LogoIcon1: DjangoIcon,
      LogoIcon2: HTMLIcon,
      LogoIcon3: CSSIcon,
      LogoIcon4: JavaScriptIcon,
      LogoIcon5: PythonIcon,
      LogoIcon6: MySQLIcon,
      LogoIcon7: BootstrapIcon,
      LINK2SITE:"http://shaniyakhan.pythonanywhere.com/" ,
      LINK2CODE: "https://github.com/shaniaakhan21/Tweet-django-clone",
      BTNTWO:"Looking for Code?",
      BTNONE:"Looking for Site?",

    },

    {
      title: "Proficient Programmer",
      description: "Design & Development",
      imgUrl: projImg3,
      heading01: "Technologies Used",
      LogoIcon1: DjangoIcon,
      LogoIcon2: HTMLIcon,
      LogoIcon3: CSSIcon,
      LogoIcon4: JavaScriptIcon,
      LogoIcon5: PythonIcon,
      LogoIcon6: MySQLIcon,
      LogoIcon7: BootstrapIcon,
      LINK2SITE:"https://web-production-a6c0.up.railway.app/" ,
      LINK2CODE: "https://github.com/shaniaakhan21/clone-proficientprogrammer",
      BTNTWO:"Looking for Code?",
      BTNONE:"Looking for Site?",
    },

    {
      title: "Movie Web App",
      description: "Design & Development",
      imgUrl: projImg4,
      heading01: "Technologies Used",
      LogoIcon1: DjangoIcon,
      LogoIcon2: HTMLIcon,
      LogoIcon3: CSSIcon,
      LogoIcon4: JavaScriptIcon,
      LogoIcon5: PythonIcon,
      LogoIcon6: MySQLIcon,
      LogoIcon7: BootstrapIcon,
      LINK2SITE:"https://movieapp-production-ef3b.up.railway.app/" ,
      LINK2CODE: "https://github.com/shaniaakhan21/MovieApp",
      BTNTWO:"Looking for Code?",
      BTNONE:"Looking for Site?",

    },

  ];

  
  const projects2 = [
    {
      title: "Ergogenic Nutrition",
      description: "Design & Development",
      imgUrl: projImg5,
      heading01: "Technologies Used",
      LogoIcon1: WordpressIcon,
      LogoIcon2: PhpIcon,
      LogoIcon3: ElementorIcon,
      LINK2SITE:"https://ergogenicnutrition.in/" ,
      BTNTWO:"Looking for Code?",
      BTNONE:"Looking for Site?",
    },

    {
      title: "The Bulk Nutrition",
      description: "Design & Development",
      imgUrl: projImg6,
      heading01: "Technologies Used",
      LogoIcon1: WordpressIcon,
      LogoIcon2: PhpIcon,
      LogoIcon3: ElementorIcon,
      LINK2SITE:"https://thebulknutrition.com/" ,
      BTNTWO:"Looking for Code?",
      BTNONE:"Looking for Site?",
    },
  ];

    const projects3 = [
      {
        title: "The Tesla Clone",
        description: "Design & Development",
        imgUrl: projImg7,
        heading01: "Technologies Used",
        LogoIcon1: ReactIcon,
        LogoIcon2: HTMLIcon,
        LogoIcon3: CSSIcon,
        LogoIcon4: JavaScriptIcon,
        LogoIcon5: NodejsIcon,
        LogoIcon6: MySQLIcon,
        LogoIcon7: BootstrapIcon,
        LINK2SITE:"https://shaniaakhan21.github.io/TeslaClone/" ,
        LINK2CODE: "https://github.com/shaniaakhan21/TeslaClone",
        BTNTWO:"Looking for Code?",
        BTNONE:"Looking for Site?",
        
      },
      {
        title: "My Portfolio",
        description: "Design & Development",
        imgUrl: projImg8,
        heading01: "Technologies Used",
        LogoIcon1: ReactIcon,
        LogoIcon2: HTMLIcon,
        LogoIcon3: CSSIcon,
        LogoIcon4: JavaScriptIcon,
        LogoIcon5: NodejsIcon,
        LogoIcon6: MySQLIcon,
        LogoIcon7: BootstrapIcon,
        LINK2SITE:"https://shaniaakhan21.github.io/ShaniyaPortfolio/" ,
        LINK2CODE: "https://github.com/shaniaakhan21/ShaniyaPortfolio",
        BTNTWO:"Looking for Code?",
        BTNONE:"Looking for Site?",
  
      },
  


  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Some Things I’ve Built</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Django Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">WordPress Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">ReactJs & NodeJs</Nav.Link>
                    </Nav.Item>

                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}