import Header from "../components/Header";
import SideBar from "../components/SideBar/index";
import React, { useState } from "react";

function Stock() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  return (
    <div>
      <Header handleToggleMenu={(value) => setIsToggleMenu(value)} />
      <SideBar isToggleMenu={isToggleMenu} />
      <h2 style={{ marginLeft: 250 }}>Stock Adjustment</h2>
    </div>
  );
}

export default Stock;
