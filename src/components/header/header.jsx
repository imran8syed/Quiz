import React, { useState, useEffect } from "react";
import admin from "../../assets/admin.png";
import university from "../../assets/university.png";
import greater_than from "../../assets/greater-than.png";

function Header({ onToggleSidebar }) {
  const [showMenu, setShowMenu] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);

  // Responsive: update isMobile and minimize state on resize
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      setMinimized(mobile); // Only minimize on mobile
      setNavDropdownOpen(false); // Close dropdown on resize
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ background: "#f7f7f7", gap: "40px", borderBottom: "1px solid #ccc", padding: "10px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", width: "80%", position: "relative" }}>
          {/* Left greater-than icon (sidebar toggle) */}
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
          {/* Minimize/Expand Button: hidden on desktop (removed as per request) */}
          {/* Navigation Items: show only if not minimized */}
          {!minimized && (
            <>
              <strong>Dashboard</strong>
              <strong>Tests</strong>
              <strong>Question Banks</strong>
              <strong>Classes</strong>
              <strong>Teachers</strong>
            </>
          )}
          {/* When minimized, show right-side greater-than icon for dropdown */}
          {minimized && (
            <div style={{ position: "relative", marginLeft: "auto" }}>
              <img
                src={greater_than}
                alt="show nav dropdown"
                style={{ cursor: "pointer", width: 28, height: 28, marginLeft: 8 }}
                onClick={() => setNavDropdownOpen((open) => !open)}
              />
              {navDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: 36,
                    right: 0,
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    zIndex: 100,
                    minWidth: 160,
                    padding: "8px 0"
                  }}
                >
                  <div style={{ padding: "8px 20px", cursor: "pointer", fontWeight: "bold" }}>Dashboard</div>
                  <div style={{ padding: "8px 20px", cursor: "pointer", fontWeight: "bold" }}>Tests</div>
                  <div style={{ padding: "8px 20px", cursor: "pointer", fontWeight: "bold" }}>Question Banks</div>
                  <div style={{ padding: "8px 20px", cursor: "pointer", fontWeight: "bold" }}>Classes</div>
                  <div style={{ padding: "8px 20px", cursor: "pointer", fontWeight: "bold" }}>Teachers</div>
                </div>
              )}
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
