import { Container, Row } from "reactstrap";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import {
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import LogoImg from "../../assets/images/logo.png";
import FooterText from "../../components/footerText/FooterText";

import "./Footer.css";
function Footer() {
  return (
    <>
      <section className="footer-section" id="footer">
        <Container>
          <Row>
            <div className="footer-container">
              <div className="left">
                <img className="footer-logo" src={LogoImg} alt=""></img>
                <p className="footer-description">
                  We are many variations of passengers available but the
                  majority have suffered alteration in some form by injected
                  humor or randomised words which don't look even slightly
                  believable.
                </p>
                <div className="footer-info">
                  <li>
                    <AiOutlinePhone />
                    <span>+0 123 456 789</span>
                  </li>
                  <li>
                    <FiMapPin />
                    <span>25/B Milford Road, New York</span>
                  </li>
                  <li>
                    <CiMail />
                    <span>example@gmail.com</span>
                  </li>
                </div>
              </div>

              <div className="center">
                <div className="quick-link">
                  <h3>Quick Links</h3>
                  <div className="footer-links">
                    <li>
                      <FaCaretRight
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "5px",
                        }}
                      />
                      <span>About Us</span>
                    </li>
                    <li>
                      <FaCaretRight
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "5px",
                        }}
                      />
                      <span>Menu</span>
                    </li>
                    <li>
                      <FaCaretRight
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "5px",
                        }}
                      />
                      <span>Features</span>
                    </li>
                    <li>
                      <FaCaretRight
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "5px",
                        }}
                      />
                      <span>Gallery</span>
                    </li>
                    <li>
                      <FaCaretRight
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "5px",
                        }}
                      />
                      <span>Team</span>
                    </li>
                    <li>
                      <FaCaretRight
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "5px",
                        }}
                      />
                      <span>Reservation</span>
                    </li>
                  </div>
                </div>
                <div className="opening-hours">
                  <h3>Opening Hours</h3>
                  <div className="schedule">
                    <li>
                      <p className="day">Monday:</p>
                      <p className="time">9AM - 6PM</p>
                    </li>
                    <li>
                      <p className="day">Tuesday:</p>
                      <p className="time">9AM - 6PM</p>
                    </li>
                    <li>
                      <p className="day">Wednesday:</p>
                      <p className="time">9AM - 6PM</p>
                    </li>
                    <li>
                      <p className="day">Thursday:</p>
                      <p className="time">9AM - 6PM</p>
                    </li>
                    <li>
                      <p className="day">Friday:</p>
                      <p className="time">9AM - 6PM</p>
                    </li>
                    <li>
                      <p className="day">Saturday:</p>
                      <p className="time">9AM - 6PM</p>
                    </li>
                    <li>
                      <p className="day">Sunday:</p>
                      <p className="time">Closed</p>
                    </li>
                  </div>
                </div>
              </div>

              <div className="newsletter">
                <h3>NewsLetter</h3>
                <div className="newsletter-content">
                  <p>subcrise our newsletter to get latest update and news</p>
                  <input placeholder="Your Email"></input>
                  <button className="btn btn_active ">
                    <CiMail style={{ marginRight: "5px" }} />
                    Subcrise Now
                  </button>
                  <p className="follow">Follow Us</p>
                  <ul>
                    <a href="/">
                      <FaFacebookF style={{ color: "var(--title-color" }} />
                    </a>
                    <a href="/">
                      <FaTwitter style={{ color: "var(--title-color" }} />
                    </a>
                    <a href="/">
                      <FaLinkedinIn style={{ color: "var(--title-color" }} />
                    </a>
                    <a href="/">
                      <FaYoutube style={{ color: "var(--title-color" }} />
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <FooterText />
    </>
  );
}

export default Footer;
