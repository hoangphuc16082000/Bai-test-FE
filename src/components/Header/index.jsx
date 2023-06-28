import React, { useState } from "react";

function Header({ handleToggleMenu }) {
  const [show, setShow] = useState(false);
  const [modalUser, setModalUser] = useState(false);

  const handleModalUser = () => {
    setModalUser(!modalUser);
  };
  return (
    <div className="header-container">
      <div className="toggle_menu">
        <div
          onClick={() => {
            setShow(!show);
            handleToggleMenu(!show);
          }}
        >
          <i
            className="fa-solid fa-bars"
            style={{
              color: "rgba(14, 36, 182, 0.83)",
              fontSize: 17,
              margin: 4,
            }}
          />
        </div>

        <h2 className="logo">SISOSIT MANAGEMENT SYSTEM</h2>
      </div>
      {/*  */}

      <div className="avatar" onClick={handleModalUser}>
        <div className="ava">
          <img
            src="https://e1.pngegg.com/pngimages/537/559/png-clipart-personne-avatar-utilisateur-symbole-profil-utilisateur-visage-noir-blanc.png"
            className="img"
          />
          <p style={{ margin: "5px 14px 3px 13px", fontSize: 15 }}>
            haunt@ctnpsolutions.com
          </p>
          <i
            className="fa-solid fa-caret-down"
            style={{ fontSize: 13, marginTop: 8, marginRight: 40 }}
          />
        </div>
        <p
          style={{
            marginLeft: 135,
            color: "#a1a1a1",
            marginTop: "-5px",
            fontSize: 14,
          }}
        >
          LPD Division
        </p>
        {modalUser ? (
          <div className="modalUser">
            <p
              className="showUser"
              style={{
                borderBottom: "solid",
                borderColor: "#edeaea",
              }}
            >
              Change Password
            </p>
            <p
              className="showUser"
              style={{
                borderBottom: "solid",
                borderColor: "#edeaea",
              }}
            >
              Log Out
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
