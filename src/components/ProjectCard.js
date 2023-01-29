import { Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export const ProjectCard = ({ title, description, imgUrl, heading01, LogoIcon1 , LogoIcon2 , LogoIcon3 ,LogoIcon4, LogoIcon5 , LogoIcon6 ,LogoIcon7, LogoIcon8, LINK2SITE, LINK2CODE, BTNONE, BTNTWO }) => {
  
  useEffect(() => {
    AOS.init();
    }, [])

  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx" data-aos="flip-left" data-aos-easing="linear"  data-aos-duration="1500">
        <img src={imgUrl} alt="card" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <h6>{ heading01}</h6>
          <ul id="list-icon">
            <li><img src={LogoIcon1}></img></li>
            <li><img src={LogoIcon2}></img></li>
            <li><img src={LogoIcon3}></img></li>
            <li><img src={LogoIcon4}></img></li>
            <li><img src={LogoIcon5}></img></li>
            <li><img src={LogoIcon6}></img></li>
            <li><img src={LogoIcon7}></img></li>
            <li><img src={LogoIcon8}></img></li>
          </ul>
          <button  id="btn-design-1"><a href={LINK2SITE}>{ BTNONE }</a></button>
          <button  id="btn-design"><a href={LINK2CODE}>{ BTNTWO }</a></button>
        </div>
      </div>
    </Col>
  )
}
