import React from "react";
import { dummyLoginAPICall } from "../../DummyData/Users";
import "./AuthModal.css";

export default function AuthModal({
  setIsLoggedIn,
  setShowModal,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onLogin() {
    username.trim().length > 0 &&
      password.trim().length > 0 &&
      dummyLoginAPICall(username, password)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify({ username, password }));
          setIsLoggedIn(true);
          setShowModal(false);
        })
        .catch((err) => alert(err.msg));
  }

  return (
    <div className="modal">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          right: 76,
        }}
      >
        <h1>Login</h1>
        <h1
          onClick={() => setShowModal(false)}
          style={{
            color: "slateblue",
            cursor: "pointer",
            marginLeft: 60,
          }}
        >
          X
        </h1>
      </div>
      <label>Username: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ margin: 10 }} onClick={onLogin}>
        Login
      </button>
    </div>
  );
}
