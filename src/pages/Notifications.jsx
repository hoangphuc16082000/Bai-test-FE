import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React, { useState } from "react";

function Notifications() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  return (
    <div>
      <Header handleToggleMenu={(value) => setIsToggleMenu(value)} />
      <SideBar isToggleMenu={isToggleMenu} />
      <h2 style={{ marginLeft: 250 }}>Notifications</h2>
    </div>
  );
}

export default Notifications;
