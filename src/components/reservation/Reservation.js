import { Container, Col, Row, Form } from "reactstrap";
import { CiBookmark } from "react-icons/ci";

import SubTitle from "../../shared/subTitle/SubTitle";
import shape02 from '../../assets/images/shape-2.png'
import shape03 from '../../assets/images/shape-3.png'

import "./Reservation.css";
function Reservation() {
  return (
    <section className="reservation-section">
      <Container>
        <Row>
          <Col lg="12">
            <div className="form">
                <img src={shape02} alt="" className="shape-2"></img>
                <img src={shape03} alt="" className="shape-3"></img>
              <div className="sub">
                <SubTitle subtitle={"Reservation"} />
                <h2>Book A Table</h2>
              </div>
              <Form>
                <div className="input-box">
                  <input type="text" placeholder="Your Name"></input>
                  <input type="email" placeholder="Email Address"></input>
                  <input type="number" min="0" placeholder="Your Phone"></input>
                </div>
                <div className="input-box">
                  <input type="date" placeholder="Date"></input>
                  <input type="text" placeholder="Time"></input>
                  <input
                    type="number"
                    min="0"
                    placeholder="Number Of People"
                  ></input>
                </div>
                <div className="input-box">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <div className="book-btn">
                  <button type="submit" className="btn btn_active">
                    <CiBookmark />
                    Book A Table
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Reservation;
