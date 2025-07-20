import React from "react";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#f0f0f0", padding: "10px" }}>
      <button style={{ width: "100%", borderRadius:"5px",padding:"20px",fontSize:"20px", marginBottom: "10px",background:"blue",color:"white" }}>Add Question</button>
      <div>
        <strong>Snap shots</strong><br /><br />
        <strong>Sections</strong>
        <ul>
          <li>New Section</li>
          <li style={{ color: "red" }}>Section 1</li>
          <li style={{ color: "blue" }}>Section 2</li>
          <li>Uncategorized (5)</li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <strong>Test Information</strong>
        <ul>
          <li>Marks: 10</li>
          <li>No. of Q: 10</li>
          <li>Neg: 10</li>
          <li>Duration: 10</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
