import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import navIcon1 from "../assets/img/ICONS/whatsapp-01.svg";
import navIcon2 from "../assets/img/ICONS/github-01.svg";
import navIcon3 from "../assets/img/ICONS/linkedin-01.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    // To keep track of scrolling of the site by user we created scrolled class
    const [scrolled, seScrolled] = useState(false);

    useEffect( () => {
        const onScroll = () => {    
            if (window.scrollY > 50 ) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

     return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://wa.me/9710567445877"> <img src={navIcon1} alt="Icon"/></a>
                            <a href="https://github.com/shaniaakhan21"> <img src={navIcon2} alt="Icon"/></a>
                            <a href="https://www.linkedin.com/in/codewithshaniya/"><img src={navIcon3} alt="Icon"/></a>
                        </div>
                        <a href="#connect"><button><span>Let's Connect</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     )
}