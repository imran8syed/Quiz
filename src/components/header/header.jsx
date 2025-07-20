import React, { useState } from "react";
import admin from "../../assets/admin.png";
import university from "../../assets/university.png";
import ss from "../../assets/ss.png";
import greater_than from "../../assets/greater-than.png";

function Header({ onToggleSidebar }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ background: "#f7f7f7", gap: "40px", borderBottom: "1px solid #ccc", padding: "10px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", width: "80%", position: "relative" }}>
          <img
            className="greater-than"
            src={greater_than}
            alt="greater"
            style={{ cursor: "pointer" }}
            onClick={onToggleSidebar}
          />
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img className="university" src={university} alt="icon" />
          </div>
          {/* <strong>Dashboard</strong>
          <strong>Tests</strong>
          <strong>Question Banks</strong>
          <strong>Classes</strong>
          <strong>Teachers</strong> */}
          <img
            className="ss"
            src={ss}
            alt="arrow"
            style={{ cursor: "pointer" }}
            onClick={() => setShowMenu((open) => !open)}
          />
          {showMenu && (
            <div style={{
              position: "absolute",
              top: "60px",
              right: 0,
              background: "#fff",
              boxShadow: "0 0 5px rgba(0,0,0,0.2)",
              padding: "10px 20px",
              borderRadius: "8px",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}>
              <strong>Dashboard</strong>
              <strong>Tests</strong>
              <strong>Question Banks</strong>
              <strong>Classes</strong>
              <strong>Teachers</strong>
            </div>
          )}
        </div>
        <div style={{ fontWeight: "bold", background: "#dfe6f0", padding: "6px 12px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <img className="admin" src={admin} alt="admin_icon" />
          Admin
        </div>
      </div>
    </div>
  );
}

export default Header;
