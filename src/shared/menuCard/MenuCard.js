import "./MenuCard.css";
function MenuCard({ menu }) {
  return (
    <div className="menu-card">
      <img src={menu.img} alt=""></img>
      <div className="menu-data">
        <div className="menu-text">
          <h3 className="menu-title">{menu.title}</h3>
          <p className="menu-description">{menu.description}</p>
        </div>
        <div className="menu-price">{menu.price}</div>
      </div>
    </div>
  );
}

export default MenuCard;
