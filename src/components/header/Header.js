import { Container, Col, Row } from "reactstrap";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

import logoImg from "../../assets/images/logo.png";
import { links } from "../../assets/data/Data";
import { IoMdMenu } from "react-icons/io";

import "./Header.css";
function Header() {
  const [scroll, setScroll] = useState(false);
  const [click, setClick] = useState(false);
  function scrollHeader() {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);
  return (
    <header className={scroll ? "active" : ""}>
      <Container>
        <Row>
          <div className="d-flex align-items-center justify-content-between">
            <Col lg="6">
              <div className="logo">
                <Link to="home">
                  <img src={logoImg} alt="no-img"></img>
                </Link>
              </div>
            </Col>
            <Col lg="6">
              <ul className="links">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        key={index}
                        to={link.path}
                        spy={true}
                        hashSpy={true}
                        offset={-60}
                        duration={500}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="sub-menu">
                <IoMdMenu onClick={() => setClick(!click)} />
                <ul className={click ? "sub-links active" : "sub-links"}>
                  {links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          key={index}
                          to={link.path}
                          spy={true}
                          hashSpy={true}
                          offset={-60}
                          duration={500}
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
