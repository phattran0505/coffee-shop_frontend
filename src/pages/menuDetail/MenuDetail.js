import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";

import { BASE_URL } from "../../utils/config";

import "./MenuDetail.css";
function MenuDetail() {
  const { id } = useParams();
  const [detail, setDetails] = useState([]);
  const [size, setSize] = useState("S");
  const [topping, setTopping] = useState("esspresso");
  const sizeOptions = [
    {
      size: "S",
    },
    {
      size: "M",
    },
    {
      size: "L",
    },
  ];
  const toppingOptions = [
    { topping: "esspresso", name: "shot esspresso" },
    { topping: "caramel", name: "sốt caramel" },
  ];
  const fetchData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/menu/${id}`);
      const result = await res.json();
      setDetails(result.data);
      console.log(result.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="menu-detail">
      <Container>
        <Row>
          <Col lg="6">
            <div className="detail-left">
              <img src={detail.img} alt=""></img>
            </div>
          </Col>
          <Col lg="6">
            <div className="detail-content">
              <h1>{detail.title}</h1>
              <h2>$ {detail.price}</h2>
              <div className="size-topping">
                <p>Size:</p>
                <ul className="options">
                  {sizeOptions.map((option, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setSize(option.size)}
                        className={size === option.size ? "active" : ""}
                      >
                        {option.size}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="size-topping">
                <p>Topping: </p>
                <ul className="options">
                  {toppingOptions.map((option, index) => (
                    <>
                      <li
                        key={index}
                        onClick={() => setTopping(option.topping)}
                        className={topping === option.topping ? "active" : ""}
                      >
                        {option.name}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <button className="order-btn">Order</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MenuDetail;
