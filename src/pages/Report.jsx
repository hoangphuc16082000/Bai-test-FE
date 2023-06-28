import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React, { useState } from "react";

function Report() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  return (
    <div>
      <Header handleToggleMenu={(value) => setIsToggleMenu(value)} />
      <SideBar isToggleMenu={isToggleMenu} />
      <h2 style={{ marginLeft: 250 }}>Report</h2>
    </div>
  );
}

export default Report;
