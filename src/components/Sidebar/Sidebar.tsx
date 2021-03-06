import React from "react";
import "./Sidebar.css";

export default function Sidebar({
  setShowSideBar,
}: {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="sidediv">
        <h1 onClick={() => setShowSideBar(false)}>X</h1>
        <a href="/home">
          <h3>Home</h3>
        </a>
        <a href="/about">
          <h3>About</h3>
        </a>
        <a href="/contact-us">
          <h3>Contact Us</h3>
        </a>
      </div>
    </>
  );
}
