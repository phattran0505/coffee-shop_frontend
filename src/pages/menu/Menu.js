import { Container, Col, Row } from "reactstrap";

import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import SubTitle from "../../shared/subTitle/SubTitle";
import MenuCard from "../../shared/menuCard/MenuCard";

import "./Menu.css";
function Menu() {
  const { menus } = useContext(ProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="menu-section" id="menu">
        <Container>
          <Row>
            <Col lg="12">
              <div className="sub">
                <SubTitle subtitle={"Our Menu"} />
                <h2>Let's Check Our Menu</h2>
              </div>
            </Col>
            {menus.map((menu) => (
              <Col lg="6" key={menu._id}>
                <MenuCard menu={menu} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Menu;
