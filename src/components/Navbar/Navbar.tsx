import React from "react";
import AuthModal from "../AuthModal/AuthModal";
import "./Navbar.css";

export default function Navbar({
  isLoggedIn,
  setIsLoggedIn,
  userData,
  setShowSideBar,
}: {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userData: any;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const loginData = JSON.parse(userData);

  function onLogout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <div className="nav">
        <div className="space-between">
          <div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowSideBar(true)}
            >
              {String.fromCharCode(9776)}
            </span>
            <img
              src="https://logo.clearbit.com/novopay.in"
              alt="novopay-logo"
            />
          </div>
          <div className="user">
            {isLoggedIn ? (
              <div style={{ marginTop: 12 }}>
                <span>{loginData.username}</span>
                <span onClick={onLogout}>Logout</span>
              </div>
            ) : (
              <div onClick={() => setShowModal(true)}>Login</div>
            )}
          </div>
        </div>
        {showModal && <AuthModal {...{ setIsLoggedIn, setShowModal }} />}
      </div>
    </>
  );
}
