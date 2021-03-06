import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const userData = localStorage.getItem("user");
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    userData === null ? false : true
  );
  const [showSidebar, setShowSideBar] = React.useState<boolean>(false);
  return (
    <div className="approot">
      {showSidebar && <Sidebar {...{ setShowSideBar }} />}
      <Navbar {...{ isLoggedIn, setIsLoggedIn, userData, setShowSideBar }} />
    </div>
  );
}

export default App;
