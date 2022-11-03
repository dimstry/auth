import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}
