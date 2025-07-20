import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisible((visible) => !visible);
  };

  return (
    <div>
      <Header onToggleSidebar={handleToggleSidebar} />
      <div style={{ display: "flex" }}>
        {sidebarVisible && <Sidebar />}
        <div style={{ flex: 1 }}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
