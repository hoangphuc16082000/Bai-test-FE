import React, { useState } from "react";
import Modal from "../../modals/Modal";
import useModal from "../../modals/useModal";
import "./index.css";
import { Lists } from "../../models/lists";
import { Collapse } from "react-collapse";

function FormList() {
  const [modal, setModal] = useState(false);

  const [visible, setVisible] = useState(null);

  const handleCheck = (index) => {
    if (index === visible) {
      setVisible(null);
    } else {
      setVisible(index);
    }
  };

  const handleOnModal = () => {
    setModal(!modal);
  };

  const { isShowing, toggle } = useModal();

  return (
    <div className="form-list">
      <div className="list">
        <h2 style={{ paddingLeft: 20 }}>SAP Data</h2>
        <div style={{ display: "flex", marginRight: 14, marginTop: "-6px" }}>
          <button className="button-default" onClick={toggle}>
            Upload Files
          </button>
          <Modal isShowing={isShowing} hide={toggle} />
          <input
            type="text"
            placeholder="Search by File Name, Status"
            className="nosubmit"
          />

          <div onClick={handleOnModal}>
            <i
              className="fa-solid fa-ellipsis-vertical"
              style={{ fontSize: 24, marginTop: 4 }}
            />
            {modal ? (
              <div className="modalList">
                <p
                  className="showModal"
                  style={{
                    borderBottom: "solid",
                    borderColor: "#edeaea",
                  }}
                >
                  Show All
                </p>
                <p
                  className="showModal"
                  style={{
                    borderBottom: "solid",
                    borderColor: "#edeaea",
                  }}
                >
                  Show Name
                </p>
                <p className="showModal">Show start time</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: 24,
          borderBottom: "solid #edeaea",
          fontWeight: "bold",
          paddingTop: 18,
          paddingBottom: 18,
          borderWidth: 2,
        }}
      >
        <p>File Name / Step</p>
        <div style={{ display: "flex", marginLeft: 400 }}>
          <p>Start Time</p>
          <i className="fa-solid fa-down-long" style={{ marginLeft: 7 }} />
        </div>
        <p style={{ marginLeft: 88 }}>Finish Time</p>
        <p style={{ marginLeft: 50 }}># Processes</p>
        <p style={{ marginLeft: 50 }}>Status</p>
      </div>

      {Lists &&
        Lists.map((item, index) => (
          <div key={item?.id}>
            <div
              style={{
                display: "flex",
                padding: 24,
                borderBottom: "solid #edeaea",
                fontWeight: "bold",
              }}
            >
              <div
                style={{ display: "flex", marginLeft: 16 }}
                onClick={() => handleCheck(index)}
              >
                <i
                  className={item.icon}
                  style={{ fontSize: 11, marginTop: 1 }}
                />
                <p style={{ marginLeft: 8, width: 200 }}>{item.name}</p>
              </div>
              <p style={{ marginLeft: 590 }}>{item.num}</p>
              <div style={{ display: "flex", marginLeft: 200 }}>
                <i
                  className="fa-solid fa-up-long"
                  style={{
                    fontSize: 10,
                    marginTop: 3,
                    marginRight: 3,
                    borderBottom: "solid rgba(14, 36, 182, 0.83)",
                    color: "rgba(14, 36, 182, 0.83)",
                  }}
                />
                <p
                  style={{
                    borderBottom: "solid rgba(14, 36, 182, 0.83)",
                    color: "rgba(14, 36, 182, 0.83)",
                    cursor: "pointer",
                  }}
                  onClick={toggle}
                >
                  {item.upload}
                </p>
              </div>
            </div>

            <Collapse isOpened={visible === index}>
              <div>
                <div
                  style={{
                    display: "flex",
                    padding: 24,
                    borderBottom: "solid #edeaea",
                    fontWeight: "bold",
                  }}
                >
                  <div style={{ display: "flex", marginLeft: 27 }}>
                    <p style={{ marginLeft: 8, width: 200 }}>{item.title}</p>
                  </div>
                  <p style={{ marginLeft: 590 }}>{item.num}</p>
                  <div style={{ display: "flex", marginLeft: 200 }}>
                    <i
                      className="fa-solid fa-up-long"
                      style={{
                        fontSize: 10,
                        marginTop: 3,
                        marginRight: 3,
                        borderBottom: "solid rgba(14, 36, 182, 0.83)",
                        color: "rgba(14, 36, 182, 0.83)",
                      }}
                    />
                    <p
                      style={{
                        borderBottom: "solid rgba(14, 36, 182, 0.83)",
                        color: "rgba(14, 36, 182, 0.83)",
                        cursor: "pointer",
                      }}
                      onClick={toggle}
                    >
                      {item.upload}
                    </p>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        ))}
    </div>
  );
}

export default FormList;
