import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const userData = localStorage.getItem("user");
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    userData === null ? false : true
  );
  const [showSidebar, setShowSideBar] = React.useState<boolean>(true);
  return (
    <div className="approot">
      <Navbar {...{ isLoggedIn, setIsLoggedIn, userData }} />
    </div>
  );
}

export default App;
