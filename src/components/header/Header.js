import { Container, Col, Row } from "reactstrap";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { FaShoppingBag } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { links } from "../../assets/data/Data";
import logoImg from "../../assets/images/logo.png";

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
            <Col lg="4">
              <div className="logo">
                <Link to="home">
                  <img src={logoImg} alt="no-img"></img>
                </Link>
              </div>
            </Col>
            <Col lg="4">
              <ul className="links">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        key={index}
                        to={link.path}
                        spy={true}
                        hashSpy={true}
                        offset={-60}
                        duration={500}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col lg="4">
              <div className="header-right">
                <div className="sub-menu">
                  <IoMdMenu onClick={() => setClick(!click)} />
                  <ul className={click ? "sub-links active" : "sub-links"}>
                    <span onClick={() => setClick(false)}>
                      <IoClose />
                    </span>
                    {links.map((link, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            key={index}
                            to={link.path}
                            spy={true}
                            hashSpy={true}
                            offset={-60}
                            duration={500}
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="icon-container">
                  <FaShoppingBag
                    style={{
                      color: "var(--title-color)",
                      fontSize: "var(--larger-font-size)",
                      cursor: "pointer",
                    }}
                  />
                  <span>0</span>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
