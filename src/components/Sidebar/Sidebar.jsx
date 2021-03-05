import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div>
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
