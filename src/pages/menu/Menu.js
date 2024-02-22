import { Container, Col, Row } from "reactstrap";

import { useEffect, useState } from "react";

import SubTitle from "../../shared/subTitle/SubTitle";
import MenuCard from "../../shared/menuCard/MenuCard";
import Choose from "../../components/choose/Choose";
import Stat from "../../components/stat/Stat";

import "./Menu.css";
function Menu() {
  const [menus, setMenus] = useState([]);
  async function fetchData() {
    try {
      const res = await fetch("https://resonant-pasca-0871ef/api/v1/menu.netlify.app");
      const result = await res.json();
      setMenus(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
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
              <Col lg="6" key={menu.id} >
                <MenuCard menu={menu} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Choose />
      <Stat />
    </>
  );
}

export default Menu;
