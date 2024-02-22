import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom"

import "./Home.css";
function Home() {
  return (
    <>
      <section className="home-section" id="home">
        <Container>
          <Row>
            <Col lg="6">
              <div className="introduce">
                <div className="home-content">
                    <h2>welcome to coffee!</h2>
                    <h1>
                      discover amazing coffee <br></br> house & get energy
                    </h1>
                    <p>
                      There are many variations of passengers available but the
                      majority have suffered alteration in some form by injected
                      humor or randomised words
                    </p>
                </div>
                <div className="buttons">
                    <button className="btn btn_active"><Link to="#menu">Check Menu</Link></button>
                    <button className="btn "><Link to="#book">Book Table</Link></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
