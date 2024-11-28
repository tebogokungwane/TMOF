import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UpButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Show button only if not on the home page
  if (location.pathname === "/") return null;

  return (
    <button
      className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-md hover:bg-secondary transition"
      onClick={() => navigate("/")}
    >
      ↑ Back to Home
    </button>
  );
};

export default UpButton;
