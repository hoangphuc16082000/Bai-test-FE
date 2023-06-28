import "./style.css";
import React, { useState } from "react";
import Calendar from "../calendar/calendar";

import { Cards } from "../models/cards";
import FormList from "./FormList";
import SideBar from "./SideBar";
import Header from "./Header/index";

function Page() {
  const [isActive, setIsActive] = useState(0);
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const handleOnClick = (id) => {
    setIsActive(id);
  };

  return (
    <>
      <Header handleToggleMenu={(value) => setIsToggleMenu(value)} />

      <div>
        <SideBar isToggleMenu={isToggleMenu} />
        <div className="content">
          <div className="header">
            <h2 style={{ fontSize: 20 }}>ETL MONTHLY PROCESS - CPD DIVISION</h2>
            <div className="calendar">
              <p
                style={{
                  marginRight: 12,
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: "-25px",
                  marginTop: "10px",
                }}
              >
                Month
              </p>
              <div style={{ marginTop: -10 }}>
                <Calendar />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", paddingLeft: 28 }}>
            {Cards &&
              Cards[0]?.id &&
              Cards.map((item, index, arr) => (
                <div key={item?.id} style={{ display: "flex" }}>
                  <div
                    className={`item${item.id === isActive ? " active" : ""}`}
                    onClick={() => handleOnClick(item.id)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2 style={{ fontSize: 17, fontWeight: 500 }}>
                        {item.title}
                      </h2>
                      <div style={{ width: 25, height: 25 }}>
                        <div className="abc">{item.id}</div>
                        <div className="ab" />
                      </div>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <p>{item.last}</p>
                      <p style={{ color: "#a1a1a1" }}>{item.know}</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ marginTop: 10 }}>
                        <p>{item.success}</p>
                        <p style={{ color: "#a1a1a1", fontWeight: "bold" }}>
                          {item.kpi}/{item.kpi1}
                        </p>
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <p>{item.failed}</p>
                        <p
                          style={{
                            color: "#a1a1a1",
                            fontWeight: "bold",
                            marginLeft: 48,
                          }}
                        >
                          {item.kpi}/{item.kpi1}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ marginTop: 10 }}>
                        <p>{item.running}</p>
                        <p style={{ color: "#a1a1a1", fontWeight: "bold" }}>
                          {item.kpi}/{item.kpi1}
                        </p>
                      </div>
                      <div style={{ marginTop: 10 }}>
                        <p>{item.queued}</p>
                        <p
                          style={{
                            color: "#a1a1a1",
                            fontWeight: "bold",
                            marginLeft: 58,
                          }}
                        >
                          {item.kpi}/{item.kpi1}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index !== arr.length - 1 && (
                    <div className="size-color"></div>
                  )}
                </div>
              ))}
          </div>

          <FormList />
        </div>
      </div>
    </>
  );
}

export default Page;
