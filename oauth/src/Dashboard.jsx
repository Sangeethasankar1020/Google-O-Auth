import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  // Retrieve the user's name from localStorage
  const userName = localStorage.getItem("userName");
  const userPicture = localStorage.getItem("UserPicture");
  const userEmail = localStorage.getItem("UserEmail");
  const handleLogout = () => {
    // Clear the user data from localStorage
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPicture");
    localStorage.removeItem("isAuthenticated");

    // Redirect to the login page
    navigate("/");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {userPicture && (
        <img
          src={userPicture}
          alt={`${userName}'s profile`}
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
      )}
      <p>Welcome, {userName}!</p>
      <p>Email: {userEmail}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
