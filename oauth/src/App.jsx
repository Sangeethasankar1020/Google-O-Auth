import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleSuccess = async (credentialResponse) => {
    try {
      // // Import jwt-decode dynamically
      // const jwt_decode = (await import("jwt-decode")).default;

      // Dynamically import jwt-decode
      // const { default: jwt_decode } = await import("jwt-decode");

      // const decoded = jwt_decode(credentialResponse.credential);

      const decoded = jwtDecode(credentialResponse.credential);

      console.log("User Info:", decoded);
      localStorage.setItem("userName", decoded.name);
      localStorage.setItem("userEmail", decoded.email);
      localStorage.setItem("userPicture", decoded.picture);

      // Set authentication flag
      localStorage.setItem("isAuthenticated", true);

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Decoding error:", error);
    }
  };

  return (
    <div>
      <h1>Google Auth Integration</h1>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={(error) => {
          console.error("Login Failed:", error);
          alert("An error occurred during login. Please try again.");
        }}
      />
    </div>
  );
}

export default App;
